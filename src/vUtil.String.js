/**
 * @author: Miller
 */

vUtil.String = {
    /**清除首尾的空格*/
    trimSpace: function () {
        return this.replace(/^\s+|\s+$/g, "");
    },
    /**大写转小写，小写转大写*/
    swapCase: function (str) {
        return str.replace(/[a-z]/ig, function (matchStr) {
            if (matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if (matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },
    /**字符串反转*/
    reverse: function (str) {
        return str.split("").reverse().join("");
    },
    //中文校验
    isChinese: function (str) {
        return /^[\u4E00-\u9FA5]+$/.test(str);
    },
    //去掉中文字符
    removeChinese: function (str) {
        return str.replace(/[\u4E00-\u9FA5]+/gm, "");
    },


    /** 功能：截取长字符串
     * @param {string} str 要截取的字符串
     * @param {number} size 截取长度(单字节长度)
     */
    sliceStr: function (str, size) {
        var curSize = 0, arr = [];
        for (var i = 0, len = str.length; i < len; i++) {
            arr.push(str.charAt(i));
            if (str.charCodeAt(i) > 255) {
                curSize += 2;
                if (size === curSize || size === curSize - 1) {
                    return arr.join('');
                }
            } else {
                curSize++;
                if (size === curSize) {
                    return arr.join('');
                }
            }
        }
    }


}
