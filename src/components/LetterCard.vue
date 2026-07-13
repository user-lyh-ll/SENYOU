<template>
  <div class="letter-card" @click="$router.push('/letters/' + letter.id)">
    <div class="letter-header">
      <span class="letter-direction">
        {{ letter.from }} &#8594; {{ letter.to }}
      </span>
      <span class="letter-date">{{ formattedDate }}</span>
    </div>
    <h3 class="letter-title">{{ letter.title }}</h3>
    <p class="letter-summary" v-if="!letter.isPrivate">{{ letter.summary }}</p>
    <p class="letter-private" v-else>
      <span class="lock-icon">&#128274;</span> 这是一封私密信件
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  letter: { type: Object, required: true }
})

const formattedDate = computed(() => {
  const d = new Date(props.letter.date)
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
})
</script>

<style scoped>
.letter-card {
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.letter-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent-light);
  transform: translateY(-2px);
}

.letter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-sm);
}

.letter-direction {
  font-size: var(--font-size-xs);
  color: var(--color-accent);
  font-weight: 500;
}

.letter-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.letter-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: var(--space-sm);
}

.letter-summary {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.letter-private {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.lock-icon {
  font-style: normal;
}
</style>
