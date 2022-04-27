<template lang="pug">
button()
  | Click me
</template>

<script setup lang="ts">
import io from "socket.io-client";
let socket;

const route = useRoute();

const socketInit = async () => {
  fetch("/api");

  socket = io();

  socket.on("connect", () => {
    console.log("connected");

  socket.on("connection_callback", (message) => {
    console.log(message);
  });

  });

  return null;
};

socketInit();
</script>

<style scoped></style>