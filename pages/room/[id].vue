<template lang="pug">
div
  div(v-if="!players.has(nick)")
    span {{"Nickname: "}}
    form(@submit.prevent="join")
      input(v-model="nick")
      button(type="submit")
        | Join
  div(v-else)
    form(@submit.prevent="send")
      input(v-model="text")
      button(type="submit")
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
  store.addMessage(text.value);
}
</script>

<style scoped></style>
