<template>
  <div class="timeline-page">
    <h1 class="page-title">时间轴</h1>
    <p class="page-subtitle">我们的故事，从开始到现在</p>

    <!-- Filters -->
    <div class="filters">
      <div class="filter-group">
        <label class="filter-label">年份</label>
        <div class="filter-buttons">
          <button
            class="filter-btn"
            :class="{ active: activeYear === '' }"
            @click="activeYear = ''"
          >全部</button>
          <button
            v-for="year in years"
            :key="year"
            class="filter-btn"
            :class="{ active: activeYear === year }"
            @click="activeYear = year"
          >{{ year }}</button>
        </div>
      </div>

      <div class="filter-group">
        <label class="filter-label">类型</label>
        <div class="filter-buttons">
          <button
            v-for="t in types"
            :key="t.value"
            class="filter-btn"
            :class="{ active: activeType === t.value }"
            @click="activeType = t.value"
          >{{ t.label }}</button>
        </div>
      </div>
    </div>

    <!-- Timeline list -->
    <div class="timeline-list" v-if="filtered.length > 0">
      <div
        v-for="(event, idx) in filtered"
        :key="event.id"
        class="timeline-item"
        :class="{ 'timeline-alt': idx % 2 === 1 }"
      >
        <div class="timeline-dot"></div>
        <TimelineCard :event="event" />
      </div>
    </div>

    <div class="empty-placeholder" v-else>
      <span class="icon">&#128203;</span>
      <p>暂无匹配的记录，去添加第一条吧</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { timelineEvents, getYears } from '@/data/timeline.js'
import TimelineCard from '@/components/TimelineCard.vue'

const activeYear = ref('')
const activeType = ref('all')

const years = computed(() => getYears())

const types = [
  { value: 'all', label: '全部' },
  { value: 'milestone', label: '纪念' },
  { value: 'photo', label: '照片' },
  { value: 'text', label: '日常' }
]

const filtered = computed(() => {
  let list = [...timelineEvents]
  if (activeYear.value) {
    list = list.filter(e => e.date.startsWith(activeYear.value))
  }
  if (activeType.value !== 'all') {
    list = list.filter(e => e.type === activeType.value)
  }
  return list.sort((a, b) => new Date(b.date) - new Date(a.date))
})
</script>

<style scoped>
.timeline-page {
  padding-bottom: var(--space-2xl);
}

/* Filters */
.filters {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-bottom: var(--space-2xl);
}

.filter-group {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.filter-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: 500;
  min-width: 40px;
}

.filter-buttons {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.filter-btn {
  padding: 4px 14px;
  font-size: var(--font-size-sm);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  background: var(--color-bg-card);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-accent-light);
  color: var(--color-accent);
}

.filter-btn.active {
  background: var(--color-accent);
  color: #fff;
  border-color: var(--color-accent);
}

/* Timeline */
.timeline-list {
  position: relative;
}

.timeline-list::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--space-lg);
  padding-left: calc(50% + var(--space-xl));
}

.timeline-item.timeline-alt {
  padding-left: 0;
  padding-right: calc(50% + var(--space-xl));
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: var(--space-xl);
  width: 14px;
  height: 14px;
  background: var(--color-accent);
  border: 3px solid var(--color-bg);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

@media (max-width: 768px) {
  .timeline-list::before {
    left: 28px;
  }

  .timeline-item,
  .timeline-item.timeline-alt {
    padding: 0 0 0 60px;
  }

  .timeline-dot {
    left: 28px;
  }
}
</style>
