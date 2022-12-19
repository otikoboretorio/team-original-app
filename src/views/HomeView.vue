<template>
  <button class="start" @click="startQuiz">クイズスタート！</button>
</template>

<style>
.start {
  color: black;
  font-weight: bold;
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 300px;
  font-size: 30px;
}
button {
  color: black;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0 4px 0 0 rgb(0 0 0 / 11%);
}
button:hover {
  color: rgb(46, 15, 224);
}
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
