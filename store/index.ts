import { defineStore } from "pinia";

export const useStore = defineStore("main", () => {
  const players = ref(new Set());
  const messages = ref([]);

  const addPlayer = (nick) => {
    players.value.add(nick);
  };

  const removePlayer = (nick) => {
    players.value.delete(nick);
  };

  const addMessage = (message) => {
    messages.value.push(message);
  };

  return { players, messages, addPlayer, removePlayer, addMessage };
});
