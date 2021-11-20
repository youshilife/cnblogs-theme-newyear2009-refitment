/**
 * ============================================================================
 * 数据
 * ============================================================================
 */

/**
 * ====================================
 * 定义数据结构
 * ====================================
 */

window.xData = {
    // 网站数据
    site: {
        // 博客数字ID
        numberId: null,
        // 博客名称ID
        nameId: null,
        // 博客园地址
        cnblogsUrl: null,
        // 博客地址
        homeUrl: null,
        // 标题
        title: null,
        // 副标题
        subtitle: null,
        // 文章数
        _postCount: null,
        // 阅读数
        _readCount: null,
        // 评论数
        _commentCount: null,
    },
    // 文章
    post: {
        // 当前页面是否是文章详情页
        isPost: null,
        // 文章标题
        title: null,
        // 发布时间
        postTime: null,
    },
    // 博主数据
    owner: {
        // 名称
        _name: null,
        // 头像
        _avatarUrl: null,
    },
    // 当前访客数据
    visitor: {
        // 访客ID
        guid: null,
        // 是否已登录
        isLogined: null,
        // 是否是博主
        isOwner: null,
    },
};

/**
 * ====================================
 * 设置getter和setter，实现数据自动同步
 * ====================================
 */

Object.defineProperties(window.xData.site, {
    postCount: {
        get() {
            return window.xData.site._postCount;
        },
        set(value) {
            window.xData.site._postCount = value;
            document.querySelector("#x-owner .x-post-count .x-value").textContent = value;
        },
    },

    readCount: {
        get() {
            return window.xData.site._readCount;
        },
        set(value) {
            window.xData.site._readCount = value;
            document.querySelector("#x-owner .x-read-count .x-value").textContent = value;
        },
    },

    commentCount: {
        get() {
            return window.xData.site._commentCount;
        },
        set(value) {
            window.xData.site._commentCount = value;
            document.querySelector("#x-owner .x-comment-count .x-value").textContent = value;
        },
    },
});

Object.defineProperties(window.xData.owner, {
    name: {
        get() {
            return window.xData.owner._name;
        },
        set(value) {
            window.xData.owner._name = value;
            document.querySelector("#x-owner .x-name a").textContent = value;
        },
    },

    avatarUrl: {
        get() {
            return window.xData.owner._avatarUrl;
        },
        set(value) {
            window.xData.owner._avatarUrl = value;
            document.querySelector("#x-owner .x-avatar img").src = value;
        },
    },
});

/**
 * ====================================
 * 载入加载时就能确定的数据
 * ====================================
 */

window.xData.site.numberId = window.currentBlogId;
window.xData.site.nameId = window.currentBlogApp;
window.xData.site.cnblogsUrl = "https://www.cnblogs.com/";
window.xData.site.homeUrl = `${window.xData.site.cnblogsUrl}/${window.xData.site.nameId}/`;
window.xData.site.title = document.querySelector("#Header1_HeaderTitle").textContent;
window.xData.site.subtitle = document.querySelector("#blogTitle h2").textContent;

window.xData.post.isPost = !!window.currentPostDateAdded;
if (window.xData.post.isPost) {
    window.xData.post.title = document.querySelector("#cb_post_title_url").textContent.trim();
    window.xData.post.postTime = new Date(Date.parse(document.querySelector("#post-date").textContent));
}

window.xData.owner.name = (function () {
    let footer = document.querySelector("#footer");
    let name = footer.innerHTML.match(/Copyright .*? \d{4} (.+?)\n/i)[1];
    return name;
})();
window.xData.owner.avatarUrl = "https://pic.cnblogs.com/avatar/2512137/20210902193410.png";

window.xData.visitor.guid = window.visitorUserId;
window.xData.visitor.isLogined = window.isLogined;
window.xData.visitor.isOwner = window.isBlogOwner;

console.debug("页面初始数据已载入");
