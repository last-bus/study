<template>
  <div class="profile">
    <div class="title">修改密码</div>
    <el-form
      :model="form"
      status-icon
      :rules="rules"
      ref="rulePasswordForm"
      label-width="100px"
      class="demo-ruleForm"
      label-position="left"
      size="large"
    >
      <el-form-item label="旧密码" prop="oldPwd">
        <el-input
          type="password"
          v-model="form.oldPwd"
          autocomplete="off"
          placeholder="输入旧密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newPwd">
        <el-input
          type="password"
          v-model="form.newPwd"
          autocomplete="off"
          placeholder="输入新密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认新密码" prop="confirmPwd">
        <el-input
          type="password"
          v-model="form.confirmPwd"
          placeholder="确认新密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="btn-box">
        <el-button type="primary" class="mt10" @click="submitForm()"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>


<script setup>
import { ref } from "vue";
import md5 from "js-md5";
import API from "@/api/appApi";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { encode, decode } from "js-base64";
import router from "@/router/index";
import { date } from "@/utils/index";
import { ElMessage } from "element-plus";

const activeName = ref("first");
const form = ref({
  oldPwd: "",
  newPwd: "",
  confirmPwd: "",
});

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入旧密码"));
  } else {
    callback();
  }
};
const validatePass2 = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入新密码"));
  } else {
    if (form.value.confirmPwd !== "") {
      //   this.$refs.form.validateField('confirmPwd')
    }
    callback();
  }
};
const confirmPwd = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("确认新密码"));
  } else if (value !== form.value.newPwd) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};
const rules = ref({
  oldPwd: [{ required: true, validator: validatePass, trigger: "blur" }],
  newPwd: [{ required: true, validator: validatePass2, trigger: "blur" }],
  confirmPwd: [{ required: true, validator: confirmPwd, trigger: "blur" }],
});
const rulePasswordForm = ref(null); //表单ref

const submitForm = () => {
  rulePasswordForm.value.validate((valid, fields) => {
    if (valid) {
      let data = {
        oldPwd: md5(form.value.oldPwd),
        newPwd: md5(form.value.newPwd),
        confirmPwd: md5(form.value.confirmPwd),
      };
      API.ModifyPassword(data).then((res) => {
        try {
          removeToken("token");
        } catch (error) {
          console.log(error);
        }
        try {
          removeToken("tokenTime");
        } catch (error) {
          console.log(error);
        }
        ElMessage({
          showClose: true,
          message: "密码修改成功，请重新登录",
          type: "success",
        });
        router.push("/login");
      });
    } else {
      console.log("失败");
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.profile {
  padding: 0 40px;
  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }
  .btn-box {
    ::v-deep .el-form-item__content {
      justify-content: center;
      margin: 20px 0 0 0 !important;
      button {
        padding: 20px 40px;
        font-size: 16px;
      }
    }
  }
}
</style>