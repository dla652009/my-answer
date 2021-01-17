<template>
  <div class="form">
    <el-form ref="form" :model="formData" :rules="rules" label-width="93px">
      <el-form-item label="账号：" prop="userName">
        <el-input v-model="formData.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passWord">
        <el-input v-model="formData.passWord"></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码："
        prop="passWord2"
        v-if="formType === 'resiter'"
      >
        <el-input v-model="formData.passWord2"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formType: {
      // 表单类型
      type: String,
      default: "",
    },
  },
  created() {
    // 页面创建前做的事情
    console.log(this.formType, 22222);
  },
  mounted() {
    // dom元素渲染完之后做的事情
  },
  data() {
    const valiPassWord2 = (rule, value, callback) => {
      if (!value) {
        callback(new Error("二次输入密码不能为空"));
      } else if (this.formData.passWord !== value) {
        callback(new Error("两次输入密码不同"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        // 表单的数据
        userName: "",
        passWord: "",
        passWord2: "",
      },
      rules: {
        userName: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码不能小于6位", trigger: "blur" },
        ],
        passWord2: [
          { required: true, validator: valiPassWord2, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 验证通过
          this.$router.push({
            path: "/home",
            query: { userName: this.formData.userName },
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  .el-form-item {
    margin-bottom: 20px;
    /deep/ .el-form-item__label {
      text-align: left;
    }
    /deep/ .el-form-item__content {
      width: 230px;
      .el-input {
        .el-input__inner {
          padding-left: 2px !important;
        }
      }
    }
  }
}
</style>
