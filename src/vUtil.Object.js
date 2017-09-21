/**
 * @author: Sussertod
 */

vUtil.Object = {
    /**
     * 浅拷贝
     * @param  {Object} [obj={}] 原对象
     * @return {Object}          新对象
     */
    simpleCopy(obj = {}) {
        if (obj instanceof Array) {
            let n = [];
            for (let i = 0; i < obj.length; ++i) {
                n[i] = obj[i];
            }
            return n;
        } else if (obj instanceof Object) {
            let n = {};
            for (let i in obj) {
                n[i] = obj[i];
            }
            return n;
        }
        return obj;
    },

    /**
     * 深拷贝
     * @param  {Object} [obj={}] 原对象
     * @return {Object}          新对象
     */
    deepCopy(obj = {}) {
        if (obj instanceof Array) {
            let n = [];
            for (let i = 0; i < obj.length; ++i) {
                n[i] = deepCopy(obj[i]);
            }
            return n;
        } else if (obj instanceof Object) {
            let n = {};
            for (let i in obj) {
                n[i] = deepCopy(obj[i]);
            }
            return n;
        }
        return obj;
    }
};
