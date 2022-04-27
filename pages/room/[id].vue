<template lang="pug">
p Hola mundo!
</template>

<script setup lang="ts">
import io from "socket.io-client";
let socket;

const route = useRoute();

const socketInit = async () => {
  fetch("/api/");

  socket = io();

  socket.on("connect", () => {
    console.log("connected");
  });

  return null;
};

socketInit();
</script>

<style scoped></style>
