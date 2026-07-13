<template>
  <div class="detail-page" v-if="event">
    <button class="btn-back" @click="$router.push('/timeline')">
      ← 返回时间轴
    </button>

    <article class="detail-article container-narrow">
      <div class="detail-meta">
        <span class="detail-type-badge" :class="event.type">{{ typeLabel }}</span>
        <span class="detail-date">{{ formattedDate }}</span>
        <span class="detail-mood">{{ event.mood }}</span>
      </div>

      <h1 class="detail-title">{{ event.title }}</h1>

      <p class="detail-location" v-if="event.location">
        <span class="loc-icon">📍</span>
        {{ event.location }}
      </p>

      <div class="detail-content">
        <p v-for="(para, idx) in contentParagraphs" :key="idx">{{ para }}</p>
      </div>

      <div class="detail-photos" v-if="event.photos && event.photos.length > 0">
        <PhotoPlaceholder
          v-for="(photo, idx) in event.photos"
          :key="idx"
          height="300px"
        />
      </div>
      <PhotoPlaceholder height="250px" v-else />

      <div class="detail-tags" v-if="event.tags && event.tags.length > 0">
        <span class="tag" v-for="tag in event.tags" :key="tag">{{ tag }}</span>
      </div>
    </article>

    <div class="detail-nav container-narrow">
      <button
        class="nav-btn"
        @click="navigateTo(prevId)"
        :disabled="!prevId"
      >
        ← 上一篇
      </button>
      <button
        class="nav-btn"
        @click="navigateTo(nextId)"
        :disabled="!nextId"
      >
        下一篇 →
      </button>
    </div>
  </div>

  <div class="empty-placeholder" v-else>
    <span class="icon">😅</span>
    <p>未找到该事件记录</p>
    <router-link to="/timeline" class="link-back">返回时间轴</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { timelineEvents, getEventById } from '@/data/timeline.js'
import PhotoPlaceholder from '@/components/PhotoPlaceholder.vue'

const props = defineProps({
  id: String
})

const router = useRouter()

const event = computed(() => getEventById(props.id))

const sortedEvents = computed(() => {
  return [...timelineEvents].sort((a, b) => new Date(a.date) - new Date(b.date))
})

const currentIndex = computed(() => {
  return sortedEvents.value.findIndex(e => e.id === props.id)
})

const prevId = computed(() => {
  const idx = currentIndex.value
  if (idx > 0) return sortedEvents.value[idx - 1].id
  return null
})

const nextId = computed(() => {
  const idx = currentIndex.value
  if (idx < sortedEvents.value.length - 1) return sortedEvents.value[idx + 1].id
  return null
})

const typeLabel = computed(() => {
  const map = { milestone: '纪念', photo: '照片', text: '日常', video: '视频' }
  return map[event.value?.type] || '记录'
})

const formattedDate = computed(() => {
  if (!event.value) return ''
  const d = new Date(event.value.date)
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日'
})

const contentParagraphs = computed(() => {
  if (!event.value) return []
  return event.value.content.split('\n').filter(p => p.trim())
})

function navigateTo(id) {
  if (id) router.push('/timeline/' + id)
}
</script>

<style scoped>
.detail-page {
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

.detail-meta {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-bottom: var(--space-md);
}

.detail-type-badge {
  padding: 2px 12px;
  font-size: var(--font-size-xs);
  border-radius: 20px;
  font-weight: 500;
}

.detail-type-badge.milestone {
  background: var(--color-accent-light);
  color: #fff;
}
.detail-type-badge.photo {
  background: var(--color-gold-light);
  color: var(--color-text);
}
.detail-type-badge.text {
  background: var(--color-green-light);
  color: var(--color-text);
}

.detail-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.detail-mood {
  margin-left: auto;
  font-size: var(--font-size-xl);
}

.detail-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-md);
}

.detail-location {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.loc-icon {
  font-style: normal;
}

.detail-content {
  font-size: var(--font-size-base);
  line-height: 1.9;
  color: var(--color-text);
  margin-bottom: var(--space-2xl);
}

.detail-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  margin-bottom: var(--space-lg);
}

.detail-tags {
  display: flex;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-2xl);
}

.tag {
  padding: 2px 10px;
  font-size: var(--font-size-xs);
  background: var(--color-overlay);
  border-radius: 4px;
  color: var(--color-text-secondary);
}

.detail-nav {
  display: flex;
  justify-content: space-between;
  gap: var(--space-md);
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-border);
}

.nav-btn {
  padding: var(--space-sm) var(--space-lg);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-btn:hover:not(:disabled) {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.link-back {
  display: block;
  margin-top: var(--space-md);
}

@media (max-width: 480px) {
  .detail-photos {
    grid-template-columns: 1fr;
  }
}
</style>
