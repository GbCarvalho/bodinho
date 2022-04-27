<template lang="pug">
div
  input(v-model="roomId")
  button(@click="room")
    | {{ (roomId === "" ? 'New room!' : 'Join room!') }}
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";

const roomId = ref("")

function room() {
  return navigateTo({
    path: `/room/${roomId.value === "" ? nanoid(8) : roomId.value}`,
  });
}
</script>

<style scoped></style>
