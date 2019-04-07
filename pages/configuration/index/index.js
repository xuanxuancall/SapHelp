
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1
  },

  switchRightTab: function (e) {
    let id = e.target.dataset.id;
    this.setData({
      curNav: id
    })
  },

})



