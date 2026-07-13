<template>
  <div class="about-page">
    <h1 class="page-title">关于我们</h1>

    <!-- Hero photo -->
    <div class="about-hero">
      <PhotoPlaceholder height="400px" />
      <p class="hero-hint">【提示：放一张你们的合照在这里】</p>
    </div>

    <div class="about-content container-narrow">
      <!-- Names -->
      <div class="about-names">
        <div class="name-block">
          <span class="name-label">他</span>
          <h2 class="name">梁宇晗</h2>
          <p class="name-desc">【提示：填写对他的简介/描述】</p>
        </div>
        <div class="name-divider">
          <span class="divider-icon">&#10084;</span>
        </div>
        <div class="name-block">
          <span class="name-label">她</span>
          <h2 class="name">李淋</h2>
          <p class="name-desc">【提示：填写对她的简介/描述】</p>
        </div>
      </div>

      <!-- Our story -->
      <section class="about-section">
        <h2 class="section-title">我们的故事</h2>
        <div class="story-content">
          <p>【提示：在这里写下你们从相识到在一起的故事……】</p>
          <p>可以写好几段，描述你们是如何相遇的，谁先喜欢上谁的，在一起那天的情景……</p>
        </div>
      </section>

      <!-- Preferences -->
      <section class="about-section">
        <h2 class="section-title">喜好清单</h2>
        <div class="pref-grid">
          <div class="pref-col">
            <h3 class="pref-name">宇晗</h3>
            <div class="pref-item">
              <span class="pref-label">喜欢的食物</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的颜色</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的音乐</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的电影</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
          </div>
          <div class="pref-col">
            <h3 class="pref-name">淋淋</h3>
            <div class="pref-item">
              <span class="pref-label">喜欢的食物</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的颜色</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的音乐</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
            <div class="pref-item">
              <span class="pref-label">喜欢的电影</span>
              <span class="pref-value">【提示：填写】</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Song -->
      <section class="about-section">
        <h2 class="section-title">我们的歌</h2>
        <p class="song-placeholder">【提示：填写对你们有特殊意义的一首歌】</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import PhotoPlaceholder from '@/components/PhotoPlaceholder.vue'
</script>

<style scoped>
.about-hero {
  margin-bottom: var(--space-2xl);
}

.hero-hint {
  text-align: center;
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  margin-top: var(--space-sm);
}

.about-content {
  padding-bottom: var(--space-2xl);
}

.about-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2xl);
  margin-bottom: var(--space-3xl);
  text-align: center;
}

.name-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.name {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin: var(--space-sm) 0;
}

.name-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.name-divider {
  font-size: 1.5rem;
  color: var(--color-accent);
}

.about-section {
  margin-bottom: var(--space-2xl);
}

.story-content {
  font-size: var(--font-size-base);
  line-height: 2;
  color: var(--color-text-secondary);
}

.pref-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.pref-name {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--space-md);
  color: var(--color-accent);
}

.pref-item {
  display: flex;
  justify-content: space-between;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
}

.pref-label {
  color: var(--color-text-secondary);
}

.pref-value {
  color: var(--color-text);
  font-weight: 500;
}

.song-placeholder {
  font-size: var(--font-size-base);
  color: var(--color-text-light);
  font-style: italic;
}

@media (max-width: 480px) {
  .about-names {
    flex-direction: column;
    gap: var(--space-lg);
  }

  .pref-grid {
    grid-template-columns: 1fr;
  }
}
</style>
