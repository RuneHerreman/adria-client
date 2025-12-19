<script setup>

import {ref} from "vue";

const sent = ref(false);

function showAlert(event) {
  event.preventDefault();

  const form = event.target;
  form.querySelectorAll('input, textarea').forEach(input => {
    input.value = '';
  });

  sent.value = true;

  setTimeout(() => {
    sent.value = false;
  }, 2000);
}
</script>

<template>
  <main>
    <h1>Contact Us</h1>
    <form @submit="showAlert">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Submit</button>
    <p v-if="sent" class="info-alert">Message sent successfully.</p>
    </form>
  </main>
</template>

<style scoped>
  main h1 {
    margin-bottom: 2rem;
  }

  form {
    width: 50%;
    display: grid;
  }

  form label {
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  form textarea {
    height: 10rem;
  }

  form input {
    width: 20rem
  }

  form input,
  form textarea {
    font-family: "Inter", Arial, Helvetica, sans-serif;
    border-radius: 0.5rem;
    border: 0.1rem solid #D0D0D0;
    padding: 0.4rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    transition: 0.1s ease-in-out;
  }

  form input:focus,
  form textarea:focus {
    outline: none;
    border-color: var(--tertiary-green);
    box-shadow: 0 0 0.1rem hsl(0, 0%, 90%);
  }

  button {
    grid-column: 1 /-1;
    background-color: var(--bright-green);
    font-family: "Inter", Arial, Helvetica, sans-serif;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    transition: 0.1s ease-in-out;
  }

  button:hover {
    box-shadow: 0 0 0.3rem  hsla(0, 0%, 0%, 0.1);
  }


</style>