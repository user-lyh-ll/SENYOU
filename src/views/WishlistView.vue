<template>
  <div class="wishlist-page">
    <h1 class="page-title">心愿单</h1>
    <p class="page-subtitle">想一起做的事，想一起去的地方</p>

    <div class="wish-columns">
      <div class="wish-col">
        <h2 class="col-title">🌍 想去的地方</h2>
        <div class="wish-list">
          <div
            v-for="wish in placesWishes"
            :key="wish.id"
            class="wish-item"
            :class="{ completed: wish.completed }"
          >
            <div class="wish-top">
              <span class="wish-stars" v-if="wish.priority">
                <span v-for="n in wish.priority" :key="n">⭐</span>
              </span>
              <span class="wish-text">{{ wish.text }}</span>
            </div>
            <div class="wish-meta" v-if="!wish.completed">
              <span class="wish-date">添加于 {{ wish.addedDate }}</span>
            </div>
            <div class="wish-meta" v-else>
              <span class="wish-done">✅ 已完成</span>
              <span class="wish-date" v-if="wish.completedDate">
                · {{ wish.completedDate }}
              </span>
              <p class="wish-note" v-if="wish.note">{{ wish.note }}</p>
            </div>
          </div>

          <div class="empty-placeholder" v-if="placesWishes.length === 0">
            <span class="icon">🗺️</span>
            <p>还没有想去的地方</p>
          </div>
        </div>
      </div>

      <div class="wish-col">
        <h2 class="col-title">🎯 想做的事</h2>
        <div class="wish-list">
          <div
            v-for="wish in thingsWishes"
            :key="wish.id"
            class="wish-item"
            :class="{ completed: wish.completed }"
          >
            <div class="wish-top">
              <span class="wish-stars" v-if="wish.priority">
                <span v-for="n in wish.priority" :key="n">⭐</span>
              </span>
              <span class="wish-text">{{ wish.text }}</span>
            </div>
            <div class="wish-meta" v-if="!wish.completed">
              <span class="wish-date">添加于 {{ wish.addedDate }}</span>
            </div>
            <div class="wish-meta" v-else>
              <span class="wish-done">✅ 已完成</span>
              <span class="wish-date" v-if="wish.completedDate">
                · {{ wish.completedDate }}
              </span>
              <p class="wish-note" v-if="wish.note">{{ wish.note }}</p>
            </div>
          </div>

          <div class="empty-placeholder" v-if="thingsWishes.length === 0">
            <span class="icon">🎯</span>
            <p>还没有想做的事</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { wishes, getWishesByCategory } from '@/data/wishlist.js'

const placesWishes = computed(() => getWishesByCategory('places'))
const thingsWishes = computed(() => getWishesByCategory('things'))
</script>

<style scoped>
.wish-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: start;
}

.col-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-lg);
  font-family: var(--font-body);
}

.wish-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.wish-item {
  padding: var(--space-md) var(--space-lg);
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.wish-item.completed {
  opacity: 0.6;
}

.wish-item.completed .wish-text {
  text-decoration: line-through;
}

.wish-top {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
}

.wish-stars {
  flex-shrink: 0;
  font-size: var(--font-size-xs);
  line-height: 1.5;
}

.wish-text {
  font-size: var(--font-size-base);
  font-weight: 500;
}

.wish-meta {
  margin-top: var(--space-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.wish-done {
  color: var(--color-green);
  font-weight: 500;
}

.wish-note {
  margin-top: var(--space-xs);
  color: var(--color-text-secondary);
  font-style: italic;
}

@media (max-width: 768px) {
  .wish-columns {
    grid-template-columns: 1fr;
  }
}
</style>
