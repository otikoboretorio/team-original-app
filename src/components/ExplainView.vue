<template>
  <div class="hello">{{ star }}解説</div>

  <div class="hello">{{ ans }}</div>
  <ul>
    <!-- <li>{{日本酒は、米と麹（こうじ）と水が材料となっています。}}</li> -->
    <li>{{ details }}</li>
  </ul>
  <!-- <button v-on:click="change">次へ</button> -->
</template>

<style>
.hello {
  color: red;
}
</style>

<script>
export default {
  props: ["star_num", "ans", "details"],
  computed: {
    star() {
      let stars = ""
      for (let i = 0; i < this.star_num; i++) {
        stars += "☆"
      }
      return stars
    }
  },
  created() {
    console.log(this.star)
  },
}
</script>
