<template>
  <div class="login">
    <h1 class="login-title">超越答题系统</h1>
    <div class="login-main">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <template v-for="item in tabsModel">
          <el-tab-pane :label="item.label" :name="item.name" :key="item.id">
            <form-main :formType="item.name" ref="formMain"></form-main>
          </el-tab-pane>
        </template>
      </el-tabs>
      <el-button
        class="login-btn"
        :style="{ top: activeName === 'login' ? '60px' : '30px' }"
        @click="submit()"
        >{{ activeName === "login" ? "登录" : "注册" }}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      activeName: "login",
      tabsModel: [
        { label: "登录", name: "login" },
        { label: "注册", name: "resiter" },
      ],
    };
  },
  methods: {
    handleClick() {},
    submit() {
      const val = this.activeName === "login" ? 0 : 1;
      this.$refs.formMain[val].submitForm();
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("~@/assets/images/loginBg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  .login-title {
    position: relative;
    top: 80px;
    font-family: "楷体";
    font-weight: 600;
    color: #fef0f0;
    font-size: 36px;
    text-align: center;
    margin: 0 auto;
  }
  .login-main {
    width: 350px;
    height: 450px;
    padding: 14px;
    background-color: rgba(254, 240, 240, 0.6);
    position: absolute;
    top: 50%;
    border: 1px solid #fccaca;
    border-radius: 6px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .login-btn {
    width: 100%;
    position: relative;
  }
}
</style>
