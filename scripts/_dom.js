/**
 * ============================================================================
 * 准备DOM
 * ============================================================================
 */

/**
 * 设置访问模式。
 */
function setAccessMode() {
    if (window.isBlogOwner) {
        console.debug("访问模式：主人");
        document.body.classList.add("x-mode-owner");
    } else {
        console.debug("访问模式：访客");
        document.body.classList.add("x-mode-visitor");
    }
}

/**
 * ====================================
 * 调整内容
 * ====================================
 */

/**
 * 添加导航栏项目。
 */
function addNavbarItems() {
    let navList = document.querySelector("#navList");
    let items = document.querySelectorAll("#x-navbar-items > li");
    for (let item of items) {
        item.firstElementChild.href =
            item.firstElementChild.href.replace(window.xData.site.cnblogsUrl, window.xData.site.homeUrl);
        navList.append(item);
    }
}

/**
 * 重新排序导航栏项目。
 */
function resortNavbarItems() {
    let navList = document.querySelector("#navList");
    let contactItem = document.querySelector("#blog_nav_contact").parentElement;
    navList.append(contactItem);
    let newPostItem = document.querySelector("#blog_nav_newpost").parentElement;
    navList.append(newPostItem);
    let adminItem = document.querySelector("#blog_nav_admin").parentElement;
    navList.append(adminItem);
}

/**
 * 移除文章信息中的`posted`文本。
 */
 function removePosted() {
    console.debug(`移除.postDesc元素中的"posted @"`);
    let descs = document.querySelectorAll(".postDesc");
    for (let desc of descs) {
        desc.innerHTML = desc.innerHTML.replace("posted @", "");
    }
}

setAccessMode();
addNavbarItems();
resortNavbarItems();
removePosted();
