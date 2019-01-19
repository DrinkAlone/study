let planeStyle ={
    pink:{
        position:"absolute",
        width:"50px",
        height:"50px",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:"url('./img/plane_0.png')",
    },
    blue:{
        position:"absolute",
        width:"50px",
        height:"50px",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:"url('./img/plane_1.png')",

    },
    small:{
        position:"absolute",
        width:"50px",
        height:"40px",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:"url('./img/enemy_small.png')",
    },
    big:{
        position:"absolute",
        width:"130px",
        height:"100px",
        backgroundPosition:"center center",
        backgroundSize:"cover",
        backgroundImage:"url('./img/enemy_big.png')",
    }
};

//创建战机
class createPlane{
    constructor(type,obj={}){
        this.type = type;
        this.width = parseInt(planeStyle[this.type].width);
        this.height = parseInt(planeStyle[this.type].height);
        this.left = 0;
        this.top = 0;
        this.speed = 0;
        this.privatestyle = planeStyle[this.type];
        this.createNode(this.privatestyle,obj)
        //this.rePosition(position)
    }
    //创建节点
    createNode(json,obj={}){
        this.el= document.createElement("div");
        this.render(json,obj);
        return this
    }
    //设置样式
    render(json, obj = {}) {
        Object.assign(this.el.style, json, obj);
        return this
    }
    //设置位置
    rePosition(position){
        this.left =position.x;
        this.top = position.y;
        this.el.style.left = this.left+"px";
        this.el.style.top = this.top+"px";
        return this
    }
    //添加到
    addTo(target) {
        target.appendChild(this.el);
        return this
    }
    // //添加子弹
    // addBullet(postion){
    //     this.bullet = new createBullet("line")
    //     this.bullet.addTo(this.el)
    //         .bulletMove(postion)
    // }
    //事件绑定
    bindEvent(){

    }

}
//创建炮弹
// class createBullet {
//     constructor(type,index,obj={}){
//         //子弹的间隔
//         this.time = [100,200,250,50][index]
//         this.type = type
//         this.width = parseInt(bulletStyle[this.type].width)
//         this.height = parseInt(bulletStyle[this.type].height)
//         this.privatestyle = bulletStyle[this.type]
//         this.createNode(this.privatestyle,obj)
//
//     }
//     //创建子弹
//     createNode(json,obj){
//         this.el = document.createElement("div")
//         this.render(json,obj)
//         return this
//     }
//     //设置样式
//     render(json, obj = {}) {
//         Object.assign(this.el.style, json, obj)
//         return this
//     }
//     //添加到
//     addTo(target) {
//         target.appendChild(this.el);
//         return this
//     }
//     //设置位置
//     rePosition(position){
//         this.el.style.left = position.x+"px"
//         this.el.style.top = position.y+"px"
//     }
//     //事件绑定
//     bindEvent(){
//
//     }
// }