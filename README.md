# duck-ui 一个ui组件库
作者： 梁壮壮

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架， 希望对你有用。

## 开始使用

1. 添加css样式
  使用本框架之前， 请在 css 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE8 及以上浏览器都支持此样式

  你还需要设置默认颜色等变量（后续改为scss）
  ```
  :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #999;
        --border-color: #999;
        --border-color-hover: #666;
      }
  ```
  IE 15及以上浏览器都支持此样式

2. 安装 duck-ui
```
npm i --save duck-ui
```

3. 引入
```
import {Button} from 'zhuangzhuang-ui-test-1'
import 'zhuangzhuang-ui-test-1/dist/index.css'

export default {
  name: 'App',
  components: {
    'g-button': Button
  }
}
```

4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2410042_of7mq3t0aks.js"></script>
```



## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
