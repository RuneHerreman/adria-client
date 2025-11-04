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

</style>