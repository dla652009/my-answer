<template>
  <div class="notFind">
    <!--HTML语法-->
    <h1 class="notFind-title">
      404 <span class="notFind-details">你访问的页面未找到！</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: "notFind",
  data() {
    return {
      // 变量
    };
  },
  methods: {
    //方法
  },
};
</script>

<style lang="scss" scoped>
// 样式
.notFind {
  position: relative;
  height: 100%;

  .notFind-title {
    font-size: 40px;
    color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .notFind-details {
      font-size: 30px;
      color: gray;
    }
  }
}
</style>
