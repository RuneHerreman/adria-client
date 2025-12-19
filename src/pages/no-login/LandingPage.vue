<>
<script setup>
  import BrightGreenButtonComponent from "@/components/buttons/BrightGreenButtonComponent.vue";
  import {onMounted, onUnmounted, ref} from "vue";


  const lineChartRef = ref(null);
  const pieChartRef = ref(null);
  let lineChartInstance = null;
  let pieChartInstance = null;

  onMounted(() => {
    loadLineChart();
    loadPieChart();
  });

  function loadPieChart() {
    const ctx = pieChartRef.value?.getContext('2d');
    if (ctx) {
      pieChartInstance?.destroy();
      pieChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Basic', 'Standard', 'Premium', 'Ultra'],
          datasets: [{
            data: [20, 40, 30, 10],
            backgroundColor: [
              'rgba(0,128,66, 0.4)',
              'rgba(0,128,66,0.8)',
              'rgba(0,128,66,.6)',
              'rgba(0,128,66,0.2)',
            ]
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.parsed / total) * 100).toFixed(1);
                  return `${context.label}: ${percentage}%`;
                }
              }
              },
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Subscriber Distribution',
              font: {
                size: 18,
                weight: 'bold'
              },
              color: '#333',
              padding: {
                top: 10,
                bottom: 20
              }
            }
          }
        }
      });
    }
  }

  function loadLineChart() {
    const ctx = lineChartRef.value?.getContext('2d');
    if (ctx) {
      lineChartInstance?.destroy();
      lineChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2084', '2085', '2086', '2087', '2088'],
          datasets: [{
            label: 'Users Growth',
            data: [2326, 12446, 66588, 356261, 1906086],
            borderColor: 'rgba(0,128,66,0.9)',
            backgroundColor: 'rgba(0,128,66,0.2)',
            tension: 0.4,
            fill: true,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Users Growth Over Time',
              font: {
                size: 18,
                weight: 'bold'
              },
              color: '#333',
              padding: {
                top: 10,
                bottom: 20
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function(value) {
                  return value.toLocaleString();
                }
              }
            },
            x: {
              title: {
                display: true,
                text: 'Year'
              }
            }
          }
        }
      });
    }
  }

  onUnmounted(() => {
    if (lineChartInstance) lineChartInstance.destroy();
    if (pieChartInstance) pieChartInstance.destroy();
  });
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
          <canvas ref="lineChartRef"></canvas>
        </div>
        <div class="container">
          <canvas ref="pieChartRef"></canvas>
        </div>
      </div>
    </section>
  </main>

</template>

<style scoped>
  h1, p {
    text-transform: uppercase;
  }

  h1 {
    color: var(--off-white);

    font-size: 4.35rem;
    line-height: 3.5rem;
  }

  h1::before {
    border-bottom: none;
  }

  h2 {
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 20rem);
    justify-content: center;
    gap: 2rem;
  }

  .container {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
  }

</style>