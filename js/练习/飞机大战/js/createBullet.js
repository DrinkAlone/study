let bulletStyle ={
    line:{
        position:"absolute",
        width:"10px",
        height:"20px",
        backgroundSize:"cover",
        backgroundImage:"url('./img/fire.png')"
    }
};
//创建子弹
/*1.子弹的类型 包含敌军可能的子弹样式    位置  大小   样式
2.子弹的方向  从上到下  还是从下到上
3.子弹添加到谁身上
4.子弹的等级
*   子弹的发射速度   子弹的威力
* */
class createBullet{
    constructor(type) {
        this.type = type;
        this.width = parseInt(bulletStyle[this.type].width);
        this.height = parseInt(bulletStyle[this.type].height);
        this.left = 0;
        this.top = 0;
        this.privatestyle = bulletStyle[this.type];
        this.init(this.privatestyle)
    }
    //自带的属性
    init(type){
        this.el = document.createElement("div");
        this.render(type);
        this.bulletLevel(this.width)
    }
    //渲染子弹
    render(type){
        Object.assign(this.el.style,type);
        return this
    }
    //添加到谁身上
    addTo(target){
        target.appendChild(this.el);
        return this
    }
    //删除子弹
    removeBullet(){
        this.el.parentNode.removeChild(this.el)
    }
    //子弹的速度和威力
    bulletLevel(speed,level){
        this.speed = speed;
        this.level = level;
        return this
    }
    //子弹的位置
    bulletPos(position){
        this.left = position.x;
        this.top = position.y;
        this.el.style.left = this.left +"px";
        this.el.style.top = this.top +"px";
        return this
    }
    //子弹的移动
    bulletMove(){
        this.top -=this.speed;
        this.el.style.top = this.top +"px"
    }
}
