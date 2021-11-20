/**
 * ============================================================================
 * 准备DOM
 * ============================================================================
 */

/**
 * ====================================
 * 处理现有DOM
 * ====================================
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
removePosted();

/**
 * ====================================
 * 创建新DOM结构
 * ====================================
 */
