<script setup lang="ts">
import router from "@/router";
import { onMounted, ref } from "vue";
import axios from "@/utils/axios";
import PageTitle from "@/components/PageTitle.vue";
import { User } from "@/models/User";

const { id } = router.currentRoute.value.params;
let user = ref<User>();

onMounted(async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: `/admin/user/${id}`,
      headers: { Authorization: sessionStorage.getItem("token") },
    });

    user.value = data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <PageTitle title="User Details" />
  <section class="panel is-primary">
    <p class="panel-heading mt-3">{{ user }}</p>
  </section>
</template>
