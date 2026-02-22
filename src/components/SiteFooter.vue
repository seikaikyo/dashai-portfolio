<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        Dash<span class="footer__accent">AI</span>
        <span class="footer__sep"></span>
        {{ year }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--sp-8) 0;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer__text {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>
