/**
 * @author: iorilp
 */

vUtil.Event = {
    init : function (excludeList) {
        //排除的tag、class、id
        let excludeTag = ["A","INPUT","TEXTAREA","SELECT"];
        let excludeClass = [];
        let excludeId = [];

        if(excludeList){
            excludeList.forEach(function(item,index){
                if(/^[A-Za-z]+$/.test(item))excludeTag.push(item);
                if(item.substr(0,1) === ".")excludeClass.push(item);
                if(item.substr(0,1) === "#")excludeId.push(item);
            });
        }

        let preventFun = function () {
            // 判断默认行为是否可以被禁用
            if (event.cancelable) {
                // 判断默认行为是否已经被禁用
                if (!event.defaultPrevented) {
                    event.preventDefault();
                }
            }
        };

        let preventDefault = function (event) {

            //获取父容器tag、class、id
            let tag = event.target.parentNode.tagName || false;
            let tagClass = event.target.getAttribute("class") || false;
            let tagId = event.target.getAttribute("id") || false;

            //获取tag、class、id
            let thisTag = event.target.tagName;
            let thisTagClass = event.target.getAttribute("class");
            let thisTagId = event.target.getAttribute("id");

            let isExcludeTag = false;
            let isExcludeTagClass = false;
            let isExcludeTagId = false;

            excludeTag.forEach(function(item){
                if( tag == item.toUpperCase() || thisTag == item.toUpperCase()){
                    isExcludeTag = true;
                }
            });
            excludeClass.forEach(function(item){
                if( "."+tagClass == item || "."+thisTagClass == item){
                    isExcludeTagClass = true;
                }
            });
            excludeId.forEach(function(item){
                if( "#"+tagId == item || "#"+thisTagId == item){
                    isExcludeTagId = true;
                }
            });

            // console.log("isExcludeTag:"+isExcludeTag);
            // console.log("isExcludeTagClass:"+isExcludeTagClass);
            // console.log("isExcludeTagId:"+isExcludeTagId);

            if( !isExcludeTag && !isExcludeTagClass && !isExcludeTagId){
                preventFun();
            }

        };

        window.document.addEventListener("touchstart",function(event){
            preventDefault(event);
        });

        window.document.addEventListener("touchmove",function(event){
            preventDefault(event);
        });

        window.document.addEventListener("touchend",function(event){
            preventDefault(event);
        });

        window.document.addEventListener("mousedown",function(event){
            preventDefault(event);
        });

        window.document.addEventListener("mousemove",function(event){
            preventDefault(event);
        });
    }
};