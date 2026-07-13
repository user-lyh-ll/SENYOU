<template>
  <div class="anniversaries-page">
    <h1 class="page-title">纪念日</h1>
    <p class="page-subtitle">那些对我们来说特别的日子</p>

    <!-- Main counter -->
    <div class="main-counter">
      <div class="counter-number">{{ daysSince }}</div>
      <div class="counter-label">
        自从「{{ relationshipStart.label }}」已经过了
      </div>
      <div class="counter-date">始于 {{ startDate }}</div>
    </div>

    <!-- Anniversary list -->
    <div class="ann-list" v-if="anniversaryEvents.length > 0">
      <div
        v-for="ann in anniversariesWithCountdown"
        :key="ann.id"
        class="ann-card"
        :class="{ 'ann-upcoming': ann.isUpcoming }"
      >
        <div class="ann-icon">
          <span v-if="ann.isUpcoming">🎁</span>
          <span v-else>💝</span>
        </div>
        <div class="ann-body">
          <h3 class="ann-label">{{ ann.label }}</h3>
          <p class="ann-date">{{ formatDate(ann.date) }}</p>
          <p class="ann-note" v-if="ann.note">{{ ann.note }}</p>
          <div class="ann-countdown" v-if="ann.isUpcoming">
            <span class="countdown-days">{{ ann.daysUntil }}</span>
            <span class="countdown-label">天后</span>
          </div>
          <div class="ann-countdown" v-else>
            <span class="countdown-days">{{ ann.daysSince }}</span>
            <span class="countdown-label">天前</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
  relationshipStart,
  anniversaryEvents,
  getDaysSince,
  getDaysUntil
} from '@/data/anniversaries.js'

const daysSince = ref(0)
const startDate = ref('')

onMounted(() => {
  daysSince.value = getDaysSince(relationshipStart.date)
  const d = new Date(relationshipStart.date)
  startDate.value = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
})

const anniversariesWithCountdown = computed(() => {
  return anniversaryEvents.map(ann => {
    const today = new Date()
    const annDate = new Date(ann.date)
    // 判断今年这个日期是否已过
    const thisYear = new Date(today.getFullYear(), annDate.getMonth(), annDate.getDate())
    const isPast = thisYear < today
    return {
      ...ann,
      isUpcoming: !isPast,
      daysUntil: getDaysUntil(ann.date),
      daysSince: isPast
        ? Math.floor((today.getTime() - thisYear.getTime()) / (1000 * 60 * 60 * 24))
        : 0
    }
  }).sort((a, b) => a.daysUntil - b.daysUntil)
})

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
}
</script>

<style scoped>
.main-counter {
  text-align: center;
  padding: var(--space-2xl) var(--space-lg);
  margin-bottom: var(--space-2xl);
  background: var(--color-bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.counter-number {
  font-family: var(--font-heading);
  font-size: 5rem;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
  letter-spacing: 4px;
}

.counter-label {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-top: var(--space-md);
}

.counter-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-top: var(--space-sm);
}

.ann-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.ann-card {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.ann-card.ann-upcoming {
  border-left: 4px solid var(--color-accent);
}

.ann-icon {
  font-size: 1.5rem;
  padding-top: var(--space-xs);
}

.ann-body {
  flex: 1;
}

.ann-label {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: 4px;
}

.ann-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--space-sm);
}

.ann-note {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-sm);
}

.ann-countdown {
  display: flex;
  align-items: baseline;
  gap: var(--space-xs);
}

.countdown-days {
  font-family: var(--font-heading);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-accent);
}

.countdown-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

@media (max-width: 480px) {
  .counter-number {
    font-size: 3.5rem;
  }
}
</style>
