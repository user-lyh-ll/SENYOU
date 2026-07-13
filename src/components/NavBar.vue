<template>
  <header class="navbar">
    <div class="navbar-inner">
      <router-link to="/" class="navbar-brand">
        <span class="brand-heart">&#10084;</span>
        <span class="brand-text">宇晗 &amp; 淋</span>
      </router-link>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="切换菜单">
        <span class="hamburger" :class="{ open: menuOpen }">
          <span></span><span></span><span></span>
        </span>
      </button>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="menuOpen = false">首页</router-link>
        <router-link to="/timeline" @click="menuOpen = false">时间轴</router-link>
        <router-link to="/albums" @click="menuOpen = false">相册</router-link>
        <router-link to="/anniversaries" @click="menuOpen = false">纪念日</router-link>
        <router-link to="/letters" @click="menuOpen = false">情书</router-link>
        <router-link to="/wishlist" @click="menuOpen = false">心愿单</router-link>
        <router-link to="/about" @click="menuOpen = false">关于我们</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(249, 245, 240, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.navbar-inner {
  max-width: var(--max-width-page);
  margin: 0 auto;
  padding: 0 var(--space-lg);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  text-decoration: none;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: var(--font-size-lg);
  font-weight: 600;
}

.brand-heart {
  color: var(--color-accent);
  font-size: var(--font-size-xl);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.nav-links a {
  padding: var(--space-sm) var(--space-md);
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--color-accent);
  background: var(--color-overlay);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-sm);
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 22px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger.open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--color-bg);
    flex-direction: column;
    padding: var(--space-md);
    gap: 0;
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-110%);
    opacity: 0;
    transition: all var(--transition-base);
    pointer-events: none;
  }

  .nav-links.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav-links a {
    width: 100%;
    padding: var(--space-md);
    border-radius: 0;
    border-bottom: 1px solid var(--color-border);
  }
  .nav-links a:last-child {
    border-bottom: none;
  }
}
</style>
