<script setup>
import GenesisLogo from "@/assets/media/genesis.png";
import InkeaLogo from "@/assets/media/INKEA.png";
</script>

<template>
  <footer>
    <section id="content">
      <div class="footer-top">
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
    </section>

    <section id="copyright">
      <p>© 2025 INKEA. All rights reserved.</p>
      <small>
        This is a fictitious website created for the OLOD Analysis and
        Development Project.
      </small>
    </section>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--quaternary-green);

  background-image:
      radial-gradient(rgba(0, 0, 0, 0.04) 22%, transparent 23%),
      radial-gradient(rgba(0, 0, 0, 0.04) 22%, transparent 23%);
  background-position: center center;
  background-size: 2rem 2rem;

  font-family: "Inter", sans-serif;
  color: var(--dark-green);
  padding: 3rem 5rem 1rem 5rem;
  height: 10rem;
}

#content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-top {
  display: flex;
  align-items: flex-start;
  gap: 5rem;
}

#logos {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.logo {
  height: 2.75rem;
  width: auto;
}

#links {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

#links h3 {
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 0.3rem;
}

#links a,
#links router-link {
  color: var(--dark-green);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.1s ease-in-out;
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
