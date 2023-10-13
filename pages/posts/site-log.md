---
title: 站点架设记录
date: 2023-09-01
updated: 2023-09-01
categories:
  - 技术
tags:
  - valaxy
  - 站点架设
  - 云服务器
# comments: true
draft: true
hide: true
---

<p style="text-align:right"><b>作者：刘宽</b></p>

## 本站概述

本站 (`www.glimmeru.cc`) 目前是部署在 [阿里云](https://www.aliyun.com/) 的一台云服务器上，使用的是 [Nginx](https://nginx.org/) + [Valaxy](https://valaxy.site/) 的架构，域名由购置自阿里云并已经备案。

> ~~据作者回忆，因为他觉得 valaxy 很好看，所以当时就决定用 valaxy 做架构x~~

理论上讲，想要在云服务器上跑起一个**静态**站点，往往只需要 `Nginx/Apache` + `HTML/CSS/Javascript` 即可实现，同时，绝大多数静态站点本身不跑在云服务器上而是部署到一些平台上，诸如 [Vercel](https://vercel.com), [GitHub](https://github.com) 等。鉴于此，在后文的论述时，我也会讲解如何把静态内容部署到一些平台上。

当然，本站在架设时出于扩展性的考虑，本站的服务器在配置时，架构并不限于 `Nginx` + `HTML/CSS/Javascript`，而是使用了 `LNMP`，`Node.js` 等等配置。如果对本站用到的其他架构感兴趣，可移步至 chillcicada 的一篇 [博文](https://chillcicada.com/archives/instruction-set) 进行阅读。

有关站点更新日志的内容，请阅读 <a href="../about/site.html" target="_blank">更新日志</a>。

## 架构站点

### 云服务器

目前国内主流的云服务商为 阿里云、腾讯云、华为云 三大系，不过华为云作为 to a/b 端并不适合个人和小群体架设站点，因此个人推荐阿里云和腾讯云，此外，市面上也有很多小型的云服务器 / VBS 供应商，在数据安全能得到保障的情况下，采用何种服务器环境都是可以的。

#### 连接云服务器

今年二月 NETSARANG 公司为其的产品 Xshell 和 Xftp 推出了面向家庭和学生的完全免费版，因而在 Windows 平台上我推荐用这两款软件进行连接。当然，连接云服务器的方法和软件很多，除了一些专门的软件如 MobaXterm，还有一些 IDE 也可以进行连接，诸如 VSCode，PyCharm 等等，甚至，如果你愿意折腾的话，你甚至可以在 PowerShell，Terminal 等终端控制台上进行连接。

Xshell 和 Xftp 官网地址：https://www.xshell.com/ 。下载安装好后，打开 Xshell，完成初次注册后进入

#### 安装环境

##### 安装基础环境

切换到 `root` 账户（直接以 `root` 身份登入时无需考虑）

```bash
sudo su root
```

> 输入密码时不会显示z

更新系统基础环境

```bash
apt update && apt upgrade -y
```

安装基础软件

```bash
apt install -y wget git zip curl
```

清理一下垃圾

```bash
apt autoremove
```

退出 `root` 账户，当然也可以选择一直登着 `root` 账户

```bash
exit # logout from ssh, or `ctrl + D`
# or logout from root, {username} 为你的普通用户名
# su {username} && exit
```

##### 安装 Nginx

> 需要 `root` 权限，非 `root` 用户在指令前加上 `sudo` 即可，或者可以直接切换到 `root` 账户

添加 Nginx 的 Key

```bash
curl -sL https://nginx.org/keys/nginx_signing.key | apt-key add -
```

添加 Nginx 的源

```bash
```

### 第三方平台

## Todo

- ~~将站点迁移到 Github 上，然后退休跑路x~~

~~Tips: 其实那个 chillcicada 就是作者本人x，所以没有版权问题z~~
