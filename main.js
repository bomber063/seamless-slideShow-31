$('.imgs>img:nth-child(1)').addClass('current')
$('.imgs>img:nth-child(2)').addClass('enter')
$('.imgs>img:nth-child(3)').addClass('enter')

// var s = 3
// var n
// setInterval(() => {
//         n = (s % 3)+1
    
//     $(`.imgs>img:nth-child(${n})`).removeClass('current enter').addClass('leave').
//         one('transitionend', function (e) {
//             $(e.currentTarget).removeClass('leave current').addClass('enter')//这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
//             // console.log(e.currentTarget)
//             //removeClass()可以同时移除多个class
//         })
//     if (n + 1 > 3) {
//         n = 0
//         $(`.imgs>img:nth-child(${n + 1})`).removeClass('enter leave').addClass('current')
//     }

//     if (n + 1 <= 3) {
//         $(`.imgs>img:nth-child(${n + 1})`).removeClass('enter leave').addClass('current')
//     }

//     s = s + 1
// }, 1000);

setTimeout(() => {
    $('.imgs>img:nth-child(1)').removeClass('current enter').addClass('leave').
    one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave current').addClass('enter')//这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
        console.log(e.currentTarget)//removeClass()可以同时移除多个class
    })
    $('.imgs>img:nth-child(2)').removeClass('enter current').addClass('current')
}, 2000)

setTimeout(() => {
    $('.imgs>img:nth-child(2)').removeClass('current enter').addClass('leave').
    one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave current').addClass('enter')//这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
        console.log(e.currentTarget)
    })
    $('.imgs>img:nth-child(3)').removeClass('enter current').addClass('current')
}, 4000)

setTimeout(() => {
    $('.imgs>img:nth-child(3)').removeClass('current enter').addClass('leave').
    one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave current').addClass('enter')//这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
        console.log(e.currentTarget)
    })
    $('.imgs>img:nth-child(1)').removeClass('enter current').addClass('current')
}, 6000)

setTimeout(() => {
    $('.imgs>img:nth-child(1)').removeClass('current enter').addClass('leave').
    one('transitionend',function(e){
        $(e.currentTarget).removeClass('current leave').addClass('enter')//这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
        console.log(e.currentTarget)//removeClass()可以同时移除多个class
    })
    $('.imgs>img:nth-child(2)').removeClass('enter current').addClass('current')
}, 8000)




