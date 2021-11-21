/**
 * ============================================================================
 * 定义数据结构
 * ============================================================================
 *
 * 非`_`开头的属性表明可以立即加载，且只读。
 * 以`_`开头的属性表明有getter和setter方法，需要同步到视图。
 *
 */

window.xData = {
    // 博客数据
    blog: {
        // 博客的数字ID
        numberId: null,
        // 博客的名称标识符
        nameId: null,
        // 根地址（博客园首页地址）
        rootUrl: null,
        // 当前博客首页地址
        indexUrl: null,
        // 博客标题
        title: null,
        // 博客副标题
        subtitle: null,
        // 是否禁用数据统计
        disableStats: null,
        // 百度统计令牌
        baiduTongjiToken: null,

        // 随笔数
        _postCount: null,
        // 阅读数
        _readCount: null,
        // 评论数
        _commentCount: null,
    },
    // 当前页面数据
    page: {
        // 当前是否是随笔详情页
        isPost: null,
        // 当前是否是文章详情页
        isArticle: null,
        // 当前是否是日记详情页
        isDiary: null,
        // 当前是否是发布内容详情页
        isPublication: null,
        // 发布内容标题
        title: null,
        // 发布内容发布时间
        publishTime: null,
    },
    // 博主数据
    owner: {
        // 账号注册日期
        registerDate: null,
        // 粉丝数
        fansCount: null,
        // 关注数
        followCount: null,

        // 博主昵称
        _name: null,
        // 博主头像地址
        _avatarUrl: null,
        // 个人主页地址
        _homeUrl: null,
    },
    // 当前访客数据
    visitor: {
        // 是否已登录
        isLoggedIn: null,
        // 是否是博主
        isOwner: null,
    },
};
