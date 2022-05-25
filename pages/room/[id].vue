<template lang="pug">
div
  div(v-if="!players.has(nick)")
    span {{"Nickname: "}}
    input(v-model="nick")
    button(@click="join")
      | Join
  div(v-else)
    div
      input(v-model="text")
      button(@click="send")
        | Click me
    h3 Players
      li(v-for="player in players")
        | {{ player }}
    h3 Chat
      li(v-for="message in messages")
        | {{ message }}
</template>

<script setup lang="ts">
import io from "socket.io-client";
import { useStore } from "~~/store";
import { storeToRefs } from "pinia";

const store = useStore();

const { players, messages } = storeToRefs(store);

const route = useRoute();
let socket;

const text = ref("");
const nick = ref("");

onMounted(() => {
  fetch(`/api/websocket/init`).then(() => {
    socket = io();
    socket.on("connection", () => {
      socket.on("message", store.addMessage);
      socket.on("joined", store.addPlayer);
      socket.on("leave", store.removePlayer);
    });
  });
});

function join() {
  console.log("join");
  socket.emit(
    "join",
    {
      sid: socket.id,
      nick: nick.value,
      room: route.params.id,
    },
    (response) => {
      response.users.forEach((user) => {
        store.addPlayer(user.nick);
      });
    }
  );
}

function send() {
  socket.emit("sendMessage", text.value);
};

</script>

<style scoped></style>
