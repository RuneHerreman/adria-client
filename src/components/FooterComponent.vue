<script setup>
import GenesisLogo from "@/assets/media/Genesis.png";
import InkeaLogo from "@/assets/media/INKEA.png";
</script>

<template>
  <footer>
    <div id="content">
      <div id="logos">
        <img :src="GenesisLogo" alt="Genesis Logo" class="logo" />
        <img :src="InkeaLogo" alt="Inkea Logo" class="logo" />
      </div>

      <div id="links">
        <h3>Links</h3>
        <a href="https://sites.google.com/student.howest.be/adria-groep1-howest-2025-2026/home">About us</a>
        <router-link to="/contact">Contact us</router-link>
      </div>

      <div id="copyright">
        <p>© 2025 INKEA. All rights reserved.</p>
        <small>
          This is a fictitious website created for the GLED Analysis and Development Project.
        </small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--quaternary-green);
  background-image: radial-gradient(rgba(0, 0, 0, 0.05) 2px, transparent 2px);
  background-size: 32px 32px;
  padding: 2rem 4rem;
  font-family: 'Inter', sans-serif;
  color: var(--dark-green);
  display: flex;
  flex-direction: column;
  align-items: center;
}

#content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
  max-width: 1100px;
}

#logos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>