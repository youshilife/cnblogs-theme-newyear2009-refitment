/**
 * ============================================================================
 * 实用工具
 * ============================================================================
 */

/**
 * 移除一批DOM结点。
 *
 * @param {NodeList} nodes 结点列表
 */
export function removeNodes(nodes) {
    for (let node of nodes) {
        node.remove();
    }
}

/**
 * 当指定DOM准备好了时执行指定逻辑。
 *
 * @param {Node} elem 要检查的DOM元素
 * @param {string} readyFlag 准备好了的标志，如果元素的文本内容中包含该标志，则表示已准备好
 * @param {function} callback 回调函数
 */
export function whenReady(elem, readyFlag, callback) {
    // 判断是否已准备好
    function isReady() {
        return elem.textContent.indexOf(readyFlag) >= 0;
    }

    // 若初始时就已经准备好了
    if (isReady()) {
        callback();
    }
    // 否则，监听元素的变动，直至准备好了
    else {
        // 监听器
        let listener = () => {
            if (isReady()) {
                // DOMNodeInserted事件会多次触发，为了避免重复操作，一旦准备好就立即移除监听器，使得事件处理只做一次
                elem.removeEventListener("DOMNodeInserted", listener);

                callback();
            }
        };
        // 监听
        elem.addEventListener("DOMNodeInserted", listener);
    }
}
