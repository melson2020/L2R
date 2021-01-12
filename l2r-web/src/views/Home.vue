<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>
      <el-button type="primary" @click="Sayhello"
        >Say Hello To Java Sever</el-button
      >
    </div>
    <span>{{ helloResponse }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      helloResponse: ""
    };
  },
  methods: {
    ...mapActions({
      SayHelloToServer: "SayHelloToServer"
    }),

    Sayhello() {
      this.helloResponse='';
      this.SayHelloToServer()
        .then(res => {
          this.helloResponse = res;
        })
        .catch(err => {
          this.$message.error(err.message);
        });
    }
  }
};
</script>
