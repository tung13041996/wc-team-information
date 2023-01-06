<template>
  <div class="team-display__item">
    <router-link class="team-display__item-inner d-block" :to="{name:'TeamDetail', params: {id: team.id}}">
      <div class="team-display__item-image image-cover margin-bottom-20px">
        <img :src="team.image" alt="">
      </div>
      <div class="team-display__item-info">
        <div class="team-display__item">Tên đội bóng: <strong>{{team.name}}</strong></div>
        <div class="team-display__continents">Liên đoàn bóng đá: <strong>{{team.continents}}</strong></div>
        <div class="team-display__rank">Xếp hạng FIFA: <strong>{{team.rank}}</strong></div>
        <div class="team-display__manager">Huấn luyện viên trưởng: <strong>{{team.manager}}</strong></div>
        <div class="team-display__rank">Đội trưởng: <strong>{{team.captain}}</strong></div>
        <div class="team-display__achievements">Thành tích tại WC 2022: <strong>{{team.achievements}}</strong></div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TeamDisplay",
  props:{
    team: {
      type: Object,
      required: true,
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.team-display__item-inner {
  height:100%;
  padding:15px; border:1px solid rgba(112,112,112,.2);
}
.team-display__item-image {aspect-ratio:16/10;}
.team-display__item-inner:hover {
  border-color:rgba(112,112,112,.7); box-shadow:0 0 10px 5px rgb(112 112 112 / 20%);
  transform:translateY(-5px);
}
</style>
