<template>
  <div class="home">
    <TeamDisplay msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import TeamDisplay from "@/components/TeamDisplay.vue";

export default {
  name: "HomeView",
  components: {
    TeamDisplay,
  },
};
</script>
