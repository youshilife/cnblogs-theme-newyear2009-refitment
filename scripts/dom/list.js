/**
 * ============================================================================
 * 文章列表页
 * ============================================================================
 */

/**
 * ====================================
 * 日期文章列表
 * ====================================
 */

if (document.querySelector(".day")) {
    /*
     * 处理摘要
     */
    {
        let summaries = document.querySelectorAll(".day .c_b_p_desc");
        for (let elem of summaries) {
            let html = elem.innerHTML.trim();
            // 移除“摘要”
            html = html.replace(/^摘要：/, "");
            // 包裹“阅读全文”
            html = `
${html.substring(0, html.indexOf("<"))}……
<div class="x-read-more">
    ${html.substring(html.indexOf("<"))}
</div>
`;

            elem.innerHTML = html;
        }
    }

    /*
     * 处理元数据
     */
    {
        let metas = document.querySelectorAll(".day .postDesc");
        for (let elem of metas) {
            let html = elem.innerHTML;
            // 移除“posted”
            html = html.replace("posted @", "");
            // 移除作者名
            html = html.replace(xData.owner.name, "");
            // 包裹时间
            html = `
<span class="x-publish-time">${html.substring(0, html.indexOf("<"))}</span>
${html.substring(html.indexOf("<"))}
`;

            elem.innerHTML = html;
        }
    }
}

/**
 * ====================================
 * 我的随笔
 * ====================================
 */

let myPosts = document.querySelector("#myposts");
if (myPosts) {
    /*
     * 处理元数据
     */
    {
        let metas = myPosts.querySelectorAll(".postDesc2");
        for (let elem of metas) {
            let html = elem.innerHTML.trim();
            // 移除作者名
            html = html.replace(xData.owner.name, "");
            // 包裹时间
            html = `
<span class="x-publish-time">${html.substring(0, html.indexOf("<"))}</span>
${html.substring(html.indexOf("<"))}
`;

            elem.innerHTML = html;
        }
    }
}
