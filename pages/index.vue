<template lang="pug">
button(@click="room")
  | Click me, meeeh!
</template>

<script setup lang="ts">
import { nanoid } from "nanoid";
const router = useRouter();

function room() {
  const id = nanoid(8);
  return navigateTo({
    path: `/room/${id}`,
  });
}
</script>

<style scoped></style>
