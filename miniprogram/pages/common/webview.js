Page({
  data: {
    url: '',
  },
  onLoad(options) {
    if (options.url) {
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
          backgroundColor: extraData.navigationBarBackgroundColor || '#ffffff',
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
