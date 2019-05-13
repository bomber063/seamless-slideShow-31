# seamless-slideShow-31




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
