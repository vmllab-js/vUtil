/**
 * @author: Sussertod
 */

vUtil.Array = {
    /**
     * 打乱顺序
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    randomArr(arr) {
        const sortArr = vUtil.Object.deepCopy(arr);
        return sortArr.sort(() => {
            return 0.5 - Math.random();
        }).sort(() => {
            return 0.5 - Math.random();
        }).sort(() => {
            return 0.5 - Math.random();
        });
    },

    /**
     * 获取最大值
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    getMax(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (isNaN(arr[i])) {
                throw new Error('数组第' + i + '项不是数字类型');
            }
        }
        return Math.max(...arr);
    },

    /**
     * 根据参数获取数组中最大值的那一项
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Array}      新数组
     */
    getMaxPara(arr, para) {
        const paraArr = this.createArr(arr.length, (item, index) => {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        const max = this.getMax(paraArr);
        const index = paraArr.findIndex((item) => {
            return item === max;
        });

        return arr[index];
    },

    /**
     * 根据参数获取数组中最大值的那一项的索引值
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Number}      索引值
     */
    getMaxParaIndex(arr, para) {
        const paraArr = this.createArr(arr.length, (item, index) => {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        const max = this.getMax(paraArr);
        const index = paraArr.findIndex((item) => {
            return item === max;
        });

        return index;
    },

    /**
     * 获取最小值
     * @param  {Array} arr 原数组
     * @return {Array}     新数组
     */
    getMin(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (isNaN(arr[i])) {
                throw new Error('数组第' + i + '项不是数字类型');
            }
        }
        return Math.min(...arr);
    },

    /**
     * 根据参数获取数组中最小值的那一项
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Array}      新数组
     */
    getMinPara(arr, para) {
        const paraArr = this.createArr(arr.length, (item, index) => {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        const max = this.getMin(paraArr);
        const index = paraArr.findIndex((item) => {
            return item === max;
        });

        return arr[index];
    },

    /**
     * 根据参数获取数组中最小值的那一项的索引值
     * @param  {Array} arr  原数组
     * @param  {String} para 原数组参数
     * @return {Number}      索引值
     */
    getMinParaIndex(arr, para) {
        const paraArr = this.createArr(arr.length, (item, index) => {
            if (!arr[index][para]) {
                throw new Error('数组第' + index + '项未找到' + para + '属性');
            }
            return arr[index][para];
        });

        const max = this.getMin(paraArr);
        const index = paraArr.findIndex((item) => {
            return item === max;
        });

        return index;
    },

    /**
     * 根据参数获取元素
     * @param  {Array} arr         原数组
     * @param  {Function} [fn=()=>{}] 过滤条件
     * @return {Array}             新数组
     */
    getByPara(arr, fn = () => {}) {
        return arr.filter((item, index) => {
            return fn(item, index);
        });
    },

    /**
     * 创建数组
     * @param  {Number} [length=0]  数组长度，默认为0
     * @param  {Function} [fn=()=>{}] 创建规则
     * @return {Array}             新数组
     */
    createArr(length = 0, fn = () => {}) {
        return Array.from({
            length: length
        }, fn);
    },

    /**
     * 复制替换元素
     * @param  {Array} arr        原数组
     * @param  {Number} [target=0] 替换起始位置
     * @param  {Number} start      复制起始位置
     * @param  {Number} end        复制终止位置
     * @return {Array}            新数组
     */
    replaceArr(arr, target = 0, start, end) {
        const replacedArr = vUtil.Object.deepCopy(arr);
        if (!end) {
            end = arr.length;
        }
        const r = vUtil.Object.deepCopy(replacedArr.copyWithin(target, start, end));
        return r;
    },

    /**
     * 是否包含某个值
     * @param  {Array} arr  原数组
     * @param  {String} item 判断的值
     * @return {Boolean}      结果
     */
    includes(arr, item) {
        return arr.includes(item);
    }
};
