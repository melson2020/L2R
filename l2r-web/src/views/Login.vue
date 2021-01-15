<template>
  <div class="login-container" :style="loginBackground">
    <el-col :span="14"
      ><div><span class="fz20 colorF">L2R</span></div></el-col
    >
    <el-col :span="10"
      ><div class="login-box-card">
        <div class="login-box-card-header">
          <span class="fz20 color9">用户登录</span>
        </div>
        <div class="login-box-card-content">
          <el-form label-position="right" label-width="0" :model="loginUser">
            <el-form-item>
              <el-input
                class="login-input"
                v-model="loginUser.name"
                 prefix-icon="el-icon-user"
                size="large"
                placeholder="用 户 名"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                class="login-input"
                v-model="loginUser.region"
                 prefix-icon="el-icon-lock"
                size="large"
                placeholder="密 码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="login-submit-button"
                type="primary"
                @click="onSubmit"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <el-button type="text" @click="goRegister">无账户? 注册</el-button>
        </div>
      </div></el-col
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginUser: {},
      loginBackground: {
        backgroundImage:
          "url(" + require("../assets/login-background-1.jpg") + ")",
        backgroundRepeat: "no-repeat",
      },
    };
  },
  methods:{
      goRegister(){
          this.$router.push({path:'/register'})
      }
  }
};
</script>
<style>
.login-container {
  min-height: 100vh;
  min-width: 100vw;
  height: auto;
  width: auto;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 100% 100%;
}
.login-box-card {
  max-width: 30rem;
  width: auto;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: auto;
  border: 0.1px solid #79bbff;
}
.login-box-card-header {
  padding: 1rem;
  letter-spacing: 0.5rem;
}
.login-box-card-content {
  padding: 3rem;
}
.login-submit-button {
  font-size: 1.3rem;
  width: 100%;
  letter-spacing: 0.5rem;
}
.login-input {
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.login-input /deep/ .el-input__inner {
  background: rgba(31, 30, 30, 0.1) !important;
  color: white;
  border: 0.1px solid lightgray !important;
}
</style>