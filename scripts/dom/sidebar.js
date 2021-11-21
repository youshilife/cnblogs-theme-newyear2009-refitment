/**
 * ============================================================================
 * 侧边栏
 * ============================================================================
 */

import {whenReady} from "./utils";

/**
 * ====================================
 * 博主信息
 * ====================================
 */

{
    /*
     * 加载统计数据
     */
    {
        let blogStats = document.querySelector("#navigator .blogStats");
        whenReady(blogStats, "阅读", () => {
            let text = blogStats.textContent.replaceAll("\n", "").trim();
            window.xData.blog.postCount = text.match(/随笔- (\d+)/)[1];
            window.xData.blog.readCount = text.match(/阅读- (\d+)/)[1];
            window.xData.blog.commentCount = text.match(/评论- (\d+)/)[1];

            console.debug("【数据】博客统计数据已加载");
        });
    }


    /*
     * 移动模板DOM到侧边栏
     */
    {
        let owner = document.querySelector("#x-owner");
        let sidebar = document.querySelector("#sideBarMain");
        sidebar.prepend(owner);
    }
}
