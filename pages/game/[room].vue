<template>
  <div></div>
</template>

<script setup lang="ts">
import io from "socket.io-client";
let socket;

const message = ref<string>("");

const socketInitializer = async () => {
  fetch("/api/ws");
  socket = io();

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("update-input", (value) => {
    message.value = value;
  });

  return null;
};

socketInitializer();

const input = ref<string>("");

watch(input, (value) => {
  socket.emit("input-change", value);
});
</script>

<style scoped></style>
