<template>
  <div class="container">
    <div class="team-detail" v-if="team">
      <div class="button-back margin-bottom-80px txt_center">
        <router-link class="btn_back" to="/">Back to Home</router-link>
      </div>
      <div class="team-detail__name txt_center margin-bottom-20px">
        <h1>{{team.name}}</h1>
      </div>
      <div class="team-detail__image margin-bottom-40px image-cover">
        <img :src="team.image" alt="">
      </div>
      <div class="team-detail__info margin-bottom-80px">
        {{team.description}}
      </div>

      <TeamRelated :numberItem = 3 :idCurrent = "team.id" />
    </div>
  </div>
</template>
<script>
import TeamApi from "@/services/TeamApi.js";
import TeamRelated from "@/components/TeamRelated.vue";
export default {
  props: ['id'],
  components: {
    TeamRelated
  },
  data(){
    return {
      team: null
    }
  },
  created(){
    TeamApi.getTeams(this.id)
        .then(response => {
          this.team = response.data;
        })
        .catch(error => {
          console.log(error);
        })
  }
}
</script>

<style scoped>
.team-detail__image {aspect-ratio:16/9;}
</style>