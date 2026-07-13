<template>
  <div class="placeholder" :style="{ width, height }">
    <span class="placeholder-icon">&#128247;</span>
    <span class="placeholder-text" v-if="showText">暂无照片</span>
  </div>
</template>

<script setup>
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '200px' },
  showText: { type: Boolean, default: true }
})
</script>

<style scoped>
.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-alt);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-light);
  gap: var(--space-sm);
}

.placeholder-icon {
  font-size: 1.75rem;
  opacity: 0.5;
}

.placeholder-text {
  font-size: var(--font-size-xs);
  opacity: 0.6;
}
</style>
