<template>
  <div class="menu">
      <router-link to="/barChart">BarChart</router-link>|
      <router-link to="/lineChart">LineChart</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
    color: gray;
    background-color: greenyellow;
}
.menu .router-link-exact-active {
  color:black;
}
.menu a{
  color:gray;
}

</style>