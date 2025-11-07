<script setup>

</script>

<template>
  <div class="fallback">
    <svg class="loading-animation" width="60" height="60" viewBox="0 0 60 60">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#76D926" />
          <stop offset="100%" stop-color="#2199DE" />
        </linearGradient>
      </defs>
      <path
          d="
              M55.00 30.00
              Q48.79 36.84, 49.15 46.07
              Q40.00 47.32, 34.34 54.62
              Q26.53 49.70, 17.50 51.65
              Q14.68 42.86, 6.51 38.55
              Q10.00 30.00, 6.51 21.45
              Q14.68 17.14, 17.50 8.35
              Q26.53 10.30, 34.34 5.38
              Q40.00 12.68, 49.15 13.93
              Q48.79 23.16, 55.00 30.00
              Z
              "
          fill="url(#grad1)"
      />
    </svg>

    <p>Loading <slot name="loading"></slot></p>
  </div>

</template>

<style scoped>
.loading-animation {
  width: 5rem;
  height: 5rem;
  clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);
  animation: borderRadiusAnimation 2.5s infinite;
}

@keyframes borderRadiusAnimation {
  0%   { transform: rotate(0deg); }
  14%  { transform: rotate(0deg); }
  20%  { transform: rotate(60deg); }
  34%  { transform: rotate(60deg); }
  40%  { transform: rotate(120deg); }
  54%  { transform: rotate(120deg); }
  60%  { transform: rotate(180deg); }
  74%  { transform: rotate(180deg); }
  80%  { transform: rotate(240deg); }
  94%  { transform: rotate(240deg); }
  100% { transform: rotate(360deg); }
}

.fallback {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  white-space: nowrap;
  margin: 7.5rem auto;
}

.fallback p {
  width: fit-content;
}
</style>