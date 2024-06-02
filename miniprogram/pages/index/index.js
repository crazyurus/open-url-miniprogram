Page({
  data: {
    url: 'https://github.com/crazyurus/open-url-miniprogram/blob/master/README.md',
  },
  openURL() {
    const { url } = this.data;

    if (url) {
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(url),
      });
    } else {
      wx.showToast({
        icon: 'error',
        title: '网址无效',
      });
    }
  }
});
