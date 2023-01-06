<template>
  <div class="team-display">
    <div class="team-display__inner">
      <TeamDisplay v-for="team in country" :key="team.id" :team="team"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TeamDisplay from "@/components/TeamDisplay.vue";
import TeamApi from "@/services/TeamApi.js";

export default {
  name: "HomeView",
  components: {
    TeamDisplay,
  },
  data(){
    return {
      country: null,
    }
  },
  created(){
    TeamApi.getTeams()
        .then(response => {
          this.country = response.data;
        })
        .catch(error => {
          console.log(error);
        })
  }

};
</script>
<style scoped>
.team-display {
  max-width:1280px; margin-left:auto; margin-right:auto;
  padding:0 20px;
}
.team-display__inner {
  --gap:30px;
  display:flex; flex-wrap:wrap; gap:var(--gap);
}
</style>
