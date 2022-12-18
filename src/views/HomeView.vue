<template>
  <button @click="startQuiz">
    クイズスタート！
  </button>
</template>
<script>
export default {
  methods: {
    startQuiz() {
      this.$router.push({ name: "quiz" })
    }
  },
}
</script>