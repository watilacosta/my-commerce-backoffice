<script setup lang="ts">
import { ref } from "vue";
import api from "@/utils/api";


const email = ref("");
const password = ref("");

const payload = {
  email: email,
  password: password,
};

const formSubmit = async () => {
  try {
    await api.post("/auth/login", payload).then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
    });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <form @submit.prevent="formSubmit" class="box">
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    v-model="email"
                    type="email"
                    autocomplete="ok"
                    placeholder="example.com"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-solid fa-envelope" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    v-model="password"
                    type="password"
                    placeholder="*****"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="fa-solid fa-lock" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field mt-5">
                <button class="button is-success is-fullwidth">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
