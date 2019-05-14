let n
init()//初始化

//下面的就是每个1秒无缝轮播的核心代码
setInterval(() => {
        leave(getImage(n)).
        one('transitionend', function (e) {
            enter( $(e.currentTarget))
        })
        current(getImage(n+1))
        n=n+1
}, 2000);

//获取到对应的n的图片
function getImage(fn){
    return $(`.imgs>img:nth-child(${getn(fn)})`)
}

//获取到n和n+1的函数
function getn(fn){
    if(fn>5){
        fn=fn%5
        if(fn%5===0){
            fn=5
        }
    }
    return fn
}

//初始化函数
function init(){
    n=1
    $(`.imgs>img:nth-child(${n})`).addClass('current')
    // $(getn(fn)).addClass('current')
    .siblings().addClass('enter')
}
//离开的状态
function leave($leave){
    return $leave.removeClass('current enter').addClass('leave')
}
//准备进入的状态
function enter($enter){
    return $enter.removeClass('leave current').addClass('enter')
}
//呈现出来的当前状态
function current($current){
    return $current.removeClass('enter leave').addClass('current')
}


