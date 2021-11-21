/**
 * ============================================================================
 * 数据属性的setter方法
 * ============================================================================
 *
 * 通过setter实现对数据赋值时同步到视图。
 * 因此要求DOM结构模板在此之前已经准备好。
 *
 */

/**
 * ====================================
 * 博客数据
 * ====================================
 */

Object.defineProperties(xData.blog, {
    postCount: {
        get() {
            return xData.blog._postCount;
        },
        set(value) {
            xData.blog._postCount = value;
            document.querySelector("#x-owner .x-post-count .x-value").textContent = value;
        },
    },

    readCount: {
        get() {
            return xData.blog._readCount;
        },
        set(value) {
            xData.blog._readCount = value;
            document.querySelector("#x-owner .x-read-count .x-value").textContent = value;
        },
    },

    commentCount: {
        get() {
            return xData.blog._commentCount;
        },
        set(value) {
            xData.blog._commentCount = value;
            document.querySelector("#x-owner .x-comment-count .x-value").textContent = value;
        },
    },
});

/**
 * ====================================
 * 博主数据
 * ====================================
 */

Object.defineProperties(xData.owner, {
    name: {
        get() {
            return xData.owner._name;
        },
        set(value) {
            xData.owner._name = value;
            document.querySelector("#x-owner .x-name a").textContent = value;
        },
    },

    avatarUrl: {
        get() {
            return xData.owner._avatarUrl;
        },
        set(value) {
            xData.owner._avatarUrl = value;
            document.querySelector("#x-owner .x-avatar img").src = value;
        },
    },

    homeUrl: {
        get() {
            return xData.owner._homeUrl;
        },
        set(value) {
            xData.owner._homeUrl = value;
            document.querySelector("#x-owner .x-avatar").href = value;
            document.querySelector("#x-owner .x-name a").href = value;
        },
    },
});
