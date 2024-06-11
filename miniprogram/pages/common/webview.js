const DEFAULT_BACKGROUND_COLOR = '#ededed';


Page({
  data: {
    url: '',
    title: '',
    confirmed: false,
    error: false,
  },
  onLoad(options) {
    wx.hideHomeButton();

    if (options.skip) {
      this.setData({
        confirmed: true
      });
    }

    if (options.email) {
      this.setData({
        confirmed: true,
        url: 'mailto:' + options.email,
      });
    }

    if (options.title) {
      this.setData({
        title: options.title,
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
      });
    } else {
      const response = wx.getEnterOptionsSync();
      const { extraData } = response.referrerInfo;

      if (extraData.title) {
        this.setData({
          title: extraData.title,
        });
      }

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
          confirmed: true,
          url: 'mailto:' + extraData.email,
        });
      }

      if (extraData.url) {
        this.setData({
          url: extraData.url,
        });
      }
    }
  },
  openURL() {
    this.setData({
      confirmed: true,
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
  },
  setTitle() {
    if (this.data.title) {
      wx.setNavigationBarTitle({
        title: this.data.title,
      });
    }
  },
  loadError() {
    this.setData({
      error: true,
    });
  },
  onShareAppMessage(options) {
    return {
      path: '/pages/common/webview?url=' + encodeURIComponent(options.webViewUrl),
      success() {
        wx.showToast({
          icon: 'success',
          title: '分享成功',
        });
      },
    };
  },
});
