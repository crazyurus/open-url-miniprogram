# 网页小助手

![预览](https://github.com/crazyurus/open-url-miniprogram/actions/workflows/preview.yml/badge.svg)
![上传](https://github.com/crazyurus/open-url-miniprogram/actions/workflows/upload.yml/badge.svg)

该微信小程序可帮助其它小程序打开网页，无需配置业务域名

## 使用

在你的小程序中添加以下代码：

```js
wx.navigateToMiniProgram({
  appId: 'wx282fc9c4183b714c',
  path: '/pages/common/webview',
  extraData: {
    url: 'https://crazyurus.cn',
    title: ' Crazy Urus 个人主页',
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black"
  }
})
```

其中，需要通过 `extraData` 传递参数：

| 参数 | 类型 | 是否必填 | 说明 |
|:----:|:----:|:-----:|:----|
| url | string | 是 | 需要打开的网页 URL |
| title | string | 否 | 指定网页的标题，默认使用网页本身的标题 |
| navigationBarBackgroundColor | string | 否 | 指定导航栏背景颜色，需要使用十六进制颜色表示，默认值 `#ffffff` |
| navigationBarTextStyle | string | 否 | 指定导航栏文字颜色，仅支持 `black` 或 `white`，默认值 `black` |

## 案例

使用了该小程序打开网页能力的微信小程序：

**宣讲汇**

如果你的小程序也使用了，欢迎通过 Issue 反馈
