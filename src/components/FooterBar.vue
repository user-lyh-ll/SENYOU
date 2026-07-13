<template>
  <footer class="footer">
    <div class="footer-inner">
      <p class="footer-text">
        Made with <span class="footer-heart">&#10084;</span> by Yuhao
      </p>
      <p class="footer-meta">
        记录我们的故事
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--color-border);
  padding: var(--space-xl) var(--space-lg);
  margin-top: var(--space-2xl);
}

.footer-inner {
  max-width: var(--max-width-page);
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-xs);
}

.footer-heart {
  color: var(--color-accent);
}

.footer-meta {
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
}
</style>
