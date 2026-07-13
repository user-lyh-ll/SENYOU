<template>
  <div class="album-detail" v-if="album">
    <button class="btn-back" @click="$router.push('/albums')">
      ← 返回相册
    </button>

    <header class="album-header">
      <h1 class="album-title">{{ album.title }}</h1>
      <p class="album-meta">
        <span class="album-date">{{ album.dateRange }}</span>
        <span class="album-count" v-if="album.photoCount > 0">
          · {{ album.photoCount }} 张照片
        </span>
      </p>
      <p class="album-desc">{{ album.description }}</p>
    </header>

    <div class="album-photos" v-if="album.photos && album.photos.length > 0">
      <div
        v-for="(photo, idx) in album.photos"
        :key="idx"
        class="photo-item"
        @click="openLightbox(idx)"
      >
        <PhotoPlaceholder height="220px" />
      </div>
    </div>

    <div class="empty-placeholder" v-else>
      <span class="icon">🖼️</span>
      <p>这个相册还没有照片<br/>把图片放入 <code>public/images/albums/{{ album.id }}/</code> 目录即可</p>
    </div>
  </div>

  <div class="empty-placeholder" v-else>
    <span class="icon">😅</span>
    <p>未找到该相册</p>
    <router-link to="/albums" class="link-back">返回相册列表</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getAlbumById } from '@/data/albums.js'
import PhotoPlaceholder from '@/components/PhotoPlaceholder.vue'

const props = defineProps({
  id: String
})

const album = computed(() => getAlbumById(props.id))

function openLightbox(idx) {
  // TODO: 实现 lightbox 查看大图功能
  console.log('Open lightbox at index:', idx)
}
</script>

<style scoped>
.album-detail {
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

.album-header {
  margin-bottom: var(--space-2xl);
  max-width: var(--max-width-content);
}

.album-title {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--space-sm);
}

.album-meta {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--space-md);
}

.album-desc {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}

.album-photos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-sm);
}

.photo-item {
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.photo-item:hover {
  transform: scale(1.02);
}

code {
  background: var(--color-bg-alt);
  padding: 1px 6px;
  border-radius: 4px;
  font-size: var(--font-size-sm);
}

.link-back {
  display: block;
  margin-top: var(--space-md);
}
</style>
