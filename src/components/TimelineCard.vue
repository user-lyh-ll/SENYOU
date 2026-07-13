<template>
  <article class="timeline-card" @click="$router.push('/timeline/' + event.id)">
    <div class="card-date">
      <span class="date-day">{{ day }}</span>
      <span class="date-month">{{ month }}</span>
    </div>
    <div class="card-body">
      <div class="card-header">
        <span class="card-type-badge" :class="event.type">
          {{ typeLabel }}
        </span>
        <span class="card-mood">{{ event.mood }}</span>
      </div>
      <h3 class="card-title">{{ event.title }}</h3>
      <p class="card-summary">{{ event.summary }}</p>
      <div class="card-meta">
        <span class="meta-location" v-if="event.location">
          <span class="meta-icon">&#128205;</span>
          {{ event.location }}
        </span>
        <span class="meta-tags">
          <span class="tag" v-for="tag in event.tags" :key="tag">{{ tag }}</span>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  event: { type: Object, required: true }
})

const emits = defineEmits()

const day = computed(() => {
  const d = new Date(props.event.date)
  return d.getDate().toString().padStart(2, '0')
})

const month = computed(() => {
  const d = new Date(props.event.date)
  const m = d.getMonth() + 1
  return m + '月'
})

const typeLabel = computed(() => {
  const map = { milestone: '纪念', photo: '照片', text: '日常', video: '视频' }
  return map[props.event.type] || '记录'
})
</script>

<style scoped>
.timeline-card {
  display: flex;
  gap: var(--space-lg);
  padding: var(--space-lg);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
  border: 1px solid transparent;
}

.timeline-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent-light);
  transform: translateY(-2px);
}

.card-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 56px;
  padding-top: var(--space-xs);
}

.date-day {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  font-family: var(--font-heading);
  color: var(--color-accent);
  line-height: 1;
}

.date-month {
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
  margin-top: 2px;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.card-type-badge {
  display: inline-block;
  padding: 2px 10px;
  font-size: var(--font-size-xs);
  border-radius: 20px;
  background: var(--color-bg-alt);
  color: var(--color-text-secondary);
  font-weight: 500;
}

.card-type-badge.milestone {
  background: var(--color-accent-light);
  color: #fff;
}
.card-type-badge.photo {
  background: var(--color-gold-light);
  color: var(--color-text);
}
.card-type-badge.text {
  background: var(--color-green-light);
  color: var(--color-text);
}

.card-mood {
  font-size: var(--font-size-lg);
  margin-left: auto;
}

.card-title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-sm);
  color: var(--color-text);
}

.card-summary {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-md);
  flex-wrap: wrap;
}

.meta-location {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.meta-icon {
  font-style: normal;
}

.tag {
  display: inline-block;
  padding: 1px 8px;
  font-size: var(--font-size-xs);
  background: var(--color-overlay);
  border-radius: 4px;
  color: var(--color-text-secondary);
}

@media (max-width: 480px) {
  .timeline-card {
    flex-direction: column;
    gap: var(--space-sm);
  }

  .card-date {
    flex-direction: row;
    gap: var(--space-sm);
    min-width: auto;
  }
}
</style>
