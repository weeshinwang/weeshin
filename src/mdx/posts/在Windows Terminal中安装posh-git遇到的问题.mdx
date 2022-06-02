---
title: "在windows-terminal中安装posh-git遇到的问题"
displayTitle: "在Windows Terminal 中安装 posh Git 遇到的问题"
date: 2021-10-10T21:17:01+08:00
lastmod: 2021-10-10T21:17:01+08:00
tags: [git, plugin]
categories: [效率与工具]
type: "post"
draft: false
---

今天在 Code With Mosh 的 Git 课程中了解到，在 Windows 系统中可以安装[`posh-git`](https://github.com/dahlbyk/posh-git) 插件，能在 Powershell 上直接显示 `git status` 的一些摘要信息。

## 初步尝试

于是我按照 GitHub 上提供的安装教程进行了安装，但是始终无法在 Powershell 中成功显示 git 状态信息。
我进行了以下操作：

1. 使用 Scoop 进行安装：
   - 使用命令`scoop install posh-git` ；
   - 使用命令`Add-PoshGitToProfile`将`Import-Module posh-git`写入 profile 中；
   - 使用`notepad $PROFILE` 检查 profile 文件内是否正确导入；
   - 修改 Profile 中 `import` 语句为`Import-Module dir-where-posh-git-installed\posh-git.psd1`
2. 上述操作并无效果，尝试用 Scoop 卸载`posh-git`，并使用 Powershell 内置的 PowerShellGet 进行安装：`Install-Module posh-git -Scope CurrentUser -Force`。重复上述的操作之后，发现还是未能成功。

## 问题的解决

幸运的是在 [一个 GitHub issue](https://github.com/dahlbyk/posh-git/issues/858) 搜索到了类似的问题，才意识到有可能是我使用的 Powershell 7 使用了不同的 Profile 文件路径。

做了几次尝试，找到了解决问题的办法：
将 `Import-Module posh-git` 语句添加入以下路径的 Profile 文件中
`C:\Program Files\PowerShell\7\profile.ps1`

{{< image src="/imgs/posh-git.webp">}}

完美解决问题~
