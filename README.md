# vue2 项目实例

## 相关技术栈

- vue
- vuex
- stylus
- eslint
- webpack2
- element Ui
- axios

## 目录结构

    / 根目录
    |__ build                    # webpack配置
    |__ config                   # 环境配置
    |__ dist                     # 生成结果
    ├── src                      # 程序源文件
    │   ├── App.vue              # 基本布局
    │   ├── main.js              # 程序启动和渲染
    │   ├── routers.js           # 路由
    │   ├── components           # 全局可复用的表现组件
    │   ├── pages                # 页面
    │   ├── assets               # 静态文件
    │   └── store                # vuex
    │       ├── modules          # 模块vuex，本实例没用到
    │       ├── action.js        # action 方法
    │       ├── getters.js       # getters 获取状态
    │       ├── index.js         # vuex 入口及全局状态定义
    │       ├── types.js         # 状态类型名
    │       └── mutations.js     # 状态改变器
    ├── index.html               # 应用入口文件
    └──package.json              # npm依赖管理

## 使用

```bash
# 依赖安装
npm install

# 开发模式，默认端口：8080
npm run dev

# 打包
npm run build

# eslint检测
npm run lint
```