const DEFAULT_BACKGROUND_COLOR = '#ededed';

Page({
  data: {
    url: '',
    allowed: false,
  },
  onLoad(options) {
    wx.hideHomeButton();

    if (options.url) {
      if (
        options.navigationBarBackgroundColor ||
        options.navigationBarTextStyle
      ) {
        wx.setNavigationBarColor({
          frontColor:
            options.navigationBarTextStyle === 'blank'
              ? '#000000'
              : '#ffffff',
          backgroundColor: options.navigationBarBackgroundColor || DEFAULT_BACKGROUND_COLOR,
        });
      }

      this.setData({
        url: decodeURIComponent(options.url),
        allowed: decodeURIComponent(options.url).startsWith('https://mp.weixin.qq.com/')
      });
    } else {
      const response = wx.getEnterOptionsSync();
      const { extraData } = response.referrerInfo;

      if (
        extraData.navigationBarBackgroundColor ||
        extraData.navigationBarTextStyle
      ) {
        wx.setNavigationBarColor({
          frontColor:
            extraData.navigationBarTextStyle === 'blank'
              ? '#000000'
              : '#ffffff',
          backgroundColor: extraData.navigationBarBackgroundColor || DEFAULT_BACKGROUND_COLOR,
        });
      }

      if (extraData.url) {
        this.setData({
          url: extraData.url,
          allowed: extraData.url.startsWith('https://mp.weixin.qq.com/')
        });
      }
    }
  },
  openURL() {
    wx.navigateToMiniProgram({
      appId: 'wxcff7381e631cf54e',
      path: '/pages/h5/h5?src=' + encodeURIComponent(this.data.url)
    });
  },
  copyURL() {
    wx.setClipboardData({
      data: this.data.url,
    });
  },
});
