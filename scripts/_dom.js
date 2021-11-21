/**
 * ============================================================================
 * 准备DOM
 * ============================================================================
 */

/**
 * 设置访问模式。
 */
function setAccessMode() {
    if (window.xData.visitor.isOwner) {
        console.debug("访问模式：博主");
        document.body.classList.add("x-mode-owner");
    } else {
        console.debug("访问模式：访客");
        document.body.classList.add("x-mode-visitor");
    }
}

/**
 * 移除DOM结点
 *
 * @params {NodeList} nodes 结点列表
 */
function removeNodes(nodes) {
    for (let node of nodes) {
        node.remove();
    }
}

/**
 * 处理链接。
 */
function handleLinks() {
    // 举报
    let links = document.querySelectorAll("a[onclick*='reportManager.report']");
    removeNodes(links);
}

/**
 * 处理导航栏。
 */
function handleNavbar() {
    let navList = document.querySelector("#navList");

    /**
     * 添加新导航项
     */
    let newItems = document.querySelectorAll("#x-navbar-items > li");
    for (let item of newItems) {
        item.firstElementChild.href =
            item.firstElementChild.href.replace(window.xData.site.cnblogsUrl, window.xData.site.homeUrl);
        navList.append(item);
    }

    /**
     * 调整导航项顺序
     */
    let contactItem = document.querySelector("#blog_nav_contact").parentElement;
    navList.append(contactItem);
    let newPostItem = document.querySelector("#blog_nav_newpost").parentElement;
    navList.append(newPostItem);
    let adminItem = document.querySelector("#blog_nav_admin").parentElement;
    navList.append(adminItem);
}

/**
 * 处理日期文章列表。
 */
function handleDayList() {
    /**
     * 处理文章摘要
     */
    let summaries = document.querySelectorAll(".day .c_b_p_desc");
    for (let elem of summaries) {
        let html = elem.innerHTML.trim();
        // 移除“摘要”
        html = html.replace(/^摘要：/, "");
        // 包裹“阅读全文”
        html = `${html.substring(0, html.indexOf("<"))}……
<div class="x-read-more">${html.substring(html.indexOf("<"))}</div>`;
        elem.innerHTML = html;
    }

    /**
     * 处理文章信息
     */
    let descs = document.querySelectorAll(".day .postDesc");
    for (let elem of descs) {
        let html = elem.innerHTML;
        // 移除“posted”
        html = html.replace("posted @", "");
        // 移除作者名
        html = html.replace(window.xData.owner.name, "");
        // 包裹时间
        let time = html.substring(0, html.indexOf("<"));
        html = `<span class="x-post-time">${time}</span>${html.substring(html.indexOf("<"))}`;
        elem.innerHTML = html;
    }
}

/**
 * 处理“我的随笔”文章列表。
 */
function handleMyPostsList() {
    let myPosts = document.querySelector("#myposts");
    if (myPosts) {
        let descs = myPosts.querySelectorAll(".postDesc2");
        for (let elem of descs) {
            let html = elem.innerHTML.trim();
            // 移除作者名
            html = html.replace(xData.owner.name, "");
            elem.innerHTML = html;
        }
    }
}

/**
 * 处理文章详情。
 */
function handlePost() {
    if (window.xData.post.isPost) {
        let postDetail = document.querySelector("#post_detail");

        /**
         * 处理文章信息内容。
         */
        let postDesc = postDetail.querySelector(".postDesc");
        let html = postDesc.innerHTML.trim();
        // 移除“posted”
        html = html.replace("posted @", "");
        // 替换“&nbsp;”为空格
        html = html.replaceAll("&nbsp;", " ");
        // 包裹发布时间和作者
        html = `<div class="x-post-time-author">${html.substring(0, html.indexOf("</a>") + "</a>".length)}</div>
${html.substring(html.indexOf("</a>") + "</a>".length)}`;
        postDesc.innerHTML = html;

        /**
         * 调整DOM结构
         */
        // 将文章信息元素移动到紧跟正文之后
        let postBody = postDetail.querySelector("#cnblogs_post_body");
        postBody.parentElement.insertBefore(postDesc, postBody.nextSibling);
        // 将分类和标签元素移动到文章信息元素中
    }
}

/**
 * 处理博主信息。
 */
function handleOwner() {
    /**
     * 监听原生统计的加载，加载时设置统计数据
     */
    let blogStats = document.querySelector("#navigator .blogStats");
    let listener = function (event) {
        // DOMNodeInserted事件会多次触发，为了避免重复操作，在第一次触发时移除监听器，使得事件处理只做一次
        blogStats.removeEventListener("DOMNodeInserted", listener);

        let text = blogStats.textContent.replaceAll("\n", "").trim();
        window.xData.site.postCount = text.match(/随笔- (\d+)/)[1];
        window.xData.site.readCount = text.match(/阅读- (\d+)/)[1];
        window.xData.site.commentCount = text.match(/评论- (\d+)/)[1];
    };
    blogStats.addEventListener("DOMNodeInserted", listener);

    /**
     * 移动DOM到侧边栏
     */
    let ownerElem = document.querySelector("#x-owner");
    let sidebar = document.querySelector("#sideBarMain");
    sidebar.prepend(ownerElem);
}


setAccessMode();

handleLinks();
handleNavbar();
handleDayList();
handleMyPostsList();
handlePost();
handleOwner();
