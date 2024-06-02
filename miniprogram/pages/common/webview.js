const DEFAULT_BACKGROUND_COLOR = '#ededed';

Page({
  data: {
    url: '',
  },
  onLoad(options) {
    if (options.url) {
      if (options.title) {
        wx.setNavigationBarTitle({
          title: options.title,
        });
      }

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
        wx.setNavigationBarTitle({
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

      if (extraData.url) {
        this.setData({
          url: extraData.url,
        });
      }
    }
  },
  onShareAppMessage() {
    return {
      success() {
        wx.showToast({
          icon: 'success',
          title: '分享成功',
        });
      },
    };
  },
});
