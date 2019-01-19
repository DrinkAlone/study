//创建画板
class Table{
    constructor(el){
        this.table =document.querySelector(el);
        this.mousePoint={};
        this.boxList=[];
        this.currentBox = null;
        this.isResize =false;
        this.bindEvent()
    }
    bindEvent(){
        this.table.addEventListener("mousedown",(e)=>{
            if(e.target !==this.table) return;
            this.isResize =true;
            this.mousePoint = {x:e.clientX,y:e.clientY};
            this.currentBox = new SelecBox(this.mousePoint);
            this.currentBox.addTo(this.table);
            this.boxList.push(this.currentBox)
        });
        this.table.addEventListener("mousemove",(e)=>{
            if(!this.isResize) return;
            
            this.currentBox.render(this.mousePoint,{x:e.clientX,y:e.clientY})
        });
        this.table.addEventListener("mouseup",()=>{
            this.currentBox =null;
            this.isResize = false
        })
    }
}
//创建盒子
class SelecBox{
    constructor(json){
        this.startPoint ={x:json.x,y:json.y};
        this.init()
    }
    init(){
        this.box = document.createElement("div");
        this.box.className = "selec-box";
        this.box.style.left= this.startPoint.x+"px";
        this.box.style.top= this.startPoint.y+"px"

    }
    //盒子添加地方
    addTo(el){
        el.appendChild(this.box)
    }
    //盒子大小
    render(start,end){
        this.box.style.width=Math.abs(start.x-end.x)+"px";
        this.box.style.height=Math.abs(start.y-end.y)+"px";
        this.box.style.left= Math.min(start.x,end.x)+"px";
        this.box.style.top= Math.min(start.y,end.y)+"px"

    }
}