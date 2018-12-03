
// console.log(box)
function getStyle( el ){
  return el.currentStyle || getComputedStyle(el)
}

function calc(from = {}, to = {}, cb){
  // 返回一个对象，cb方式计算，格式和from一样
  // 
  let obj = {}
  for(let i in from){
    if(typeof from[i] == 'object'){
      obj[i] = calc(from[i], to[i], cb)
    }else{
      obj[i] = cb(from[i],to[i])
    }
  }
  return obj 
}
function move(el, starjson, endjson, time, cb){
  let t0 = new Date()
  let speedjson = calc(starjson, endjson, (x, y)=> (y-x)/time)
  // console.log(speedjson)
  let unit = getStyle(el)
  function run(){
    let dt = new Date() - t0//经过的时间
    if( dt > time ){
      currentjson = calc(endjson, endjson, (x, y)=> y)
      cb&&cb.call(el)
    }else{
      currentjson = calc(starjson, speedjson, (x, y)=> x + y*dt)
      requestAnimationFrame(run)
    }
    render(el.style, unit, currentjson)
  }
  run()
}
function relaceNum(str, num){
  return str.replace(parseFloat(str), num)
}
function relace$(str, num){
  return str.replace("$", num)
}

const path = {
  transform:{
    rotate: "rotate($deg) ",
    scale: "scale($) ",
    rotateX: "rotateX($deg) ",
    rotateY: "rotateY($deg) ",
    rotateZ: "rotateZ($deg) ",
  }
}


function render(el, unit, json){
  for(let i in json){
    if(typeof json[i] == 'object'){
      let sumstr = ""
      for(let j in json[i]){
        sumstr+= relace$(path[i][j], json[i][j])
      }
      el[i] = sumstr
    }else{
      el[i] = relaceNum(unit[i], json[i])
    }
  }
}



