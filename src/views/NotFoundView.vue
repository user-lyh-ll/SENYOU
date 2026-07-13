<template>
  <div class="not-found">
    <div class="nf-content">
      <span class="nf-icon">🔍</span>
      <h1 class="nf-title">页面未找到</h1>
      <p class="nf-desc">你访问的页面不存在，可能已经被移除了。</p>
      <router-link to="/" class="nf-link">返回首页</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.nf-content {
  text-align: center;
}

.nf-icon {
  font-size: 4rem;
  display: block;
  margin-bottom: var(--space-lg);
}

.nf-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--space-md);
}

.nf-desc {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-xl);
}

.nf-link {
  display: inline-block;
  padding: var(--space-sm) var(--space-xl);
  background: var(--color-accent);
  color: #fff;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: background var(--transition-fast);
}

.nf-link:hover {
  background: var(--color-accent-dark);
  color: #fff;
}
</style>
