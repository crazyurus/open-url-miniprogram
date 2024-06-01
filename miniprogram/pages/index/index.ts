Page({
  data: {
    url: '',
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
