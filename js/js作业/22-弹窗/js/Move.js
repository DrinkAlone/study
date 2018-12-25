function getStyle( box ){
    return box.currentStyle || getComputedStyle( box )
}
function Move(box,time,json,cb){
    //获取当前时间
    let t0 = new Date();
    //获取初始状态
    let startValue = {};
    let startStyle = getStyle(box);
    //速度 =(json -startValue)/time
    let speedValue = {};
    for(let i in json){
        startValue[i]=startStyle[i];
        speedValue[i] =(parseFloat(json[i]) - parseFloat(startValue[i]))/time;
        console.log(speedValue[i]);
    }


    function run(){
        let t1 = new Date();
        for(let i in speedValue){
            let value = parseFloat(startValue[i])+(t1-t0)*speedValue[i];
            box.style[i] = value+startValue[i].match(/p?x?$/g)[0]
            //console.log(startValue[i].match(/p?x?$/g));
        }
        if(t1-t0 >= time){
            cancelAnimationFrame(run);//把函数名传入就可以了
            // clearInterval(timer)
            cb && cb.call( box )
        }else{
            requestAnimationFrame( run )
        }
    }
    run()
}
{}








