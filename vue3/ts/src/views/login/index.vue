<template>
	<div class="login-container">
		<el-form
			ref="refLoginForm"
			:model="loginForm"
			:rules="loginRules"
			class="login-form"
			auto-complete="on"
			label-position="left"
		>
			<div class="title-container">
				<img src="@/assets/images/logo.png" class="logo-img" />
				<h3 class="title">智慧终端运行维护管理平台</h3>
			</div>
			<div class="login-box">
				<div>
					<h3 class="title">登录</h3>
				</div>
				<el-form-item prop="username">
					<el-input v-model="loginForm.username" placeholder="请输入账号">
						<template #prefix>
							<svg-icon icon-class="user" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						v-model="loginForm.password"
						type="password"
						placeholder="请输入密码"
						@keyup.enter="handleLogin()"
					>
						<template #prefix>
							<svg-icon icon-class="password" />
						</template>
					</el-input>
				</el-form-item>
				<el-checkbox
					v-model="remember"
					label="记住密码"
					class="mt10"
					name="type"
				/>
				<el-button
					:loading="loading"
					type="primary"
					class="login-btn mt10"
					@click.prevent="handleLogin()"
					>登录
				</el-button>
			</div>
		</el-form>
		<div class="state-box">
			粤ICP备2021089240号 Copyright © 2021 佛山华资警用设备有限公司 版权所有
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import md5 from "js-md5";
	import API from "@/api/appApi";
	import { getToken, setToken, removeToken } from "@/utils/auth";
	import { encode, decode } from "js-base64";
	import router from "@/router/index";
	import { date } from "@/utils/index";
	import type { FormInstance, FormRules } from "element-plus";

	const loginForm = ref({
		username: ref(""),
		password: "",
	});
	if (getToken("username") && getToken("password")) {
		//判断是否存储过账户密码
		try {
			loginForm.value.username = decode(getToken("username") as string);
			loginForm.value.password = decode(getToken("password") as string);
		} catch (error) {
			loginForm.value.username = "";
			loginForm.value.password = "";
		}
	}
	console.log(loginForm.value);

	removeToken("token");
	removeToken("tokenTime");

	const validateUsername = (rule: any, value: string, callback: any) => {
		if (!value) {
			callback(new Error("请输入您的账号"));
		} else {
			callback();
		}
	};
	const validatePassword = (rule: any, value: string, callback: any) => {
		if (!value) {
			callback(new Error("请输入您的账号密码"));
		} else {
			callback();
		}
	};
	const loginRules = ref<FormRules>({
		//表单规则
		username: [
			{ required: true, trigger: "blur", validator: validateUsername },
		],
		password: [
			{ required: true, trigger: "blur", validator: validatePassword },
		],
	});

	const remember = ref(false); //是否记住密码
	const loading = ref(false);

	const refLoginForm = ref<FormInstance>(); //表单ref
	const handleLogin = () => {
		(refLoginForm.value as any).validate((valid: boolean) => {
			if (valid) {
				loading.value = true;
				const data = {
					username: loginForm.value.username,
					password: md5(loginForm.value.password),
				};
				API.Login(data)
					.then((res) => {
						var inFifteenMinutes = new Date(
							date((new Date().getTime() + 1 * 60 * 60 * 1000) as any as string)
						);

						setToken("token", (res as any).token, inFifteenMinutes);
						setToken("tokenTime", new Date().getTime(), inFifteenMinutes);

						setUserInfo();
						loading.value = false;
						router.push("/index");
					})
					.catch((err) => {
						loading.value = false;
					});
			} else {
				console.log("失败");
				return false;
			}
		});
	};

	const setUserInfo = () => {
		// 记住密码
		if (remember.value) {
			setToken("username", encode(loginForm.value.username));
			setToken("password", encode(loginForm.value.password));
		} else {
			removeToken("username");
			removeToken("password");
		}
	};
</script>

<style lang="scss">
	/* 修复input 背景不协调 和光标变色 */
	/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
	$bg: #283443;
	$light_gray: #fff;
	$cursor: #fff;

	.login-container .el-input input {
		color: #000 !important;
	}

	@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
		.login-container .el-input input {
			color: #000 !important;
		}
	}

	::-ms-clear,
	::-ms-reveal {
		display: none;
	}

	.login-container {
		background-color: #2d3a4b;

		.el-input {
			.el-input__wrapper {
				padding-left: 20px;

				input {
					background: transparent;
					border: 0px !important;
					-webkit-appearance: none;
					border-radius: 10px;
					padding: 12px 20px 12px 24px !important;
					color: $light_gray;
					height: 47px;
					caret-color: #000;
					border: 0.5px solid #999;

					&:-webkit-autofill {
						box-shadow: 0 0 0px 1000px #fff inset !important;
						-webkit-text-fill-color: #000 !important;
					}
				}
			}
		}

		.el-form-item {
			border-radius: 10px;
			color: #454545;
		}
	}
</style>

<style lang="scss" scoped>
	$bg: #2d3a4b;
	$dark_gray: #889aa4;
	$light_gray: #eee;

	.login-container {
		background-image: url("../../assets/images/4.jpg");
		background-repeat: no-repeat;
		height: 100vh;
		width: 100%;
		overflow: hidden;

		.login-form {
			position: relative;
			width: 700px;
			height: 600px;
			overflow: hidden;
			border-radius: 8px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -350px;
			margin-top: -300px;
			max-width: 100%;
		}

		.logo-img {
			width: 80px;
			height: 80px;
			margin-right: 20px;
		}

		.login-box {
			width: 550px;
			text-align: center;
			padding: 50px 50px;
			box-sizing: border-box;
			background-color: #fff;
			margin: 0 auto;
			border-radius: 8px;
			margin-top: 30px;

			h3 {
				font-size: 24px;
				margin: 0px auto 20px auto;
				text-align: center;
				font-weight: bold;
			}
		}

		.svg-container {
			padding: 3px 5px 3px 15px;
			color: $dark_gray;
			vertical-align: middle;
			width: 30px;
			display: inline-block;
		}

		.title-container {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			.title {
				display: inline-block;
				font-size: 21px;
				text-align: center;
				color: #fff;
				font-size: 34px;
				letter-spacing: 5px;
			}
		}

		.login-btn {
			width: 100%;
			background-color: #3071f4;
			border-color: #3071f4;
			padding: 20px;
			box-sizing: border-box;
		}

		.v-code {
			position: relative;

			img {
				position: absolute;
				top: 15px;
				right: 0px;
				cursor: pointer;
			}
		}

		.el-checkbox {
			display: flex;
			text-align: left;
			margin-bottom: 20px;
		}

		.state-box {
			width: 800px;
			color: #fff;
			text-align: center;
			position: absolute;
			bottom: 20px;
			left: 50%;
			margin-left: -400px;
			font-size: 14px;
		}
	}
</style>
