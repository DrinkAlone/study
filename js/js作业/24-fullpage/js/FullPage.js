const path ={
    colorList:[],
    direction:"vertical",
    page:0,
    time:1000,
    canMove:true,
    callback(){}
};
class FullPage{
    constructor(json){
        Object.assign(this,path,json);
        // this.colorList=this.colorList||[]//没有就不设置
        // this.direction= this.direction||"vertical"//默认垂直方向
        // this.page = 0//当前显示
        // this.canMove =true
        // this.time=this.time||1000//动画时间
        this.init()


    }
    init(){
        //框架盒子获取
        this.el=document.getElementById(this.el);
        this.pagelist =this.el.querySelectorAll(".pagelist");
        this.width =this.el.clientWidth;
        this.height=this.el.clientHeight;
        this.length=this.pagelist.length;
        this.renderColor(this.colorList);
        this.moveTo(this.page%this.length);
        this.register()

    }
    //设置颜色
    renderColor(colorArray){
        this.pagelist.forEach((item,i)=>{
            item.style.backgroundColor =colorArray[i]
        });
        return this
    }
    //切换页数
    moveTo(num){
        if(this.direction==="vertical"){
            this.pagelist.forEach((item,i)=>{
                item.style.top = (i-num)*this.height+"px"
            })
        }
        if(this.direction==="horizontal"){
            this.pagelist.forEach((item,i)=>{
                item.style.left = (i-num)*this.width+"px"
            })
        }
    }
    //注册事件
    register(){
        this.el.addEventListener("mousewheel",(e)=>{
            //1.修改this.page
            //2.render  this.page
            if(!this.canMove) return;
            this.canMove= false;
            setTimeout(()=>{
                this.canMove= true;
                this.callback()
            },this.time);
            e.wheelDeltaY<0?this.page++:this.page--;
            if(this.page<0) this.page=this.length-1;
            if(this.page>this.length-1) this.page =0;
            this.moveTo(this.page%this.length)
        })
    }
}
