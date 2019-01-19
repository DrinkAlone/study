//(function (){
    let oWrap = document.getElementById("wrap");

//设置开始画面
    let start = new createBox("cover").addTo(oWrap);
//设置游戏画面
    let game = new createBox("cover",{display:"none"}).addTo(oWrap);
//设置结束画面
    let over = new createBox("cover",{display:"none"}).addTo(oWrap);
//设置名称
    let startTitle = new createBox("main").addTo(start.el);
    let startContent =new createBox("btn",
        {width:"100%",
            height: "100%",
            lineHeight:"256px",
            fontSize:"30px",
            color:"#fff",
            cursor:"default"
        });
    startContent.addContent("飞机大战V1.0").addTo(startTitle.el);
//设置模式
    let modeSelect = new createBox("main",{top:"256px"}).addTo(start.el);
        simpleMode = new createBox("btn"),
        commonMode = new createBox("btn",{top:"70px"}),
        hardMode   = new createBox("btn",{top:"140px"}),
        godMode = new createBox("btn",{top:"210px"});
    let modeList = [simpleMode.el,commonMode.el,hardMode.el,godMode.el];
//添加到页面中
    simpleMode.addContent("简单","#33ff12").addTo(modeSelect.el);
    commonMode.addContent("普通","#1a81ff").addTo(modeSelect.el);
    hardMode.addContent("困难","#ff0d21").addTo(modeSelect.el);
    godMode.addContent("充钱就能变强","#ffed06").addTo(modeSelect.el);
//添加事件
    modeList.forEach(function(el,index){
        el.addEventListener("click",function(e){
            startGame(index+1);
            //console.log(e);
            addPlane("pink",{x:e.pageX,y:e.pageY},index);
            //addBullet({x:e.pageX,y:e.pageY})
            addEnemy(index)
        })
    });

//开始游戏
    function startGame(modeNum){
        startShow(modeNum)
    }
//开始游戏页面切换
    function startShow(modeNum) {
        start.el.style.display = "none";
        game.el.style.display = "block";
        game.el.style.background = `url("img/bg_${modeNum}.jpg")`;
        game.el.style.cursor = "none";
        over.el.style.display = "none";
    }
    //添加我军飞机
    function addPlane(type,pos,index,obj) {
        let oPlane = new createPlane(type,pos,obj).addTo(game.el);
        let position = {};
        position.x = pos.x - oWrap.offsetLeft - oPlane.width/2;
        position.y = pos.y-oWrap.offsetTop -oPlane.height/2;
        oPlane.rePosition(position);
        document.addEventListener("mousemove",planeMove);
        //我军飞机的移动
        function planeMove(e) {

            //获取飞机运动时，最大最小值的限制
            let topMin = 0,
                topMax = oWrap.offsetHeight - oPlane.height/2,
                leftMin = -(oPlane.width/2),
                leftMax = oWrap.offsetWidth - oPlane.width/2;
            //飞机新位置并且限制
            let movePos = {};
                movePos.x = e.pageX - oWrap.offsetLeft - oPlane.width/2;
                movePos.y = e.pageY - oWrap.offsetTop -oPlane.height/2;
                movePos.x = Math.min(movePos.x,leftMax);
                movePos.x = Math.max(movePos.x,leftMin);
                movePos.y = Math.min(movePos.y,topMax);
                movePos.y = Math.max(movePos.y,topMin);
            //重新赋值
            oPlane.rePosition(movePos)
        }

        //console.log(oPlane);
        addBullet(oPlane,index)
    }
//添加我军子弹
    function addBullet(oplane,index) {
        let time = [70,100,150,50][index];
        !function createBiu(){
            let oBiu = new createBullet("line");
            let pos = {};
            pos.x = oplane.left+(oplane.width-oBiu.width)/2;
            pos.y = oplane.top - oBiu.height;
            oBiu.bulletPos(pos).addTo(game.el);
            //子弹运动
            //console.log(oBiu);

            function m(){
                oBiu.top -= oBiu.speed;
                oBiu.el.style.top = oBiu.top + 'px';
                if( oBiu.top <= -oBiu.height ){
                    game.el.removeChild(oBiu.el);
                    oBiu = null
                }else{
                    requestAnimationFrame(m);
                }
            }
            requestAnimationFrame(m);
            //持续生成子弹
            setTimeout(createBiu,time);
        }()

    }
    //生成敌军
    function addEnemy(index) {
        let time = [400,300,200,200][index];
        let number = 0;//敌军计数
        !function createEnemy() {
            let oEnemy = {};
            number++;
            if(number%5){
                oEnemy = new createPlane("small")
            }else {
                oEnemy = new createPlane("big")
            }
            console.log(oEnemy);
            let pos = {};
                pos.y = -oEnemy.height;
                pos.x = Math.floor(Math.random()*oWrap.offsetWidth - oEnemy.width/2);
                oEnemy.rePosition(pos).addTo(game.el);
            //给飞机随机运动速度
            oEnemy.speed = Math.floor(Math.random()*10+2);
            function m(){
                oEnemy.top += oEnemy.speed;
                oEnemy.el.style.top = oEnemy.top + 'px';

                if( oEnemy.top >= oWrap.offsetHeight){
                    game.el.removeChild(oEnemy.el);
                    oEnemy = null
                }else{
                    requestAnimationFrame(m);
                }
            }
            requestAnimationFrame(m);
            setTimeout(createEnemy , time);
        }()
    }




















//})()
