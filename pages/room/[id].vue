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

const messages = ref([])
const players = ref(new Set())
const route = useRoute();
let socket;

const text = ref('');
const nick = ref('');

onMounted(() => {
  fetch(`/api/websocket/init`).then(()=>{
    socket = io();
    socket.on("connect", () => {
      socket.on("message", (message) => {
        messages.value.push(message);
      });
      socket.on("joined", (nick) => {
        players.value.add(nick);
      });
      socket.on("leave", (nick) => {
        players.value.delete(nick);
      });
    });
  });
});

function join() {
  socket.emit("join", {
    sid: socket.id,
    nick: nick.value,
    room: route.params.id
  });
};

function send() {
  socket.emit("sendMessage", text.value);
};

</script>

<style scoped></style>
