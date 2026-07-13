<template>
  <div class="letter-detail" v-if="letter">
    <button class="btn-back" @click="$router.push('/letters')">
      ← 返回情书列表
    </button>

    <article class="letter-article container-narrow">
      <div class="letter-header">
        <span class="letter-direction">
          {{ letter.from }} → {{ letter.to }}
        </span>
        <span class="letter-date">{{ formattedDate }}</span>
      </div>

      <h1 class="letter-title">{{ letter.title }}</h1>

      <div class="letter-content">
        <p v-for="(para, idx) in contentParagraphs" :key="idx">{{ para }}</p>
      </div>
    </article>
  </div>

  <div class="empty-placeholder" v-else>
    <span class="icon">😅</span>
    <p>未找到这封信件</p>
    <router-link to="/letters" class="link-back">返回情书列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getLetterById } from '@/data/letters.js'

const props = defineProps({
  id: String
})

const letter = computed(() => getLetterById(props.id))

const formattedDate = computed(() => {
  if (!letter.value) return ''
  const d = new Date(letter.value.date)
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
})

const contentParagraphs = computed(() => {
  if (!letter.value) return []
  return letter.value.content.split('\n').filter(p => p.trim())
})
</script>

<style scoped>
.letter-detail {
  padding-bottom: var(--space-2xl);
}

.btn-back {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-sm) 0;
  background: none;
  border: none;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: color var(--transition-fast);
  margin-bottom: var(--space-lg);
}

.btn-back:hover {
  color: var(--color-accent);
}

.letter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-lg);
  padding-bottom: var(--space-md);
  border-bottom: 1px solid var(--color-border);
}

.letter-direction {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
  font-weight: 500;
}

.letter-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.letter-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-xl);
}

.letter-content {
  font-size: var(--font-size-base);
  line-height: 2;
  color: var(--color-text);
}

.link-back {
  display: block;
  margin-top: var(--space-md);
}
</style>
