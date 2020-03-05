// 以下是业务服务器API地址
// 云平台测试时使用
//var WxApiRoot = 'https://test-0j2wkomi3jpe.firefac.cn/openapi/'
// 云平台上线时使用
var WxApiRoot = 'https://ell968bhpgj5.firefac.cn/openapi/';

module.exports = {
  IndexUrl: WxApiRoot + 'home/index', //首页数据接口
  IndexBanner: WxApiRoot + 'home/banner', //首页banner
  CatalogList: WxApiRoot + 'catalog/index', //分类目录全部分类数据接口
  CatalogCurrent: WxApiRoot + 'catalog/current', //分类目录当前分类数据接口

  AuthLoginByWeixin: WxApiRoot + 'user/auth/miniprogram/login', //微信登录
  AuthLoginByAccount: WxApiRoot + 'auth/login', //账号登录
  AuthLogout: WxApiRoot + 'auth/logout', //账号登出
  AuthRegister: WxApiRoot + 'auth/register', //账号注册
  AuthReset: WxApiRoot + 'auth/reset', //账号密码重置
  AuthRegisterCaptcha: WxApiRoot + 'auth/regCaptcha', //验证码
  AuthBindPhone: WxApiRoot + 'auth/bindPhone', //绑定微信手机号

  StorageUpload: WxApiRoot + 'storage/upload', //图片上传,
  StorageGeneralQr: WxApiRoot + 'storage/general/qr', //图片上传,

  IssueList: WxApiRoot + 'issue/list', //帮助信息

  UserIndex: WxApiRoot + 'order/index', //个人页面用户相关信息

  LiveRoomList: WxApiRoot + 'live/list', //直播房间列表
  LiveRoomStatusUpdate: WxApiRoot + 'live/status/update', //直播房间列表
};