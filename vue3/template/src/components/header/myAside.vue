<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @select="handleSelect"
    active-text-color="#409eff"
    background-color="#232f49"
    text-color="#7f87a0"
  >
    <template v-for="(item, index) in list" :key="index">
      <el-sub-menu
        :index="item.newicon ? item.newicon : item.icon"
        v-if="item.children && item.children.length"
      >
        <template #title>
          <el-icon
            ><svg-icon :icon-class="item.newicon ? item.newicon : item.icon"
          /></el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          :index="element.newhref ? element.newhref : element.href"
          v-for="(element, target) in item.children"
          :key="target"
          >{{ element.title }}</el-menu-item
        >
      </el-sub-menu>
      <el-menu-item :index="item.newhref ? item.newhref : item.href" v-else>
        <el-icon
          ><svg-icon :icon-class="item.newicon ? item.newicon : item.icon"
        /></el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location as myLocation,
  Setting,
} from "@element-plus/icons-vue";
import API from "@/api/appApi";
import router from "@/router/index";
import { useStore } from "vuex";

const store = useStore();
const isCollapse = inject("isCollapse", true); // 接收父级数据

const handleSelect = (key, keyPath) => {
  // 路由跳转
  // router.push("/" + key);
  store.commit('index/tabsListValueSyn', "/" + key)
};
const list = ref([]);
// Home/GetLeftMenu
API.GetLeftMenu().then((res) => {
  list.value = res;
});

// activeIndex
const activeIndex = computed(()=>store.state.index.activeIndex);

</script>
<style lang="scss">
.el-menu--vertical .el-menu--popup {
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
}
</style>
<style scoped lang="scss">
.my-aside {
  color: rgb(127, 135, 160);
}
.el-menu-vertical-demo {
  border: 0 !important;
}

.el-sub-menu {
  background: #232f49;
  .el-menu {
    li {
      background: #232f49;
    }
    i {
      color: #7f87a0;
    }
  }
}
.el-menu--vertical {
  .el-menu {
    li {
      background: #232f49;
      color: #7f87a0;
      span {
        color: #7f87a0;
      }
    }
    li:hover {
      background: #001528 !important;
    }
    i {
      color: #7f87a0;
    }
  }
}

::v-deep .el-sub-menu__icon-arrow {
  color: #7f87a0;
}
::v-deep .el-menu-item:hover {
  background: #001528 !important;
}
::v-deep .el-sub-menu__title:hover {
  background-color: #001528 !important;
}
</style>
