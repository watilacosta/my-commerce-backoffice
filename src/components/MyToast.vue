<script setup lang="ts">
import { useToast } from "vue-toastification";

const toast = useToast();
const showWelcome = () => toast("Welcome!!!");
</script>
