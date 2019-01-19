let boxStyle ={
    cover:{
        position:"absolute",
        left:"0px",
        top:"0px",
        width:"100%",
        height:"100%",
        background:"url('./img/bg_1.jpg')"
    },
    main:{
        position:"absolute",
        left:"0px",
        top:"0px",
        width:"100%",
        height: "256px",
        textAlign:"center",
    },
    btn:{
        position:"absolute",
        left:"0px",
        top:"0px",
        right:"0px",
        // bottom:"0px",
        margin:"auto",
        width:"150px",
        height: "35px",
        textAlign:"center",
        lineHeight:"35px",
        fontSize:"16px",
        color:"#000",
        cursor:"pointer",
        userSelect:"none"
    }
};
//创建盒子
class createBox {
    constructor(type, obj = {}) {
        this.type = type;
        this.privatestyle = boxStyle[this.type];
        this.modeNum = null;
        this.creatNode(this.privatestyle, obj)
    }

    //生成一个节点
    creatNode(json, obj = {}) {
        this.el = document.createElement("div");
        this.render(json, obj);
        return this

    }

    //设置样式
    render(json, obj = {}) {
        Object.assign(this.el.style, json, obj);
        return this
    }

    //添加节点内容,背景颜色
    addContent(str, url) {
        this.el.innerHTML = str;
        this.el.style.background = url;
        return this
    }

    //添加到
    addTo(target) {
        target.appendChild(this.el);
        return this
    }

    //关闭节点
    closeNode() {
        this.el.style.display = "none";
        return this
    }

    //删除节点
    removeNode() {
        this.el.parentNode.removeChild(this.el)
    }
    //设置序号
    setNum(num){
        this.modeNum = num;
        return this
    }
    //绑定事件
    bindEvent(type, callback = () => {
    }, el = this.el) {
        this.el.addEventListener(type, callback.bind(el));
        return this
    }

}


