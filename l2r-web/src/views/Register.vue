<template>
  <div class="register-container" :style="loginBackground">
    <div class="resgister-box">
      <div class="register-box-header">
        <el-button type="text" class="fl" @click="goLogin">登录</el-button>
        <span class="fz18 fw colorblue">用户注册</span>
      </div>
      <div class="register-box-content">
        <el-form ref="registerForm" :model="registerInfo" label-width="0">
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="公司名称"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="register-row-between">
              <el-select
                class="register-select"
                :popper-append-to-body="false"
                popper-class="select-popper"
                filterable
                placeholder="省"
                v-model="registerInfo.provinceCode"
                @change="provinceChanged"
              >
                <el-option label="测试1" value="1"></el-option>
                <el-option label="测试2" value="2"></el-option>
              </el-select>
              <el-select
                class="register-select"
                :popper-append-to-body="false"
                popper-class="select-popper"
                filterable
                placeholder="市"
                :disabled="showCity"
                v-model="registerInfo.cityCode"
                @change="cityChanged"
              >
                <el-option
                  v-for="city in cityList"
                  :key="city.id"
                  :label="city.name"
                  :value="city.code"
                ></el-option>
              </el-select>
              <el-select
                class="register-select"
                :popper-append-to-body="false"
                popper-class="select-popper"
                filterable
                placeholder="区"
                :disabled="showArea"
                v-model="registerInfo.areaCode"
                @change="areaChanged"
              >
                <el-option
                  v-for="area in areaList"
                  :key="area.id"
                  :label="area.name"
                  :value="registerInfo.code"
                ></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="详细地址"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="联系人员"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="联系电话(号码会被作为管理员账户)"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="registerInfo.name"
              class="register-input"
              placeholder="再次输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="textarea"
              v-model="registerInfo.desc"
              class="register-input"
              placeholder="描述"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
              class="login-submit-button"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerInfo: {},
      loginBackground: {
        backgroundImage:
          "url(" + require("../assets/login-background-1.jpg") + ")",
        backgroundRepeat: "no-repeat",
      },
    };
  },
  methods: {
    goLogin() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>
<style lang="less">
.register-container {
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
.resgister-box {
  width: 800px;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  height: auto;
  border: 0.1px solid #79bbff;
}
.register-box-header {
  padding: 1rem 2rem;
  letter-spacing: 0.2rem;
}
.register-box-content {
  padding: 2rem;
}
.register-input {
  // font-size: 1.2rem;
  letter-spacing: 0.2rem;
}
.register-input /deep/ .el-input__inner {
  background: rgba(31, 30, 30, 0.1) !important;
  color: white;
  // border: 0.1px solid lightgray !important;
  // font-size: 1.2rem;
  // letter-spacing: 0.2rem;
}
.register-input /deep/ .el-textarea__inner {
  background: rgba(31, 30, 30, 0.1) !important;
  color: white;
  // border: 0.1px solid lightgray !important;
}
.register-select /deep/ .el-input__inner {
  background: rgba(31, 30, 30, 0.1) !important;
  color: white;
  // border: 0.1px solid lightgray !important;
}

.register-select /deep/ .select-popper {
  left: 0px !important;
  background: #12253e;
  border: 0.1px solid #79bbff;
}

.register-select /deep/ .el-select-dropdown__item {
  color: #efefef;
  letter-spacing: 0.2rem;
}
.register-select /deep/ .el-select-dropdown__item:hover {
  color: #409eff;
  background: #12253e;
}
.register-select /deep/ .hover {
  color: #409eff;
  background: #12253e;
}

.register-select /deep/ .selected {
  color: #409eff;
}

.register-row-between {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>