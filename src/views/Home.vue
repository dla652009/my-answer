<template>
  <div>
    欢迎您，尊敬的{{ $route.query.userName }}

    <el-button @click="goBack">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query.userName);
  },
  methods: {
    goBack() {
      //返回
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
