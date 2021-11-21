/**
 * ============================================================================
 * 加载初始数据
 * ============================================================================
 *
 * 部分数据已包含在原始HTML中，可直接获取。
 * 另外一部分数据是延迟加载的，需要在DOM处理阶段才能加载。
 *
 */

/**
 * ====================================
 * 博客数据
 * ====================================
 */

xData.blog.numberId = window.currentBlogId;

xData.blog.nameId = window.currentBlogApp;

xData.blog.rootUrl = "https://www.cnblogs.com";

xData.blog.indexUrl = `${xData.blog.rootUrl}/${xData.blog.nameId}`;

xData.blog.title = document.querySelector("#Header1_HeaderTitle").textContent.trim();

xData.blog.subtitle = document.querySelector("#blogTitle h2").textContent.trim();

xData.blog.disableStats = (() => {
    if (localStorage.disableStats) {
        return true;
    } else if (location.href.indexOf("disableStats") >= 0) {
        localStorage.disableStats = true;
        return true;
    }
    return false;
})();

xData.blog.baiduTongjiToken = "a0df9b96f6d9c1ce00e5eb77a70907a7";

/**
 * ====================================
 * 页面数据
 * ====================================
 */

xData.page.isPost = !!location.href.match("/p/.+?\.html");

xData.page.isArticle = !!location.href.match("/articles/.+?\.html");

xData.page.isDiary = !!location.href.match("/diary/.+?\.html");

xData.page.isPublication = xData.page.isPost || xData.page.isArticle || xData.page.isDiary;

if (xData.page.isPublication) {
    xData.page.title = document.querySelector("#cb_post_title_url").textContent.trim();

    xData.page.publishTime = new Date(Date.parse(document.querySelector("#post-date").textContent));
}

/**
 * ====================================
 * 博主数据
 * ====================================
 */

xData.owner.homeUrl = `https://home.cnblogs.com/u/${xData.blog.nameId}`;

xData.owner.name = (() => {
    let footer = document.querySelector("#footer");
    let name = footer.innerHTML.match(/Copyright .*? \d{4} (.+?)\n/i)[1];
    return name;
})();

xData.owner.avatarUrl = "https://pic.cnblogs.com/avatar/2512137/20210902193410.png";

/**
 * ====================================
 * 访客数据
 * ====================================
 */

xData.visitor.isLoggedIn = window.isLogined;

xData.visitor.isOwner = window.isBlogOwner;

console.debug("【数据】初始数据已载入");
