init()//初始化

var s = 3
var n
//下面的就是每个1秒无缝轮播的核心代码
setInterval(() => {
        n = (s % 3)+1
        
        leave($(`.imgs>img:nth-child(${n})`)).
        one('transitionend', function (e) {
            enter( $(e.currentTarget))
        })
    if (n + 1 > 3) {
        n = 0
        current($(`.imgs>img:nth-child(${n + 1})`))
    }

    if (n + 1 <= 3) {
        current($(`.imgs>img:nth-child(${n + 1})`))
    }

    s = s + 1
}, 2000);

//初始化函数
function init(){
    $('.imgs>img:nth-child(1)').addClass('current')
    $('.imgs>img:nth-child(2)').addClass('enter')
    $('.imgs>img:nth-child(3)').addClass('enter')
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


