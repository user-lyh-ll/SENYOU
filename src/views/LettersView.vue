<template>
  <div class="letters-page">
    <h1 class="page-title">情书</h1>
    <p class="page-subtitle">写给你的话，都留在这里</p>

    <div class="letters-list" v-if="letters.length > 0">
      <LetterCard
        v-for="letter in sortedLetters"
        :key="letter.id"
        :letter="letter"
      />
    </div>

    <div class="empty-placeholder" v-else>
      <span class="icon">💌</span>
      <p>还没有情书，写下第一封吧</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { letters } from '@/data/letters.js'
import LetterCard from '@/components/LetterCard.vue'

const sortedLetters = computed(() => {
  return [...letters].sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<style scoped>
.letters-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
</style>
