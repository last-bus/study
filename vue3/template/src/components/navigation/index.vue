
<template>
  <div class="common-layout">
    <el-container style="height: 100vh">
      <el-header class="sidebar-logo">
        <my-header></my-header>
      </el-header>
      <el-container>
        <el-aside :style="isCollapse ? 'width: 64px;' : 'width: 200px;'">
          <div class="my-aside-right" @click="asideClick">
            <span class="my-aside-right-span">{{
              isCollapse ? ">>" : "<<"
            }}</span>
            <img src="@/assets/images/my-aside-right.png" alt="" />
          </div>
          <div
            class="my-aside-box"
            :style="isCollapse ? 'width: 64px;' : 'width: 200px;'"
          >
            <my-aside></my-aside>
          </div>
        </el-aside>
        <el-container>
          <el-tabs
            :model-value="tabsListValue"
            type="card"
            class="demo-tabs"
            @tab-remove="handleTabsRemove"
            @tab-change="handleChange"
            addable
            @tab-add="handleAdd"
          >
            <el-tab-pane
              v-for="(item,index) in tabsList"
              :key="index"
              :label="item.title"
              :name="item.name"

              :closable="index == 0 ? false:true"
            >
            </el-tab-pane>
          </el-tabs>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>
            <div class="foot-text">
              粤ICP备2021089240号 Copyright © 2021 佛山华资警用设备有限公司 版权所有
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import myHeader from "@/components/header/myHeader.vue";
import myAside from "@/components/header/myAside.vue";

import { ref, provide, readonly, computed } from "vue";
import { useStore } from "vuex";
import { Calendar, CloseBold } from "@element-plus/icons-vue";
import router from "@/router/index";

const store = useStore();

// 导航栏右侧按钮
const isCollapse = ref(false);

provide("isCollapse", readonly(isCollapse)); //传递给子组件

const asideClick = () => {
  isCollapse.value = !isCollapse.value;
};
// 导航栏右侧按钮

// 标签页数据

const handleChange = (tab) => { // 标签页值变化时
  // store.commit('index/tabsListValueSyn', tab)
  router.push(tab);
};

const tabsListValue = computed(()=>store.state.index.tabsListValue);
const tabsList = computed(()=>store.state.index.tabsList);

const handleTabsRemove = (targetName) => {
  if(targetName === tabsListValue.value){ //若点击的是当前的页面，则切换到前一个页面
    let indexValue = 0
    tabsList.value.forEach((element,index) => {
      if(element.name === targetName){
        indexValue = index
      }
    });
    if(indexValue)[
      store.commit('index/tabsListValueSyn', tabsList.value[indexValue-1].name)
    ]
  }
  
  store.dispatch("index/tabsListDelete", targetName)
};

const handleAdd = ()=>{
  store.dispatch("index/tabsListReset")
  store.commit('index/tabsListValueSyn', '/index')
}
// 标签页数据
</script>
<style lang="scss">
.sidebar-logo {
  background: #3f94fc;
  background-image: url("../../assets/images/top-bg.jpg");
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-container {
  .el-aside {
    background: #232f49;
    --el-aside-width: auto;
    position: relative;
    overflow: visible;
    transition-property: width;
    transition-duration: 0.4s;

    .my-aside-right {
      position: absolute;
      right: -19px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
      cursor: pointer;
      img {
        width: 19px;
      }
      .my-aside-right-span {
        color: #ffffff;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 12px;
      }
    }
    .my-aside-right:hover {
      .my-aside-right-span {
        color: #409eff;
      }
    }
    .my-aside-box {
      overflow: hidden;
      transition-property: width;
      transition-duration: 0.4s;
    }
  }
}
.el-tabs__header{
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  .el-tabs__new-tab{
    position: relative;
    display: block;
    width: 100px;
    border: 0;
    margin: 0;
    padding: 0 10px 0 20px;
    text-align: center;
    .el-icon{
      display: none;
    }
  }
  .el-tabs__new-tab::after{
    content: '全部关闭';
    white-space: nowrap;
  }
}
.el-main{
  padding: 20px !important;
  margin: 0 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, .15);

}
.el-footer{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
</style>

<style  lang="scss" scoped>
.common-layout{
  background: #f6f5f5;
}

</style>
