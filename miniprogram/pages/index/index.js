Page({
  data: {
    email: '',
    url: 'https://github.com/crazyurus/open-url-miniprogram/blob/master/README.md',
  },
  openEmail() {
    const { email } = this.data;

    if (email.includes('@')) {
      wx.navigateTo({
        url: '/pages/common/webview?email=' + this.data.email,
      });
    } else {
      wx.showToast({
        icon: 'error',
        title: '邮箱无效',
      });
    }
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
  },
  scan() {
    wx.scanCode({
      scanType: ['qrCode'],
      success: (response) => {
        this.setData({
          url: response.result
        });
      }
    });
  }
});
