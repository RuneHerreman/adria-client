<script setup lang="ts">

import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
</script>

<template>
    <main class="landing-page">
      <section id="hero">
        <p>Don't miss out!</p>
        <h1>Become smarter, <br> now</h1>
        <p>Join our network of over 200,000 users</p>
        <BrightGreenButtonComponent route="/subscription">Start learning today</BrightGreenButtonComponent>
      </section>



      <section id="statistics">
        <h2>Statistics</h2>
        <div class="chart-section">
          <div class="container">
            <canvas id="line-chart"></canvas>
          </div>
          <div class="container">
            <canvas id="pie-chart"></canvas>
          </div>
        </div>
      </section>
    </main>

</template>

<style scoped>
  h1, p {
    text-transform: uppercase;
  }

  h1{
    color: var(--off-white);
    font-size: 4.35rem;
    line-height: 3.5rem;
  }

  h1::before {
    border-bottom: none;
  }

  h2{
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  main {
    margin-bottom: 3rem;
  }

  #statistics {
    margin-top: 7rem;
  }

  #hero {
    height: 45vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.1rem;
  }

  #hero p {
    color: var(--quaternary-green);
  }

  #hero p:first-of-type {
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  #hero p:last-of-type {
    text-transform: none;
    font-size: 0.9rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  .chart-section {
    display: grid;
    grid-template-columns: repeat(2, 40rem);
    grid-template-rows: repeat(1, 30rem);
    justify-content: center;
    gap: 2rem;
  }

  .container{
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
  }

</style>