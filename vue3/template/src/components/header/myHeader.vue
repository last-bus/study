<template>
    <!-- Header -->
    <router-link key="collapse" class="sidebar-logo-link" to="/">
        <img src="@/assets/images/logo.png" class="sidebar-logo-img">
        <h1 class="sidebar-logo-title">{{ title }} </h1>
    </router-link>
    <div class="top-right">
        <span>{{ realName }}</span>
        <span class="harp-line"></span>
        <router-link to="/profile"  class="change-password"><span>修改密码</span></router-link>
        <span class="harp-line"></span>
        <span @click="logout">退出</span>
    </div>
    <!-- Header -->
</template>

<script setup>
  import {ref} from 'vue'
  import { getToken, setToken, removeToken } from "@/utils/auth";
  import router from "@/router/index";
  import API from '@/api/appApi'

  const title = ref('二维码门楼牌智慧化应用管理平台')
  const realName = ref('')
  const logout = ()=>{
    try {
      removeToken('token')
    } catch (error) {
      console.log(error)
    }
    try {
      removeToken('tokenTime')
    } catch (error) {
      console.log(error)
    }
    router.push("/login");
    
  }
  API.GetUserInfo().then(res=>{
    realName.value = res.nickName
  })

</script>

<style scoped lang="scss">
.sidebar-logo-link{
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    .sidebar-logo-img{
      width: 40px;
      height: 40px;
      margin-right: 12px;
      margin-left: 12px;
      padding: 0;
    }
    .sidebar-logo-title{
      margin: 0;
      color: #fff;
      font-weight: 600;
      font-size: 18px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    }
}
.top-right{
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 300px;
    color: #fff;
    font-size: 14px;
    margin-right: 30px;
    .change-password{
        text-decoration: none;
        color: #fff;
    }
    .harp-line{
      width: 1px;
      height: 8px;
      background-color: #fff;
    }
    span{
      cursor: pointer;
    }

}
</style>
