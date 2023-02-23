<script setup lang="ts">
import { ref } from "vue";
import axios from "@/utils/axios";
import { useAuthStore } from "@/stores/auth";
import router from "@/router";
import { useToast } from "vue-toastification";

const authStore = useAuthStore();
const email = ref("");
const password = ref("");
const toast = useToast();

interface LoginPayload {
  email: string;
  password: string;
}

const handleForm = async () => {
  const payload: LoginPayload = {
    email: email.value,
    password: password.value,
  };

  await login(payload);
};

const setSessionItems = (token: string, authenticated: string) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("authenticated", authenticated);
};

const updateAuthStore = (token: string) => {
  authStore.setAuthToken(token);
  authStore.authenticate();
};

const login = async (payload: LoginPayload) => {
  await axios
    .post("/auth/login", payload)
    .then((response) => {
      const token = response.data.token;

      if (token) {
        updateAuthStore(token);
        router.push("/");
        toast.success("Bem Vindo!");
      } else {
        toast.warning("Suas credenciais parecem incorretas!");
      }
    })
    .catch((error) => {
      toast.error(`${error.response.satus} - ${error.response.data.error}`);
    });
};
</script>

<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-4-widescreen">
            <form @submit.prevent="handleForm" class="box">
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="example.com"
                    class="input"
                    autocomplete="on"
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
