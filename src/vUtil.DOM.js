/**
 * @author: Sussertod
 */

vUtil.DOM = {
    /**
     * 获取select当前option的文本值
     * @param  {Object} select DOM
     * @return {String}        文本值
     */
    getSelectText(select) {
        for (var i = 0; i < select.children.length; i += 1) {
            if (select.children[i].selected) {
                return select.children[i].text;
            }
        }
        return false;
    },

    /**
     * 获取表单数据集合
     * @param  {String} data 表单项ID
     * @return {Object}      数据集合
     */
    getFormData(...data) {
        const list = Array.of(...data);
        const r = {};
        list.map((key, index) => {
            if (!document.getElementById(key)) {
                throw new Error('不存在ID为' + key + '的DOM');
            }
            r[key] = document.getElementById(key).value;
        });

        return r;
    },

    /**
     * 设置placeholder
     * @param  {String} data ID
     * @param  {String} text placeholder文本值
     * @param  {String} color placeholder颜色
     */
    setPlaceholder(id, text, color) {
        const DOM = document.getElementById(id);
        const placeholderTxt = text || '请输入内容';
        const placeholderColor = color || '#666';
        const DOMColor = DOM.style.color || '#000';
        if (!DOM) {
            throw new Error('不存在ID为' + id + '的DOM');
        }

        DOM.value = placeholderTxt;
        DOM.style.color = placeholderColor;

        const addPlaceholder = () => {
            if (DOM.value === placeholderTxt) {
                DOM.value = '';
                DOM.style.color = DOMColor;
            }
        };

        const removePlaceholder = () => {
            if (DOM.value === '' || DOM.value === null) {
                DOM.value = placeholderTxt;
                DOM.style.color = placeholderColor;
            }
        };

        DOM.addEventListener('focus', addPlaceholder);
        DOM.addEventListener('blur', removePlaceholder);
    }
};
