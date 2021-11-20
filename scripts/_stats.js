/**
 * ============================================================================
 * 数据统计
 * ============================================================================
 */

// 百度统计令牌
const BAIDU_TONGJI_TOKEN = "a0df9b96f6d9c1ce00e5eb77a70907a7";

/**
 * 加载百度统计
 *
 * @param {string} token 令牌
 */
function loadBaiduTongji(token) {
    console.debug("加载百度统计");
    var _hmt = _hmt || [];
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?" + token;
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();
}

// 如果访问者不是博主，且未禁用统计，则加载统计组件
if (!window.xData.visitor.isOwner && !window.xData.site.disableStats) {
    console.debug("加载统计组件");
    loadBaiduTongji(BAIDU_TONGJI_TOKEN);
}
