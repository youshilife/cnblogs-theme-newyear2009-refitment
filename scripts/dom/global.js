/**
 * ============================================================================
 * 全局性DOM
 * ============================================================================
 */

import {removeNodes} from "./utils";

/**
 * ====================================
 * 访问模式
 * ====================================
 */

{
    if (xData.visitor.isOwner) {
        console.debug("【访问模式】博主");
        document.body.classList.add("x-mode-owner");
    } else {
        console.debug("【访问模式】访客");
        document.body.classList.add("x-mode-visitor");
    }
}

/**
 * ====================================
 * 链接
 * ====================================
 */

{
    /*
     * 移除所有举报链接
     */

    let links = document.querySelectorAll("a[onclick*='reportManager.report']");
    removeNodes(links);

    console.debug("【链接】已移除举报链接");
}

/**
 * ====================================
 * 统计组件
 * ====================================
 */

{
    if (!xData.blog.disableStats) {
        if (!xData.visitor.isOwner) {
            let _hmt = window._hmt || [];
            (function() {
                let hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?" + xData.blog.baiduTongjiToken;
                let s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
                console.debug("【统计】百度统计组件已加载");
            })();
        } else {
            console.debug("【统计】博主访问，已关闭统计组件");
        }
    } else {
        console.debug("【统计】统计组件已被强制禁用");
    }
}
