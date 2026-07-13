<template>
  <div class="albums-page">
    <h1 class="page-title">相册</h1>
    <p class="page-subtitle">用照片定格每一个瞬间</p>

    <div class="albums-grid" v-if="albums.length > 0">
      <AlbumCard v-for="album in albums" :key="album.id" :album="album" />
    </div>

    <div class="empty-placeholder" v-else>
      <span class="icon">📷</span>
      <p>还没有相册，快去创建第一个吧</p>
    </div>
  </div>
</template>

<script setup>
import { albums } from '@/data/albums.js'
import AlbumCard from '@/components/AlbumCard.vue'
</script>

<style scoped>
.albums-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-lg);
}
</style>
