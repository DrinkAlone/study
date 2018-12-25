let boxStyle ={
    cover:{
        position:"absolute",
        left:"0px",
        top:"0px",
        width:"100%",
        height:"100%",
        backgroundColor:"#abcdef",
        opacity:1,
        zIndex:999
    },
    main:{
        overflow:"hidden",
        position:"absolute",
        left:"0px",
        top:"0px",
        right:"0px",
        bottom:"0px",
        margin:"auto",
        width:"500px",
        height:"300px",
        backgroundColor: "#fff",
        opacity:1
    },
    close:{
        position:"absolute",
        top:"10px",
        right:"10px",
        width:"30px",
        height:"30px",
        background:"url('./close.jpg') no-repeat center center /cover",
        cursor:"pointer",
        transition:"1s"
    },
    btn:{
        position:"absolute",
        left:"50px",
        top:"250px",
        width:"100px",
        height:"40px",
        color:"#fff",
        lineHeight:"40px",
        textAlign:"center",
        backgroundColor:"rgba(33,44,55)",
        cursor:"pointer",
        userSelect:"none",
    },
    diyStyle:{
        position:"absolute",
        left:"50px",
        top:"50px",
        width:"400px",
        height:"180px",
        backgroundColor:"rgba(33,44,55,.3)"
    }
};
class CreatBox{
    constructor(type,obj={}){
        this.boxtype = type;
        this.privateStyle=boxStyle[this.boxtype];
        this.creatNode();
        this.closeBox();
        this.creatNode(this.privateStyle,obj)
        //this.animation(this.boxtype)

    }
    //生成一个节点
    creatNode(json,obj={}){
        this.el=document.createElement("div");
        this.setStyle(json,obj);
        return this
    }
    //添加节点到HTML中
    addTo(target){
        target.appendChild(this.el);
        return this
    }
    //添加节点内容
    addContent(str,url){
        this.el.innerHTML = str;
        return this
    }
    //设置样式
    setStyle(json,obj={}){
        Object.assign(this.el.style,json,obj);
        return this
    }
    //绑定事件
    bindEvent(type,cb=()=>{},el=this.el){
        this.el[type] = cb.bind(el);
        return this
    }
    //运动动画
    animation(type){
        Move(this.el,1000,type)
    }
    //关闭节点
    closeBox(){
        this.el.style.display ="none"
    }
    //删除节点
    removeNode(){
        this.el.parentNode.removeChild(this.el)
    }
}
//实例使用CreatBox
class Dialog {
    constructor(type) {
        this.btnlist = [];
        this.add()
    }

    //添加实例具体功能
    add() {
        this.cover = new CreatBox("cover").addTo(document.body);
        this.main = new CreatBox("main").addTo(this.cover.el);
        this.title = new CreatBox("diyStyle")
            .addTo(this.main.el)
            .addContent("未满18岁禁止观看");

        this.close = new CreatBox("close")
            .addTo(this.main.el)
            .bindEvent("onclick",()=>this.closeNode());
        this.btn1 = new CreatBox("btn")
            .addTo(this.main.el)
            .addContent("我满了")
            .bindEvent("onclick", () => this.closeNode());
        this.btn2 = new CreatBox("btn", {left: "350px"})
            .addTo(this.main.el)
            .addContent("我没满")
            .bindEvent("onclick", () => window.close())
    }

    //关闭整个实例
    closeNode() {
        this.cover.el.parentNode.removeChild(this.cover.el)
    }

    //自己添加的按钮
    addBtn(type) {
        this.btnlist.push(new CreatBox(type))
    }
}