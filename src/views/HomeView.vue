<template>
  <header class="header"></header>
  <h1>お酒クイズ</h1>
  <button class="start" @click="startQuiz">クイズスタート！</button>
  <!--<footer>aiueo</footer> -->
</template>

<style>
.header {
  background-image: url(~@/assets/img/question.png);
  height: 15rem;
}
.start {
  color: #333;
  font-weight: bold;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 300px;
  font-size: 30px;
}
button {
  color: #333;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 5px 5px 0 rgb(0 0 0 / 11%);
  transition: box-shadow 0.25s;
  cursor: pointer;
}
button:hover {
  box-shadow: 0 0 0 #bbb;
  /*color: rgb(46, 15, 224); */
}
/*footer {
  background-color: #fff;
  margin-top: 200px;
}
*/
</style>

<script>
export default {
  methods: {
    startQuiz() {
      this.$router.push({ name: "quiz" });
    },
  },
};
</script>
