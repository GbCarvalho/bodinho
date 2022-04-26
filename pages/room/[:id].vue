<template lang="pug">
button(@click="emitReady")
  | Click me
</template>

<script setup lang="ts">
import io from "socket.io-client";
let socket;

const route = useRoute();

const socketInit = async () => {
  fetch("/api/room/" + route.params.id);

  socket = io();

  socket.on("connect", () => {
    console.log("connected");
  });

  return null;
};

function emitReady() {
  socket.emit("ready", { room: route.params.id });
}

socketInit();
</script>

<style scoped></style>
