const DEFAULT_BACKGROUND_COLOR = '#ededed';

function isAllowURL(url) {
  const hostname = url.split('/', 3);
  const whiteList = [
    'developers.weixin.qq.com',
    'mp.weixin.qq.com'
  ];

  return hostname.length === 3 && whiteList.includes(hostname[2]);
}

Page({
  data: {
    url: '',
    email: '',
    allowed: false,
  },
  onLoad(options) {
    wx.hideHomeButton();

    if (options.email) {
      this.setData({
        email: options.email,
      });
    }

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
        allowed: isAllowURL(decodeURIComponent(options.url)),
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

      if (extraData.email) {
        this.setData({
          email: extraData.email,
        });
      }

      if (extraData.url) {
        this.setData({
          url: extraData.url,
          allowed: isAllowURL(extraData.url)
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
  back() {
    wx.navigateBackMiniProgram();
    wx.navigateBack();
  }
});
