// about.js
var app = getApp()
var WxParse = require('../../lib/wxParse/wxParse.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: "<div class=\"title\">开放平台介绍</div>\n" +
    "<div class=\"content\">\n" +
    "<p>费尔工坊开放平台，为程序员、创业者、传统业者以及对电商小程序的兴趣爱好者，提供专业的电商社交等行业解决方案。帮助大家能快速搭建、并能自定义创建稳定可信赖的小程序系统。</p>\n" +
    "<ul>\n" +
    "<li><strong>程序员</strong>：提供开放接口，解决后端服务问题。并提供多种小程序解决模版与代码，能快速自定义小程序。也能最低成本帮助其他企业或者个人创立自己的小程序。</li>\n" +
    "<li><strong>创业者</strong>：根据提供的开放接口，结合自己的相关创意，能快速搭建系统，避免没有技术合伙人的尴尬。</li>\n" +
    "<li><strong>传统业者</strong>：传统业者在未知的互联网领域航行，跌跌撞撞，结果花了大价钱搞好的东西，却是不能打入市场。在费尔工坊能以最低的成本进行互联网的尝试，及时调整自己的方向。</li>\n" +
    "<li><strong>兴趣爱好者</strong>：通过开放的接口、开源代码和后台服务，可以学习到小程序与电商的开发和业务。</li>\n" +
    "</ul>\n" +
    "<p>公司团队来自华为、欧电云、享物说等业内资深互联网企业。拥有多年互联网和电商行业积淀。曾帮助过来伊份、本来便利、诸葛修车等企业创建自己的互联网品牌。</p>\n" +
    "<p>平台的创意来自于创始人对于996的看法，生活中不只是有苟且，还有很多更加精彩的等着大家。</p>\n" +
    "</div>"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    WxParse.wxParse('detail', 'html', this.data.detail, this);
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    return {
      title: '费尔工坊小程序开放平台 - 永久免费',
      desc: '小程序开放平台 - 永久免费',
      path: '/pages/about/about'
    }
  }
})