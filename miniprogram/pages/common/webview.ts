Page({
  data: {
    url: '',
  },
  onLoad(options: Record<string, string>) {
    if (options.url) {
      this.setData({
        url: decodeURIComponent(options.url)
      });
    } else {
      const response = wx.getLaunchOptionsSync();
      const { extraData } = response.referrerInfo;
       
      if (extraData.title) {
        wx.setNavigationBarTitle({
          title: extraData.title,
        });
      }

      if (extraData.navigationBarBackgroundColor || extraData.navigationBarTextStyle) {
        wx.setNavigationBarColor({
          frontColor: extraData.navigationBarTextStyle === 'blank' ? '#000000' : '#ffffff',
          backgroundColor: extraData.navigationBarBackgroundColor || '#ffffff'
        });
      }

      if (extraData.url) {
        this.setData({
          url: extraData.url
        });
      }
    }
  },
  onShareAppMessage(): any {
    return {
      success() {
        wx.showToast({
          icon: 'success',
          title: '分享成功'
        });
      }
    };
  }
})