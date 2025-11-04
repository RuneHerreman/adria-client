<script setup>
import GenesisLogo from "@/assets/media/Genesis.png";
import InkeaLogo from "@/assets/media/INKEA.png";
</script>

<template>
  <footer>
    <div id="content">
      <div class="footer-left">
        <div id="logos">
          <img :src="GenesisLogo" alt="Genesis Logo" class="logo" />
          <img :src="InkeaLogo" alt="INKEA Logo" class="logo" />
        </div>

        <div id="links">
          <h3>Links</h3>
          <a
              href="https://sites.google.com/student.howest.be/adria-groep1-howest-2025-2026/home"
          >About us</a
          >
          <router-link to="/contact">Contact us</router-link>
        </div>
      </div>
    </div>

    <div id="copyright">
      <p>© 2025 INKEA. All rights reserved.</p>
      <small>
        This is a fictitious website created for the OLOD Analysis and
        Development Project.
      </small>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--quaternary-green);

  background-image:
      radial-gradient(rgba(0, 0, 0, 0.04) 22%, transparent 23%),
      radial-gradient(rgba(0, 0, 0, 0.04) 22%, transparent 23%);
  background-position: center;
  background-size: 2.4rem 2rem;

  font-family: "Inter", sans-serif;
  color: var(--dark-green);
  padding: 1.5rem 5rem;
  height: 10rem;
}

#content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-left {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

#logos {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.logo {
  height: 2.1875rem;
  width: auto;
}

#links {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

#links h3 {
  font-weight: 700;
  margin-bottom: 0.3rem;
}

#links a,
#links router-link {
  color: var(--dark-green);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

#links a:hover,
#links router-link:hover {
  color: var(--primary-green);
}

#copyright {
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.8;
  line-height: 1.4;
  margin-top: 1rem;
}
</style>
