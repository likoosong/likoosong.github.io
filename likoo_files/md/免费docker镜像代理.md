
**自建docker镜像源**  

```
https://docker.registry.cyou
https://docker-cf.registry.cyou
```
  
**使用方式：  
1.官方镜像路径前面加域名  

```
docker pull docker.registry.cyou/stilleshan/frpc:latest
docker pull docker.registry.cyou/library/nginx:stable-alpine3.19-perl
```
  
**2.设置镜像加速  
修改文件 /etc/docker/daemon.json(不存在则创建)  

```
{  
"registry-mirrors": [  
"https://docker.registry.cyou",  
"https://docker-cf.registry.cyou"  
  
]  
}
```


修改完成之后重启docker服务即可

# 第三方Docker官方镜像服务

### 白嫖哥镜像服务 [https://t.me/bestcfipas/1900](https://t.me/bestcfipas/1900)
```shell
docker.registry.cyou
docker-cf.registry.cyou
```

### Free镜像服务 [https://t.me/zero_free/80](https://t.me/zero_free/80)
```shell
dockercf.jsdelivr.fyi
docker.jsdelivr.fyi
dockertest.jsdelivr.fyi
```