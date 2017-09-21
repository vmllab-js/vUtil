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
                n[i] = this.deepCopy(obj[i]);
            }
            return n;
        } else if (obj instanceof Object) {
            let n = {};
            for (let i in obj) {
                n[i] = this.deepCopy(obj[i]);
            }
            return n;
        }
        return obj;
    },

    /**
     * 合并对象
     * @param  {Object} sources 原对象
     * @return {Object}         新对象
     */
    merge(...sources) {
        return Object.assign({}, ...sources);
    },

    /**
     * 判断是否有key值
     * @param  {Object}  obj 原对象
     * @param  {String}  key key值
     * @return {Boolean||Object}     如果不含有则返回false，如果有则返回新对象包含key值和value值
     */
    hasKey(obj, key) {
        if (!(obj instanceof Array) && obj instanceof Object) {
            const arr = Object.entries(obj).filter((item, index) => {
                return item[0] === key;
            })[0];
            let r = false;
            if (arr) {
                r = {
                    [arr[0]]: arr[1]
                };
            }
            return r;
        } else {
            throw new Error('所传入的不是一个对象');
        }
    },

    /**
     * 对比两个对象的值是否相等
     * @param  {[type]}  obj0 [description]
     * @param  {[type]}  obj1 [description]
     * @return {Boolean}      [description]
     */
    isEqual(obj0, obj1) {
        const objString0 = JSON.stringify(obj0);
        const objString1 = JSON.stringify(obj1);
        return objString0 === objString1;
    }
};
