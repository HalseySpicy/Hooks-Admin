# Hooks-Admin 🚀

### 介绍 📖

🚀🚀🚀 Hooks Admin，基于 React18、React-Router v6、React-Hooks、Redux && Redux-Toolkit、TypeScript、Vite2、Ant-Design 开源的一套后台管理框架。

🌈 Redux-Toolkit 版本请切换到 Redux-Toolkit 分支上

### 项目相关文档 📚

- 项目更新日志：[CHANGELOG.md](./CHANGELOG.md)

### 一、在线预览地址 👀

- Link：https://hooks.spicyboy.cn

### 二、Git 仓库地址 (欢迎 Star⭐)

- Gitee：https://gitee.com/laramie/Hooks-Admin

- GitHub：https://github.com/HalseySpicy/Hooks-Admin

### 三、🔨🔨🔨 项目功能

- 🚀 采用最新技术找开发：React18、React-Router v6、React-Hooks、TypeScript、Vite2
- 🚀 采用 Vite2 作为项目开发、打包工具（配置了 Gzip 打包、跨域代理、打包预览工具……）
- 🚀 整个项目集成了 TypeScript （完全是为了想学习 🤣）
- 🚀 使用 redux 做状态管理，集成 immer、react-redux、redux-persist 开发
- 🚀 集成了两套状态管理，master 分支使用的是 redux || redux-toolkit 分支使用的是 redux-toolkit
- 🚀 使用 TypeScript 对 Axios 整个二次封装 （全局错误拦截、常用请求封装、全局请求 Loading、取消重复请求……）
- 🚀 支持 Antd 组件大小切换、暗黑 && 灰色 && 色弱模式、i18n 国际化（i18n 暂时没配置所有文件，根据项目自行配置）
- 🚀 使用 自定义高阶组件 进行路由权限拦截（403 页面）、页面按钮权限配置
- 🚀 支持 React-Router v6 路由懒加载配置、菜单手风琴模式、无限级菜单、多标签页、面包屑导航
- 🚀 使用 Prettier 统一格式化代码，集成 Eslint、Stylelint 代码校验规范（项目规范配置）
- 🚀 使用 husky、lint-staged、commitlint、commitizen、cz-git 规范提交信息（项目规范配置）

### 四、安装使用步骤 📑

- **Clone：**

```text
# Gitee
git clone https://gitee.com/laramie/Hooks-Admin.git
# GitHub
git clone https://github.com/HalseySpicy/Hooks-Admin.git
```

- **Install：**

```text
npm install
cnpm install

# npm install 安装失败，请升级 nodejs 到 16 以上，或尝试使用以下命令：
npm install --registry=https://registry.npm.taobao.org
```

- **Run：**

```text
npm run dev
npm run serve
```

- **Build：**

```text
# 开发环境
npm run build:dev

# 测试环境
npm run build:test

# 生产环境
npm run build:pro
```

- **Lint：**

```text
# eslint 检测代码
npm run lint:eslint

# prettier 格式化代码
npm run lint:prettier

# stylelint 格式化样式
lint:stylelint
```

- **commit：**

```text
# 提交代码（会自动执行 lint:lint-staged 命令）
npm run commit
```

### 五、项目截图

#### 1、登录页：

![hooks-login-light](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220914150533.png)

![hooks-login-dark](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220914150544.png)

#### 2、首页：

![hooks-home-light](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220914150552.png)

![hooks-home-dark](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220914150559.png)

### 六、文件资源目录 📚

```text
Hooks-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
│  ├─ language            # 语言国际化
│  ├─ layouts             # 框架布局
│  ├─ routers             # 路由管理
│  ├─ redux               # redux store
│  ├─ styles              # 全局样式
│  ├─ typings             # 全局 ts 声明
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.tsx             # 入口页面
│  ├─ main.tsx            # 入口文件
│  └─ env.d.ts            # vite 声明文件
├─ .editorconfig          # 编辑器配置（格式化）
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .eslintignore          # 忽略 Eslint 校验
├─ .eslintrc.js           # Eslint 校验配置
├─ .gitignore             # git 提交忽略
├─ .prettierignore        # 忽略 prettier 格式化
├─ .prettierrc.js         # prettier 配置
├─ .stylelintignore       # 忽略 stylelint 格式化
├─ .stylelintrc.js        # stylelint 样式格式化配置
├─ CHANGELOG.md           # 项目更新日志
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ LICENSE                # 开源协议文件
├─ lint-staged.config     # lint-staged 配置文件
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ postcss.config.js      # postcss 配置
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```

### 七、浏览器支持

> 默认支持以下浏览器。更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)
>
> **💢 请不要使用 QQ 浏览器开发，QQ 浏览器 不识别 某些 ES6 以上语法**

| ![Edge](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Edge.png) | ![Firefox](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Firefox.png) | ![Chrome](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Chrome.png) | ![Safari](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Safari.png) |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                              last 2 versions                              |                                 last 2 versions                                 |                                last 2 versions                                |                                last 2 versions                                |

### 八、项目后台接口 🧩

> 项目后台接口完全采用 Mock 数据，感谢以下 Mock 平台支持

- FastMock： https://www.fastmock.site/
- EasyMock：https://mock.mengxuegu.com/

### 九、微信交流群

> 微信群已超过 200 人，需要加我好友，拉大家进群 🤪

|                                            微信二维码                                             |
| :-----------------------------------------------------------------------------------------------: |
| <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220914145852.png" width=200> |

### 十、捐赠 🍵

> **如果你正在使用这个项目或者喜欢这个项目的，可以通过以下方式支持我**

- **Star、Fork、Watch** 一键三连 🚀🚀

- 通过 **微信、支付宝** 一次性捐款，够维护访问地址就行 🤣🤣

|                                                         微信                                                          |                                                        支付宝                                                         |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
| <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220610144145.png" alt="Wechat QRcode" width=170> | <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220610144200.png" alt="Alipay QRcode" width=170> |
