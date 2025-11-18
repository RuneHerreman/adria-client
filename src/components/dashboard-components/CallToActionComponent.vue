<script setup>

</script>

<template>
  <div>
    <p>Refer a friend,<br>save 15%</p>
    <img id="qr" src="../../assets/icons/qr%20bart%20de%20wever.png" alt="">
  </div>
</template>

<style scoped>
  div {
    display: flex;
    align-items: center;
    width: fit-content;
    justify-content: space-between;
    margin-right: 1.5rem;
    gap: 1.25rem;
  }

  #qr {
    width: 4rem;
    height: 4rem;
  }

  p {
    color: var(--bright-green);
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>