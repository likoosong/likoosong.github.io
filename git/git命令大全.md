Git 是一个分布式版本控制系统，广泛用于软件开发中。以下是一些常用的 Git 命令及其功能：

## 配置命令

* git config --global user.name "Your Name"：设置全局用户名。

* git config --global user.email "your.email@example.com"：设置全局用户邮箱。

* git config --list：查看当前配置。

## 初始化与克隆

* git init：在当前目录初始化一个新的 Git 仓库。

* git clone <repository_url>：克隆一个远程仓库到本地。

## 基本操作

- git add <file>：将文件添加到暂存区。

- git commit -m "commit message"：提交暂存区的文件到本地仓库。

- git status：查看当前工作区状态。

- git diff：查看工作区与暂存区的差异。

- git log：查看提交历史。

- git show <commit>：查看某个提交的详细信息。

## 分支管理

- git branch：列出所有分支。

- git branch <branch_name>：创建新分支。

- git checkout <branch_name>：切换到指定分支。

- git checkout -b <branch_name>：创建并切换到新分支。

- git merge <branch_name>：将指定分支合并到当前分支。

- git branch -d <branch_name>：删除分支。

## 远程操作

- git remote add origin <repository_url>：添加远程仓库。

- git remote -v：查看远程仓库信息。

- git fetch：从远程仓库获取最新数据。

- git pull：从远程仓库拉取并合并到当前分支。

- git push origin <branch_name>：将本地分支推送到远程仓库。

## 撤销操作

- git reset <file>：将文件从暂存区移除，但不改变工作区。

- git reset --hard <commit>：回滚到指定提交，并丢弃之后的所有更改。

- git revert <commit>：创建一个新的提交来撤销指定提交的更改。

- git checkout -- <file>：丢弃工作区的更改，恢复到暂存区或最后一次提交的状态。

## 标签管理

- git tag：列出所有标签。

- git tag <tag_name>：创建轻量标签。

- git tag -a <tag_name> -m "tag message"：创建带注释的标签。

- git push origin <tag_name>：推送标签到远程仓库。

- git tag -d <tag_name>：删除本地标签。

- git push origin --delete <tag_name>：删除远程标签。

## 其他命令

- git stash：将当前工作区的更改暂存起来。

- git stash pop：恢复暂存的更改并删除暂存记录。

- git clean：清理未跟踪的文件。

- git rebase：变基操作，将当前分支的提交应用到另一个分支上。

- git cherry-pick <commit>：将指定提交应用到当前分支。

## 高级操作

- git reflog：查看引用日志，用于恢复丢失的提交。

- git bisect：二分查找，用于定位引入错误的提交。

- git submodule：管理子模块。

- git worktree：管理多个工作树。

## 配置别名

- git config --global alias.<alias_name> <command>：为常用命令创建别名。

这些命令涵盖了 Git 的大部分常用功能。根据具体需求，你可以组合使用这些命令来管理你的代码仓库。