<template lang="pug">
button()
  | Click me
</template>

<script setup lang="ts">
import { faker } from "@faker-js/faker";
import io from "socket.io-client";
let socket;

const message = ref("");

const route = useRoute();

const socketInit = async () => {
  fetch("/api");

  socket = io();

  socket.on("connect", () => {
    console.log("connected");

    socket.emit("joinRoom", {
      nick: faker.animal.type(),
      room: route.params.id,
    });

    socket.on("userJoined", (user) => {
      console.log(user);
    });

    socket.on("newMsg", (msg) => {
      console.log(msg);
    });
  });

  return null;
};

function emitMsg() {
  socket.emit("msg", message.value);
}

socketInit();
</script>

<style scoped></style>
