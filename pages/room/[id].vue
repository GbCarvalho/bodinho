<template lang="pug">
button(@click="connect")
  | Click me
</template>

<script setup lang="ts">
import io from "socket.io-client";

const route = useRoute();

function connect () {
  const socket = io();

  socket.on("connection_callback", (message) => {
    console.log(message);
  });


  return null;
};

</script>

<style scoped></style>