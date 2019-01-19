class ajax{
    constructor(json){
        this.xhr = new XMLHttpRequest();
        this.url = json.url;
        this.type = json.type||"get";
        this.data = json.data||null;
        this.sendData = "";
        this.success = json.success||null; //没有回调函数就不打印
        this.join(this.data);
        this.openEvent(this.type,this.url);
        this.chageEvent(this.xhr)
    }
    //遍历this.data  返回发送数据
    join(data){
        let str = "";
        for(let i in data){
            str += i+"="+data[i]+"&"
        }
        this.sendData = str.replace(/&$/, "")
    }
    //发送数据事件
    openEvent(type,url){
        if(type === "get"){
            this.xhr.open(type,url+"?"+this.sendData);
            this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            this.xhr.send(null)
        }else {
            this.xhr.open(type,url);
            this.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            this.xhr.send(this.sendData)
        }
    }
    //状态改变事件
    chageEvent(xhr){
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4&&xhr.status===200) {
                this.callback(xhr.response)//执行回调  传入后台返回的参数
            }
        }
    }
    //回调函数  json没有回调就不执行
    callback(data){
        if(this.success===null) return;
        this.success(data)
    }
}