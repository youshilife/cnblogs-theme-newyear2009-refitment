/**
 * ============================================================================
 * 页头
 * ============================================================================
 */

let navList = document.querySelector("#navList");

/**
 * ====================================
 * 添加新导航项
 * ====================================
 */

{
    let items = document.querySelectorAll("#x-navbar-items > li");
    for (let item of items) {
        // 修正链接地址
        let link = item.firstElementChild;
        link.href = link.href.replace(xData.blog.rootUrl, xData.blog.indexUrl);

        navList.append(item);
    }
}

/**
 * ====================================
 * 调整导航项顺序
 * ====================================
 */

{
    let contactItem = document.querySelector("#blog_nav_contact").parentElement;
    navList.append(contactItem);

    let newPostItem = document.querySelector("#blog_nav_newpost").parentElement;
    navList.append(newPostItem);

    let adminItem = document.querySelector("#blog_nav_admin").parentElement;
    navList.append(adminItem);
}
