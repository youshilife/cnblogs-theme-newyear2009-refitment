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
     * 加载博主信息
     */
    {
        let news = document.querySelector("#sidebar_news");
        whenReady(news, "园龄", () => {
            /*
             * 提取数据
             */

            let profile = news.querySelector("#profile_block");
            let text = profile.textContent.replaceAll("\n", "");
            xData.owner.registerDate = profile.innerHTML.match(/入园时间：(.+?)"/)[1];
            xData.owner.fansCount = parseInt(text.match(/粉丝：.*?(\d+)/)[1]);
            xData.owner.followCount = parseInt(text.match(/关注：.*?(\d+)/)[1]);

            /*
             * 处理关注按钮
             */

            let follow = null;
            let infoRight = document.querySelector("#x-owner .x-info .x-right");
            // 非博主显示按钮
            if (!xData.visitor.isOwner) {
                follow = document.querySelector("#p_b_follow");
                // 关注状态也需要延迟加载
                whenReady(follow, "关注", () => {
                    let link = follow.firstElementChild;
                    link.classList.add("x-button");
                    if (link.textContent.indexOf("取消关注") >= 0) {
                        link.classList.add("x-cancel");
                        link.textContent = "取消关注";
                    } else {
                        link.classList.add("x-add");
                        link.textContent = `+ 第${xData.owner.fansCount + 1}个关注`;
                    }
                });
            }
            // 博主显示统计信息
            else {
                follow = document.createElement("div");
                follow.innerHTML = `
<div>粉丝：${xData.owner.fansCount}</div>
<div>关注：${xData.owner.followCount}</div>
`;
            }
            follow.classList.add("x-follow");
            infoRight.append(follow);
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
