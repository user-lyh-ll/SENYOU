<template>
  <div class="home">
    <!-- Hero 区 -->
    <section class="hero">
      <h1 class="hero-title">
        <span class="hero-name">宇晗</span>
        <span class="hero-symbol">&#10084;</span>
        <span class="hero-name">淋</span>
      </h1>
      <p class="hero-tagline">陪你走过的每一天</p>

      <div class="hero-counter">
        <div class="counter-number">{{ daysSince }}</div>
        <div class="counter-label">在一起的天数</div>
      </div>

      <div class="hero-next-ann" v-if="nextAnniversary.days >= 0">
        <span class="next-label">距离「{{ nextAnniversary.label }}」还有</span>
        <span class="next-number">{{ nextAnniversary.days }}</span>
        <span class="next-unit">天</span>
      </div>
    </section>

    <!-- 最新事件 -->
    <section class="section recent-section">
      <h2 class="section-title">最新回忆</h2>
      <div class="recent-list" v-if="recentEvents.length > 0">
        <TimelineCard
          v-for="event in recentEvents"
          :key="event.id"
          :event="event"
        />
      </div>
      <div class="empty-placeholder" v-else>
        <span class="icon">&#128140;</span>
        <p>还没有记录，快去时间轴添加第一条回忆吧</p>
      </div>
      <div class="section-footer" v-if="recentEvents.length > 0">
        <router-link to="/timeline" class="link-more">查看全部回忆 &rarr;</router-link>
      </div>
    </section>

    <!-- 快捷入口 -->
    <section class="quick-links">
      <router-link to="/albums" class="quick-card">
        <span class="quick-icon">&#128247;</span>
        <span class="quick-text">相册</span>
      </router-link>
      <router-link to="/letters" class="quick-card">
        <span class="quick-icon">&#128221;</span>
        <span class="quick-text">情书</span>
      </router-link>
      <router-link to="/anniversaries" class="quick-card">
        <span class="quick-icon">&#127873;</span>
        <span class="quick-text">纪念日</span>
      </router-link>
      <router-link to="/wishlist" class="quick-card">
        <span class="quick-icon">&#127775;</span>
        <span class="quick-text">心愿单</span>
      </router-link>
    </section>

    <!-- 随机回忆按钮 -->
    <button class="btn-random" @click="goRandom" title="随机一条回忆">
      <span class="btn-icon">&#127922;</span>
      随机回忆
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { timelineEvents, getRandomEvent } from '@/data/timeline.js'
import { getDaysSince, getDaysUntil, anniversaryEvents } from '@/data/anniversaries.js'
import TimelineCard from '@/components/TimelineCard.vue'

const router = useRouter()

// 在一起天数
const daysSince = ref(0)
// 下一个纪念日
const nextAnniversary = ref({ days: -1, label: '' })

// 最新的 3 条事件
const recentEvents = computed(() => {
  return [...timelineEvents]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
})

onMounted(() => {
  daysSince.value = getDaysSince('2024-09-01')

  // 找最近的纪念日
  let minDays = Infinity
  let closest = null
  for (const ann of anniversaryEvents) {
    const d = getDaysUntil(ann.date)
    if (d >= 0 && d < minDays) {
      minDays = d
      closest = ann
    }
  }
  if (closest) {
    nextAnniversary.value = { days: minDays, label: closest.label }
  }
})

function goRandom() {
  const ev = getRandomEvent()
  if (ev) {
    router.push('/timeline/' + ev.id)
  }
}
</script>

<style scoped>
.home {
  padding-top: var(--space-xl);
}

/* Hero */
.hero {
  text-align: center;
  padding: var(--space-3xl) var(--space-lg);
}

.hero-title {
  font-size: var(--font-size-hero);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-lg);
  margin-bottom: var(--space-md);
}

.hero-name {
  font-weight: 700;
  letter-spacing: 2px;
}

.hero-symbol {
  color: var(--color-accent);
  font-size: 3rem;
}

.hero-tagline {
  color: var(--color-text-secondary);
  font-size: var(--font-size-lg);
  margin-bottom: var(--space-2xl);
}

.hero-counter {
  margin-bottom: var(--space-lg);
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
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-top: var(--space-sm);
}

.hero-next-ann {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.next-number {
  font-family: var(--font-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-accent);
}

.next-unit {
  color: var(--color-text-light);
}

/* Recent section */
.recent-section {
  margin-top: var(--space-2xl);
}

.recent-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-lg);
}

.section-footer {
  text-align: center;
  margin-top: var(--space-lg);
}

.link-more {
  font-size: var(--font-size-sm);
  color: var(--color-accent);
}

/* Quick links */
.quick-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-top: var(--space-2xl);
}

.quick-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-xl) var(--space-md);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-base);
}

.quick-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
  color: var(--color-accent);
}

.quick-icon {
  font-size: 1.75rem;
}

.quick-text {
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* Random button */
.btn-random {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin: var(--space-2xl) auto 0;
  padding: var(--space-sm) var(--space-xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 40px;
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-random:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  box-shadow: var(--shadow-sm);
}

.btn-icon {
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
    gap: var(--space-sm);
  }

  .hero-symbol {
    font-size: 2rem;
  }

  .counter-number {
    font-size: 3.5rem;
  }

  .quick-links {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
