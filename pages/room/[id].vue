<template lang="pug">
div
  div
    input(v-model="text")
    button(@click="send")
      | Click me
  li(v-for="message in messages")
    | {{ message }}
</template>

<script setup lang="ts">
import io from "socket.io-client";
import {faker} from "@faker-js/faker";

const messages = ref([])
const route = useRoute();
let socket;

const text = ref('');

onMounted(() => {
  socket = io();
  socket.on("connect", () => {
    socket.emit("join", {
      sid: socket.id,
      nick: faker.name.firstName(),
      room: route.params.id
    });
    socket.on("message", (message) => {
      messages.value.push(message);
    });
    socket.on("joined", (message) => {
      console.log(message.value);
    });
  });
});

function send () {
  socket.emit("sendMessage", text.value);
};

</script>

<style scoped></style>
