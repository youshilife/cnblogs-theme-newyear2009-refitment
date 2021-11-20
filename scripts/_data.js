/**
 * ============================================================================
 * 数据
 * ============================================================================
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
        name: null,
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
 * 载入可直接从页面获取的数据
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

window.xData.visitor.guid = window.visitorUserId;
window.xData.visitor.isLogined = window.isLogined;
window.xData.visitor.isOwner = window.isBlogOwner;

console.debug("页面原生数据已载入");
