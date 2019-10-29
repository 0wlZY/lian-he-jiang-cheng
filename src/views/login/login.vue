<template>
  <div class="login-layout">
    <p class="login-logo">
      <img :src="logoImg" width="500" height="124" />
    </p>
    <!-- <div class="login">
      <h3>欢迎登录</h3>
      <a-form ref="loginForm" :model="user" :rules="rules">
        <FormItem prop="username">
          <a-input
            class="login-input"
            id="cao"
            size="large"
            v-model="user.username"
            placeholder="请输入用户名"
            :on-blur="saveUserName"
          >
            <span class="icon-pre" slot="prepend">
              <Icon type="person"></Icon>
            </span>
          </a-input>
        </FormItem>
        <FormItem prop="password">
          <a-input
            type="password"
            class="login-input"
            size="large"
            v-model="user.password"
            placeholder="请输入登录密码"
            @on-enter="loginMe"
          >
            <span class="icon-pre" slot="prepend">
              <Icon type="ios-locked"></Icon>
            </span>
          </a-input>
        </FormItem>
        <FormItem>
          <Button type="primary" class="login-btn" @click="loginMe">登录</Button>
        </FormItem>
      </a-form>
    </div>-->
    <div class="login-footer">
      <p class="login-foot">
        <img :src="icpImg" width="28" height="28" /> 京ICP备05007183号 ｜
        <img :src="policeImg" width="28" height="28" /> 京公网安备11011102014059
      </p>
      <p class="login-foot">
        Copyright 2007 Beijing Fangshan All Rights Reserved.
        房山区人民政府版权所有 ｜ 主办单位：房山区经信委
      </p>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/images/login/logo.png";
import icpImg from "@/assets/images/login/icp@2x.png";
import policeImg from "@/assets/images/login/police@2x.png";

export default {
  data() {
    return {
      logoImg,
      icpImg,
      policeImg
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@font-size: 15px;

.login-layout {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/login/bg_login@2x.jpg") no-repeat;
  background-size: 100% 100%;
}

.login-logo {
  text-align: center;
  padding-top: 40px;
}

.login-foot {
  text-align: center;
  color: #999999;
}

.login-foot img {
  vertical-align: middle;
}

.login-layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 140px;
}
</style>
