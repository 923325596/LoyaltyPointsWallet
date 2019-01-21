### node版本要求

```
node >= 8.10.0
npm >= 6.4
```

## 安装依赖

```
npm install
```

### 安卓调试

```
npm run android_dev
```

### IOS调试

```
npm run ios_dev
```

### 项目目录
```
src
    -common
        -Global.js  // 全局变量
        -Color.js  // 颜色处理
        -Images.js  // 图片处理
    -router
        -Root_Router.js   // 路由导航
    -scenes/   //  工作目录
```

### 错误提示
```
Q:报错：zsh: command not found: react-native

A:运行：npm install -g yarn react-native-cli

```
