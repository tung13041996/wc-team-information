<template>
  <div class="team-detail" v-if="team">
    <div class="team-detail__name">
      <h1>{{team.name}}</h1>
    </div>
    <div class="team-detail__image">
      <img :src="team.image" alt="">
    </div>
    <div>
      <div class="team-detail__info">
        {{team.description}}
      </div>
    </div>

    <router-link to="/">Back to Home</router-link>
    <TeamRelated :numberItem = 2 :idCurrent = "team.id" />
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
.team-detail__image img {width:100%; height:100%; object-fit:cover; object-position:center;}
</style>