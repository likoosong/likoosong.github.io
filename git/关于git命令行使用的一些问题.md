#### 关于Git简单配置和绑定key提交的问题

[笔记](https://note.youdao.com/s/5BLLoYtA)

#### 改变提交方式的方法HTTP改SSH

检查远程仓库的方式(http)

```
$ git remote -v
origin  https://github.com/likoosong/likoosong.git (fetch)
origin  https://github.com/likoosong/likoosong.git (push)
```

***如果是http方式即删除，改用ssh方式***

```
$ git remote rm origin
```

检查已经删除，空了

```
$ git remote -v
```

更改为ssh

```
$ git remote add origin git@github.com:likoosong/likoosong.git
```

测试ssh是否可以正常连接

```
$ ssh -T git@github.com
The authenticity of host 'github.com (::1)' can't be established.
ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? y
Please type 'yes', 'no' or the fingerprint: yes
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi likoosong! You've successfully authenticated, but GitHub does not provide shell access.
```

再次检查远程仓库的方式

```
$ git remote -v
origin  git@github.com:likoosong/likoosong.git (fetch)
origin  git@github.com:likoosong/likoosong.git (push)
```

```
进行一些常规的操作，删除文件重新建了一个文件进行提交测试等等......
$ git status
On branch main
nothing to commit, working tree clean

$ ls
README.md  ls.json  test.txt

$ rm -rf *.txt

$ touch test.txt

$ echo "这是我的第一次git提交测试" > test.txt

$ cat test.txt
这是我的第一次git提交测试

$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   test.txt
再一次修改测试文件 test.txt
```

再次commit 后 push 成功

```
[main 5ead372] 再一次修改测试文件 test.txt
 1 file changed, 1 insertion(+)
$ git status
On branch main
nothing to commit, working tree clean

$ git push origin main
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 8 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (12/12), 1.17 KiB | 1.17 MiB/s, done.
Total 12 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), done.
To github.com:likoosong/likoosong.git
   f06166a..5ead372  main -> main
```

不知道什么原因，别人的仓库都是master，我的为什么是main

```
git config --global credential.helper store
```

这种方式没有测试。不过，家中的一台win10的笔电没有这种问题，不知道是什么原因，等有机会重新安装或利用虚拟机再测试一次。
