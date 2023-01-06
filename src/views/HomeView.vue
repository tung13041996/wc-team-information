<template>
  <div class="container">
    <div class="page-information txt_center margin-bottom-40px">
      <h1>Worldcup 2022 at Qatar</h1>
      <p>Information about all 32 countries take part in WC 2022</p>
    </div>

    <div class="team-display margin-bottom-80px">
      <div class="team-display__inner flex-grid">
        <TeamDisplay v-for="team in country" :key="team.id" :team="team"/>
      </div>
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
