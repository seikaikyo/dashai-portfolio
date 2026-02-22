<script setup lang="ts">
</script>

<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__brand">Dash<span class="hero__accent">AI</span></h1>
      <p class="hero__tagline">AI Systems Integration Specialist</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 80px 0 48px;
  text-align: center;
}

.hero__brand {
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -2px;
  line-height: 1.1;
}

.hero__accent {
  color: var(--brand);
}

.hero__tagline {
  margin-top: var(--sp-4);
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 400;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .hero {
    padding: 48px 0 32px;
  }
  .hero__brand {
    font-size: 2.5rem;
  }
  .hero__tagline {
    font-size: 1rem;
  }
}
</style>
