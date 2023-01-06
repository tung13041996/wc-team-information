<template>
  <div class="team-related">
    <div class="team-related__title margin-bottom-40px txt_center">
      <h2>Các đội bóng khác</h2>
    </div>
    <div class="team-related__grid flex-grid jc-center margin-bottom-80px">
      <TeamDisplay v-for="team in teams" :key="team.id" :team="team"/>
    </div>
  </div>
</template>

<script>
import TeamDisplay from "@/components/TeamDisplay.vue";
import TeamApi from "@/services/TeamApi.js";

export default {
  name: "TeamRelated",
  components: {TeamDisplay},
  props: {
    numberItem: {
      type: Number,
      required: true,
    },
    idCurrent: {
      type: String,
      required: true,
    }
  },
  data(){
    return {
      teams: null
    }
  },
  created(){
    TeamApi.getTeams()
        .then(response => {
          let array = response.data;

          for(let i = 0; i < array.length; i++){
            if(array[i].id === this.idCurrent){
              array.splice(i, 1);
              break;
            }
          }

          if(array.length > this.numberItem){
            const shuffledArray = [...array].sort(() => 0.5 - Math.random());
            this.teams = shuffledArray.slice(0, this.numberItem);
          } else {
            this.teams = array;
          }

        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>