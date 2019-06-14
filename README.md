# vue-preset
结合vue-cli3的preset搭建基于git repo的前端项目模板
# 特性
- 默认安装axios
- 新建时可选择安装element-ui、vuex
# 使用

```
npm install -g @vue/cli
vue create --preset 1850061289/vue-preset my-project
```
# 生成项目结构
```
project
└───build
|   |    deploy.sh（服务器部署脚本）
|
└───public
|       
└───src
|   └───api
|   |    index.js（接口定义，拦截请求和响应，转换请求数据和响应数据）
|   └───assets
|   └───components
|   └───views
|       App.vue
|       main.js
|       router.js
|
|   .browserslistrc
|   .env.test_production
|   .gitignore
|   babel.config.js
|   package-lock.json
|   package.json
|   postcss.config.js
|   README.md
|   vue.config.js
```
# 运行及构建部署
### 本地运行
```
npm run serve
```
### 构建
```
npm run build
```
### 部署
```
sh ./build/deploy.sh test_build（测试环境）
sh ./build/deploy.sh （线上环境）
```
