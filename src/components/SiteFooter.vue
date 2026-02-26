<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <p class="footer__text">
          Dash<span class="footer__accent">AI</span>
          <span class="footer__sep"></span>
          {{ year }}
        </p>
        <div class="footer__links">
          <a href="https://github.com/seikaikyo" target="_blank" rel="noopener" aria-label="GitHub">
            <i class="pi pi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/seikaikyo/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <i class="pi pi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--sp-8) 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer__content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--sp-6);
}

.footer__text {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

.footer__accent {
  color: var(--brand);
  font-weight: 600;
}

.footer__sep {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--text-muted);
}

.footer__links {
  display: flex;
  gap: var(--sp-4);
}

.footer__links a {
  color: var(--text-muted);
  font-size: 1.25rem;
  transition: color var(--transition);
}

.footer__links a:hover {
  color: var(--brand);
}
</style>
