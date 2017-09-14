/**
 * @author: Miller Liang
 */

vUtil.String = {
    /**清除首尾的空格*/
    trimSpace: function () {
        return this.replace(/^\s+|\s+$/g, "");
    }
};