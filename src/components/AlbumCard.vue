<template>
  <div class="album-card" @click="$router.push('/albums/' + album.id)">
    <div class="album-cover">
      <PhotoPlaceholder v-if="!album.cover" height="200px" />
      <img v-else :src="album.cover" :alt="album.title" />
      <span class="photo-count" v-if="album.photoCount > 0">
        {{ album.photoCount }} 张照片
      </span>
    </div>
    <div class="album-info">
      <h3 class="album-title">{{ album.title }}</h3>
      <span class="album-date">{{ album.dateRange }}</span>
      <p class="album-desc">{{ album.description }}</p>
    </div>
  </div>
</template>

<script setup>
import PhotoPlaceholder from './PhotoPlaceholder.vue'

defineProps({
  album: { type: Object, required: true }
})
</script>

<style scoped>
.album-card {
  background: var(--color-bg-card);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.album-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.album-cover {
  position: relative;
}

.photo-count {
  position: absolute;
  bottom: var(--space-sm);
  right: var(--space-sm);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: var(--font-size-xs);
  padding: 2px 10px;
  border-radius: 20px;
}

.album-info {
  padding: var(--space-md);
}

.album-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  margin-bottom: 4px;
}

.album-date {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.album-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-top: var(--space-sm);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
