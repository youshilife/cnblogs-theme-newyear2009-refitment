/**
 * ============================================================================
 * 发布内容详情页
 * ============================================================================
 */

if (xData.page.isPublication) {
    /**
     * ================================
     * 内容
     * ================================
     */

    let publication = document.querySelector("#post_detail");

    {
        let meta = publication.querySelector(".postDesc");

        /*
         * 处理元数据内容
         */
        {
            let html = meta.innerHTML.trim();
            // 移除“posted”
            html = html.replace("posted @", "");
            // 替换“&nbsp;”为空格
            html = html.replaceAll("&nbsp;", " ");
            // 包裹发布时间和作者
            html = `
<div class="x-publish-time-author">
    ${html.substring(0, html.indexOf("</a>") + "</a>".length)}
</div>
${html.substring(html.indexOf("</a>") + "</a>".length)}
`;

            meta.innerHTML = html;
        }

        /*
         * 调整DOM结构
         */
        {
            // 将元数据元素移动到紧跟正文之后
            let postBody = publication.querySelector("#cnblogs_post_body");
            postBody.parentElement.insertBefore(meta, postBody.nextSibling);
        }
    }
}
