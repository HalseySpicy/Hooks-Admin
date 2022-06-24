# Hooks-Admin 🚀

### 介绍

🚀🚀🚀 Hooks Admin，基于 React18、React-Router v6、React-Hooks、Redux、TypeScript、Vite2、Ant-Design 开源的一套后台管理框架。

### 📚 相关文档

- 项目更新日志：[CHANGELOG.md](./CHANGELOG.md)

### 一、在线预览地址 👀

- Link：http://hooks.spicyboy.cn

### 二、Git 仓库地址 (欢迎 Star⭐)

- Gitee：https://gitee.com/laramie/Hooks-Admin

- GitHub：https://github.com/HalseySpicy/Hooks-Admin

### 三、安装使用步骤 📑

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

### 四、文件资源目录 📚

```text
Geeker-Admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ components          # 全局组件
│  ├─ config              # 全局配置项
│  ├─ enums               # 项目枚举
│  ├─ hooks               # 常用 Hooks
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

### 五、浏览器支持

> 默认支持以下浏览器，vue3.2 不支持 IE 浏览器。更多浏览器可以查看 [Can I Use Es Module](https://caniuse.com/?search=ESModule)
>
> **💢 请不要使用 QQ 浏览器开发，QQ 浏览器 不识别 某些 ES6 以上语法**

| ![Edge](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Edge.png) | ![Firefox](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Firefox.png) | ![Chrome](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Chrome.png) | ![Safari](https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/Safari.png) |
| :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :---------------------------------------------------------------------------: |
|                              last 2 versions                              |                                 last 2 versions                                 |                                last 2 versions                                |                                last 2 versions                                |

### 六、项目后台接口 🧩

> 项目后台接口完全采用 Mock 数据，感谢以下 Mock 平台支持

- FastMock： https://www.fastmock.site/
- EasyMock：https://mock.mengxuegu.com/

![weixin-hooks]()

### 七、微信交流群

> 扫描以下二维码，加入群聊 🤪

|                                      微信群二维码                                       |
| :-------------------------------------------------------------------------------------: |
| <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/md/hooks.png" width=170> |

### 八、捐赠 🍵

> **如果你正在使用这个项目或者喜欢这个项目的，可以通过以下方式支持我**

- **Star、Fork、Watch** 一键三连 🚀🚀

- 通过 **微信、支付宝** 一次性捐款，够维护访问地址就行 🤣🤣

|                                                         微信                                                          |                                                        支付宝                                                         |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
| <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220610144145.png" alt="Wechat QRcode" width=170> | <img src="https://iamge-1259297738.cos.ap-chengdu.myqcloud.com/img/20220610144200.png" alt="Alipay QRcode" width=170> |
