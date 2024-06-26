Page({
  data: {
    types: ['网页', '电子邮箱'],
    type: 0,
    email: 'crazyurus@vip.qq.com',
    url: 'https://developers.weixin.qq.com/',
    title: '',
  },
  onTypeChange(e) {
    const { value } = e.detail;

    this.setData({
      type: Number(value),
    });
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
    const { url, title } = this.data;

    if (url) {
      wx.navigateTo({
        url: '/pages/common/webview?url=' + encodeURIComponent(url) + '&title=' + title,
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
  },
  help() {
    wx.navigateTo({
      url: '/pages/common/webview?url=https://github.com/crazyurus/open-url-miniprogram/blob/master/README.md&skip=true',
    });
  }
});
