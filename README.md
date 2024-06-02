# 打开网页小助手

![预览](https://github.com/crazyurus/open-url-miniprogram/actions/workflows/preview.yml/badge.svg)
![上传](https://github.com/crazyurus/open-url-miniprogram/actions/workflows/upload.yml/badge.svg)

> 该功能已失效

该微信小程序可帮助其它小程序打开网页，无需配置业务域名。也可用于配置微信公众号的自定义菜单外链。

## 在小程序中使用

在你的小程序中添加以下代码：

```js
wx.navigateToMiniProgram({
  appId: 'wx282fc9c4183b714c',
  path: '/pages/common/webview',
  extraData: {
    url: 'https://crazyurus.cn',
    title: ' Crazy Urus 个人主页',
    navigationBarBackgroundColor: "#ededed",
    navigationBarTextStyle: "black"
  }
});
```

其中，需要通过 `extraData` 传递参数：

| 参数 | 类型 | 是否必填 | 说明 |
|:----:|:----:|:-----:|:----|
| url | string | 是 | 需要打开的网页 URL |
| title | string | 否 | 指定网页的标题，默认使用网页本身的标题 |
| navigationBarBackgroundColor | string | 否 | 指定导航栏背景颜色，需要使用十六进制颜色表示，默认值 `#ededed` |
| navigationBarTextStyle | string | 否 | 指定导航栏文字颜色，仅支持 `black` 或 `white`，默认值 `black` |

## 在微信公众号中使用

1. 需要在公众号后台【广告与服务】【小程序管理】中关联此小程序（AppID：`wx282fc9c4183b714c`），无需确认即可关联成功。
2. 前往【内容与互动】【自定义菜单】配置，添加菜单项，消息类型选择 **跳转小程序**，路径填写 `pages/common/webview?url=https://crazyurus.cn`。其中 `url` 可换成你的网址，如网站中有查询参数需 URL 编码。此外还支持传递的参数和小程序一致。

## 案例

使用了该小程序打开网页能力的微信小程序：

**宣讲汇**

使用了该小程序自定义菜单的公众号：

**Crazy Urus**

如果你的微信小程序或公众号也使用了，欢迎通过 **Pull Request** 补充
