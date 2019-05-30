# seamless-slideShow-31

## 自己做的过程用到的部分JQ的API

### removeClass()和addClass()
[addClass()](https://www.jquery123.com/addClass/)对所有匹配的元素可以一次添加多个用空格隔开的样式类名  
[removeClass()](https://www.jquery123.com/removeClass/)对所有匹配的元素可以一次添加多个用空格隔开的样式类名  

```
function enter($enter){
    return $enter.removeClass('leave current').addClass('enter')
}
```

### one()
[one()](https://www.jquery123.com/one/)为元素的事件添加处理函数。处理函数在每个元素上每种事件类型**最多执行一次**。  

```
        leave($(`.imgs>img:nth-child(${n})`)).
        one('transitionend', function (e) {
            enter( $(e.currentTarget))
        })
```

## 自己做的过程犯的低级错误
这里把e.currentTarget错写成了'e.currentTarget'，整了半天才发现错误。  
```
        one('transitionend', function (e) {
            enter( $(e.currentTarget))
            //这里把e.currentTarget写成了'e.currentTarget'，整了半天才发现错误。
            // console.log(e.currentTarget)
            //removeClass()可以同时移除多个class
        })
```

## 原生JS的Transition​Event事件——transitionend
[transitionend](https://developer.mozilla.org/zh-CN/docs/Web/Events/transitionend)  
transitionend 事件会在 CSS transition 结束后触发. 当transition完成前移除transition时，比如移除css的transition-property 属性，事件将不会被触发.如在transition完成前设置  display 为"none"，事件同样不会被触发。

## 模板字符串 or 模板字面量
[模板字符串 or 模板字面量](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)用到反引号``.   
这里用到其实一个用法——就是用一个字符$，加一个大括号{}，来解析一个值，这里如果不用${n + 1}，单独用n+1，会产生三个元素结点，而这里只需要其中一个结点。 
这个属于**ES6的插值法**。  

模板字符串使用反引号 (\` \`) 来代替普通字符串中的用双引号和单引号。模板字符串可以包含特定语法（${expression}）的占位符。占位符中的表达式和周围的文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来，如果一个模板字符串由表达式开头，则该字符串被称为带标签的模板字符串，该表达式通常是一个函数，它会在模板字符串处理后被调用，在输出最终结果前，你都可以通过该函数来对模板字符串进行操作处理。在模版字符串内使用反引号（`）时，需要在它前面加转义符（\）。  

```
    if (n + 1 > 3) {
        n = 0
        current($(`.imgs>img:nth-child(${n + 1})`))
    }//这里用到的反引号``

    if (n + 1 <= 3) {
        current($(`.imgs>img:nth-child(${n + 1})`))
    }//这里不可以让n+1超过3,这里一直都是1,2——2,3——3,1——1,2这样循环。
```
简单的示例  
```
`string text ${expression} string text`

tag `string text ${expression} string text`
```

## 再次对比老师的视频之后

* 发现还有忘记的描述的地方，无缝轮播的布局需要用到**绝对定位**。

* 老师把n的取值12，23，31的循环作为一个函数返回，这样显得代码比较合理
```
function getn(fn){
    if(fn>3){
        fn=fn%3
        if(fn%3===0){
            fn=3
        }
    }
    return fn
}
```
* 通过siblings()函数可以写成一行代码即可
```
function init(){
    n=1
    $(`.imgs>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
```
* 把获取的元素也直接写成了函数
```
function getImage(fn){
    return $(`.imgs>img:nth-child(${getn(fn)})`)
}
```

* 可以通过调整CSS的样式，使得图片可以从左往右，也可以从右往左，从上往下或者从下往上滑动。  

* 发现老师的方法还是存在一些BUG但是，是在速度变慢的时候可以看出来，也就是打开开发者工具，按一下ESC，然后把动画速度调慢就可以看出来了，目前还不知道原因在哪里，不知道如何修复。


## 用过的git
我发现**第一次commit**提交之后，commit的描述写错了，发现根本删除不了，可能**第一次commit**就相当于把整个仓库都删除了吧，所以必须要保留第一次的提交，所以最后我把整个仓库都删除了。并且把本地的.git隐藏文件也删除。重新创建仓库解决。第二次commit就可以开始做各种操作了，这里介绍一个新的操作git rebase(压制)。  

### git rebase
该命令的功能非常强大，可以删除commit，可以合并commit，可以修改commit等等。  
一般就是git rebase加-i(交互式)加一个commit标签（这个作为基底），例如  
`git rebase -i HEAD~3`  
或者  
`git rebase -i 8aa9efb`  
这样就会弹出对应修改窗口

#### rebase 命令
来看看你可以使用 git rebase 执行哪些不同的命令：  
  
* 使用 p 或 pick – 使 commit 保持原样
* 使用 r 或 reword – 保留 commit 的内容，但修改 commit 说明
* 使用 e 或 edit – 保留 commit 的内容，但先不要执行 commit，以便：
1. 添加新内容或文件
2. 删除内容或文件
3. 修改即将 commit 的内容
* 使用 s 或 squash – 将此 commit 的更改结合到之前的 commit 中（列表中位于其上面的 commit ）
* 使用 f 或 fixup – 将此 commit 的更改结合到前一个 commit 中，但删除提交说明
* 使用 x 或 exec – 运行 shell 命令
* 使用 d 或 drop – 删除 commit  
结束之后，如果你使用git push推送到远程仓库，会被拒绝，此时需要使用**强制推送**  
`git push -f`  
最后，建议在变基之前创建一个备份（backup）分支。

# 2019.5.28修复一个Bug
* 在移除这个轮播的页面后，再次回到这个页面会导致一些滚动的异常(当没有看页面的时候，cpu会认为不需要花太精力在该页面上，所以原来0.5秒滚动一次，可能变成1s滚动一次，也有可能是把好几次的状态在移到该页面的时候同时进行变化)，此时就通过离开该页面的时候是轮播停止，回到该页面的时候使轮播继续在离开的位置继续滚动。
* 用到[visibilitychange事件](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event).
* 根据[visibility​State](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState)显示的不同状态，比如hidden或者visible等来判断停止和重新开始滚动。

## 方方老师用的是doucment.hidden
* [doucment.hidden](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/hidden)返回的是true/false。效果其实也是类似的，只是取值不同。

## 此方法无法实现倒着滚动
* 倒着滚动见下一个滚动播放[链接](https://github.com/bomber063/maybe-last-seamless-slideShow-33)。
