(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{601:function(a,t,i){"use strict";i.r(t);var s=i(4),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[i("h1",{attrs:{id:"_7-虚拟环境安装带gui的centos"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-虚拟环境安装带gui的centos"}},[a._v("#")]),a._v(" 7. 虚拟环境安装带GUI的CentOS")]),a._v(" "),i("p",[a._v("想要学习Linux首先肯定需要有一个Linux环境才行啊，“光说不练假把式”，对于个人用户而言，常见的获得Linux的途径无非以下几种：")]),a._v(" "),i("ul",[i("li",[a._v("物理机安装Linux系统；")]),a._v(" "),i("li",[a._v("虚拟机安装Linux系统；")]),a._v(" "),i("li",[a._v("远程连接（ssh）服务器环境；")]),a._v(" "),i("li",[a._v("轻量级虚拟环境——Windows的WSL、ChromeOS的Linux容器；")])]),a._v(" "),i("p",[a._v("根据个人的建议，对于新手及其不建议在学习期间把Linux 系统安装到真机上面，因为往往安装到个人电脑会需要各种折腾，并且如果安装双系统的话对磁盘和文件的操作是不可逆的——而虚拟环境因为或多或少与宿主环境进行了隔离（硬件虚拟隔离或者文件系统隔离），可以保证实验环境与真机文件分离保证了数据安全。此外，现在主流的的虚拟机软件都提供了"),i("strong",[a._v("快照")]),a._v("功能——可以保存当前的状态，以后操作系统出错或者异常可以通过恢复快粘来把系统还原到之前的状态。")]),a._v(" "),i("p",[a._v("其实Linux的安装过程虽然简单——得益于Linux发行商的"),i("strong",[a._v("系统安装工具")]),a._v("日益友好，但其实安装过程中也涉及到不少计算机硬件相关的知识——硬件规格、磁盘分区、文件系统、启动引导……但为了尽快入手Linux环境，这篇安装教程就暂且屏蔽掉底层相关的细节，在后面硬件、启动、磁盘等相关章节再深入介绍。")]),a._v(" "),i("h2",{attrs:{id:"_7-1-软件准备"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-软件准备"}},[a._v("#")]),a._v(" 7.1 软件准备")]),a._v(" "),i("blockquote",[i("ol",[i("li",[a._v("虚拟机软件（选择一个即可）：\n"),i("ul",[i("li",[a._v("VMware WorkStation 15：商业软件，适用于Windows和Linux，专业版(Pro)付费，免费版(Player)功能受限；")]),a._v(" "),i("li",[a._v("VMware Fusion 11.5：商业软件，适用于MacOS，和VMware WorkStation一定程度上兼容，专业版(Pro)付费，免费版(Player)功能受限；")]),a._v(" "),i("li",[a._v("Virtual Box：开源软件，个人可以免费使用，主要由甲骨文(Oracle)公司支持，全平台支持；")])])]),a._v(" "),i("li",[a._v("操作系统：\n"),i("ul",[i("li",[a._v("CentOS-7：兼容RedHat——一款由红帽公司（开源软件及全球服务性系统开发商）出品的稳定出色的Linux操作系统发行版")])])])])]),a._v(" "),i("p",[a._v("因为考虑到不同人的消费能力，所以提供了不同的虚拟机选择方案，就个人使用而言，VMware公司的软件不管是稳定性、交互性、性能上都让我更加满意，因为个人使用的是Mac Mini，所以下面基本也以VMware Fusion为虚拟软件。")]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("VMware")]),a._v(" "),i("p",[a._v("其实免费版本的VMware虚拟软件现在功能也很完善了，虽然网络上有很多公开的VMware激活序列码，如果个人使用不会遇到官司，但是在商业公司使用这种方式来激活专业商业软件，是非法的哦，一旦收到官司单，很可能被告到破产。因此个人建议如果有消费能力，还是支持正版软件啦！")])]),a._v(" "),i("h2",{attrs:{id:"_7-2-安装软件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-安装软件"}},[a._v("#")]),a._v(" 7.2 安装软件")]),a._v(" "),i("p",[a._v("首先是下载安装好虚拟机软件，安装的步骤其实和普通软件都大同小异——"),i("strong",[a._v("下一步")]),a._v("，安装好后VMware Fusion的主界面如下，交互界面相当的清爽呢：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004193540179","data-src":"/img/docimg/image-20201004193540179.png",loading:"lazy"}})]),a._v(" "),i("h2",{attrs:{id:"_7-3-镜像下载"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-镜像下载"}},[a._v("#")]),a._v(" 7.3 镜像下载")]),a._v(" "),i("p",[a._v("然后是下载好CentOS-7的"),i("a",{attrs:{href:"https://www.centos.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("镜像"),i("OutboundLink")],1),a._v("——Home/Download：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"5075C19D-1CC3-4E25-A870-ED9B5C397DDD","data-src":"/img/docimg/5075C19D-1CC3-4E25-A870-ED9B5C397DDD.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[a._v("代理设置")]),a._v(" "),i("p",[a._v("centos的官网因为服务器在国外，访问速度比较慢，很多小伙伴为了加速DNS解析，会使用代理访问，在这里还是建议耐下心来多等一会啦，不要使用代理，因为假如你使用新加坡的代理去访问官网下载链接，那么下面提供给你的镜像站地址也会是新加坡地区，这样你就要忍受使用龟速下载接近10G的镜像，得不偿失哈。")])]),a._v(" "),i("p",[a._v("CentOS-7 目前已经是最后完全版本了——不会增加新的特性（新的bug），但是依然受支持到2024年呢，根据主机架构下载IOS镜像文件——目前绝大多数PC芯片都是Intel的x86架构啦！点击下载链接，后台会根据你的IP位置给出附近区域可下载的镜像：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004195233801","data-src":"/img/docimg/image-20201004195233801.png",loading:"lazy"}})]),a._v(" "),i("p",[a._v("这些镜像站主要由一些高校和云基础设施提供商维护，比如上面的镜像站除了我们耳熟能详的阿里云、华为云、网易云这些云服务厂商，还有重庆大学（cqu）、北京外国语大学（bfsu）、上海交通大学（sjtu）还有本人在读的南京邮电大学（njupt, Nanjing University of Post and Telecommunication），不过国内高校镜像站最出名的还是清华大学镜像站了（http://mirrors.tuna.tsinghua.edu.cn）——提供了较为丰富的镜像支持。")]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("镜像站")]),a._v(" "),i("p",[a._v("镜像站的维护是一个非常耗费存储资源的事情呢，我们南京邮电大学的镜像站是2014届的几位学长大三（2017）在学校信息化建设与管理办公室的支持下成立的，参考清华大学开源的"),i("a",{attrs:{href:"https://github.com/tuna/mirror-web",target:"_blank",rel:"noopener noreferrer"}},[a._v("镜像站设置代码"),i("OutboundLink")],1),a._v("，虽然只支持有限的主流操作系统与软件镜像——没有足够的资源满足边际需求啦，但截至2019年，镜像站的存储占用也耗费超过50T，并且以后占用的存储还会继续膨胀。")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004201523926","data-src":"/img/docimg/image-20201004201523926.png",loading:"lazy"}})]),a._v(" "),i("p",[a._v("但如果只是个人使用，也完全可以针对自己使用的特定操作系统和软件来搭建自己的镜像站，比如本人经常使用到的是Mac OS和 Fedora 32，因此完全可以只同步 homebrew和fedora32的镜像库——不会占用太夸张的存储空间，这样在安装和更新软件时，就可以享受丝滑与飞一般的流畅啦。")])]),a._v(" "),i("h2",{attrs:{id:"_7-4-创建虚拟机"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-创建虚拟机"}},[a._v("#")]),a._v(" 7.4 创建虚拟机")]),a._v(" "),i("p",[a._v("下面就是正题了——创建虚拟机。")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("先看一下软件信息：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004203613311","data-src":"/img/docimg/image-20201004203613311.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("首先点击VMware Fusion 主界面工具栏的 ➕ 按钮：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"截屏2020-10-04 20.32.56","data-src":"/img/docimg/%E6%88%AA%E5%B1%8F2020-10-04%2020.32.56.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("点击【新建】按钮：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004203159996","data-src":"/img/docimg/image-20201004203159996.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("因为已经下载了安装镜像，所以选择【从光盘或映像】安装：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"截屏2020-10-04 20.39.40","data-src":"/img/docimg/%E6%88%AA%E5%B1%8F2020-10-04%2020.39.40.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("把下载好的CentOS-7 ISO 拖放到上面的窗口中：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004204257000","data-src":"/img/docimg/image-20201004204257000.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("【继续】后选择引导类型，对于新手学习而言这里传统BIOS和UEFI不会有什么影响，我选择的是【传统BIOS】：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004204551457","data-src":"/img/docimg/image-20201004204551457.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("【继续】后会出现一个默认的配置：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004204648672","data-src":"/img/docimg/image-20201004204648672.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("一般来说上面的默认配置可以不用修改，不过如果想要定制化更改，可以在【自定设置】中配置，先会让保存虚拟机存储地址，然后才会有配置界面：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004204957499","data-src":"/img/docimg/image-20201004204957499.png",loading:"lazy"}})]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004205153607","data-src":"/img/docimg/image-20201004205153607.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("我这里进行了一下修改：")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("移除声卡：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004205353350","data-src":"/img/docimg/image-20201004205353350.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("移除USB控制器和取消共享蓝牙：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004205500929","data-src":"/img/docimg/image-20201004205500929.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("移除打印机：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004205530498","data-src":"/img/docimg/image-20201004205530498.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("加速 3D 图形 和使用 Retina 全分辨率显示：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004205636843","data-src":"/img/docimg/image-20201004205636843.png",loading:"lazy"}})])])])])]),a._v(" "),i("h2",{attrs:{id:"_7-4-安装linux"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-安装linux"}},[a._v("#")]),a._v(" 7.4 安装Linux")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("经过上面的步骤已经使用虚拟机软件虚拟出了一个主机，不过当前的主机并没有安装任何操作系统——只是一堆硬件（虚拟出的）组装出的"),i("strong",[a._v("裸机")]),a._v("：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004210019833","data-src":"/img/docimg/image-20201004210019833.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("接下来就是加载挂载在CD/DVD 驱动器上的ISO镜像来运行CentOS发行版中的【系统安装程序】：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004210224123","data-src":"/img/docimg/image-20201004210224123.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("键鼠捕获")]),a._v(" "),i("p",[a._v("将鼠标放进窗口后，虚拟机会捕获你的键盘、鼠标等输入设备——意味着键鼠无法在虚拟机窗口外使用，通过【Ctrl-⌘】可以终止捕获，键鼠恢复在窗口外的正常使用啦。")])])]),a._v(" "),i("li",[i("p",[a._v("控制键盘方向键，使【Install CentOS 7】被选中：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004210759735","data-src":"/img/docimg/image-20201004210759735.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("回车后：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004210844813","data-src":"/img/docimg/image-20201004210844813.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("继续回车后，会有一连串的白绿（红）字符串输出后，")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004212541288","data-src":"/img/docimg/image-20201004212541288.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("然后会进入到图形安装程序：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004211027100","data-src":"/img/docimg/image-20201004211027100.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("选择适合的语言：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004211130325","data-src":"/img/docimg/image-20201004211130325.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("语言")]),a._v(" "),i("p",[a._v("其实如果有一点点英语基础，建议使用英文环境啦，因为毕竟Linux的大多数支持文档都是使用的英文，而且很多软件的汉化也不是非常友好，这样你的系统很可能出现——一部分中文一部分英文，早期很多软件甚至同一个窗口既有中文还有英文，真的折磨死强迫症呢。")]),a._v(" "),i("p",[a._v("如果使用一些远程连接软件，如果连接的主机是中文的话，很可能出现编码问题，另外增加了时间成本，得不偿失啊。Linux中的英文单词就那么多，常用的单词也不会超过100个，我相信对很多人只要1-3天就能完全熟悉啦。")])])]),a._v(" "),i("li",[i("p",[a._v("然后是操作系统的安装信息：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004211939007","data-src":"/img/docimg/image-20201004211939007.png",loading:"lazy"}})])])]),a._v(" "),i("h3",{attrs:{id:"软件设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#软件设置"}},[a._v("#")]),a._v(" 软件设置")]),a._v(" "),i("div",{staticClass:"custom-block warning"},[i("p",{staticClass:"custom-block-title"},[a._v("软件一栏")]),a._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:"/img/docimg/image-20201004212624824.png",alt:"image-20201004212624824"}}),a._v(" "),i("ul",[i("li",[i("p",[a._v("一定要等待【软件】一栏的【安装源】和【软件选择】选项没有了⚠️标志才可以进行到下一步")])]),a._v(" "),i("li",[i("p",[a._v("【安装源】和【软件选择】一开始会有⚠️标志，因为ISO加载还需要不少时间，一般等待一小会就可以了")])])])]),a._v(" "),i("ul",[i("li",[i("p",[a._v("【安装源】可以使用默认配置——一般会先检测虚拟的CD/DVD驱动器挂载情况选择挂载的ISO镜像，此外如果网络连通的话，也可以选择某个网路位置作为安装源：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004215145027","data-src":"/img/docimg/image-20201004215145027.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("【软件选择】默认选择的是提供基本功能的最小安装，此外针对不同的使用场景，CentOS安装程序还提供了不同的软件选择方案：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004215310669","data-src":"/img/docimg/image-20201004215310669.png",loading:"lazy"}})])])]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("软件选择")]),a._v(" "),i("p",[a._v("不同方案的差别只是在系统的安装过程中，可以根据需求将选择的方案中需要的软件一起安装好，就类似有些欧洲版本的Windows发行的时候不会安装媒体中心（Media Center），有些买过来的PC机上会预先安装好Office套件和一些PC厂商预置的软件。")]),a._v(" "),i("p",[a._v("但完全可以先安装最小/精简的系统，随后在使用过程根据需求逐个安装需要的软件。")])]),a._v(" "),i("ul",[i("li",[a._v("这里【最小安装】安装的是不带图形界面的服务器版本，我们选择【带GUI的服务器】：")])]),a._v(" "),i("h3",{attrs:{id:"系统设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#系统设置"}},[a._v("#")]),a._v(" 系统设置")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("设置【安装位置】，可以看到安装位置还带有⚠️标志：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004212747507","data-src":"/img/docimg/image-20201004212747507.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("选择好安装磁盘后，可以让系统自动分区，也可以自己配置，因为Linux的磁盘分区涉及到了文件系统、启动引导、Linux文件目录，这里一切从简，使用系统自动配置分区，后面会单独有一章关于如何划分磁盘分区：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004212816930","data-src":"/img/docimg/image-20201004212816930.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("【Kdump】是一个内核崩溃转储机制，但是在运行时可能占用一些内存，对于那些内存非常有限的朋友可以"),i("strong",[a._v("慎重考虑")]),a._v("关闭该功能：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223331453","data-src":"/img/docimg/image-20201004223331453.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("点击【完成】后，可以继续设置【网络或者主机名】：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004213624606","data-src":"/img/docimg/image-20201004213624606.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("可以设置自己喜欢的主机名和连接上虚拟网络：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004213747975","data-src":"/img/docimg/image-20201004213747975.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("针对不同的服务器应用场景，还可以选择合适的隐私策略，不过对于个人学习而言完全暂时可以不去深究了：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004214144667","data-src":"/img/docimg/image-20201004214144667.png",loading:"lazy"}})])])]),a._v(" "),i("h3",{attrs:{id:"本地化设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#本地化设置"}},[a._v("#")]),a._v(" 本地化设置")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("如果时区和自己使用时区不匹配可以选择自己合适的时区：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004214611069","data-src":"/img/docimg/image-20201004214611069.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("也可以重新修改之前的"),i("strong",[a._v("语言支持")]),a._v("和"),i("strong",[a._v("键盘布局")]),a._v("：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223438113","data-src":"/img/docimg/image-20201004223438113.png",loading:"lazy"}})]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223516883","data-src":"/img/docimg/image-20201004223516883.png",loading:"lazy"}})])])]),a._v(" "),i("h3",{attrs:{id:"用户设置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#用户设置"}},[a._v("#")]),a._v(" 用户设置")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("完成了下面的设置后就可以正式开始安装了：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223540369","data-src":"/img/docimg/image-20201004223540369.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("在安装的过程中可以进行账户的设置，先设置Root密码：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223738768","data-src":"/img/docimg/image-20201004223738768.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("Root密码")]),a._v(" "),i("p",[a._v("在Linux中对于不同安全级别的文件操作，不同用户的使用权限是不同的，而"),i("strong",[a._v("Root")]),a._v("用户类似Windows中的"),i("strong",[a._v("Administrator")]),a._v("，拥有**“至高无上权利”**。")]),a._v(" "),i("ul",[i("li",[a._v("比如Linux中poweroff这个命令（可执行文件）的功能是立即关机，在大多数情况下是只有Root用户（最高管理员）才有权执行，普通用户是不可以执行的——除非临时获得管理员权限（类似Windows中以管理员权限运行）；")]),a._v(" "),i("li",[a._v("又比如某些重要的配置文件是不能让随随便便一个用户登录上去就查阅或修改——root除外啦，每个文件对应每个用户可以进行哪些操作——可读、可写、可执行都有明确的定义和限制；")])]),a._v(" "),i("p",[a._v("因此设置一个保密级别高的密码就很重要啦。")])])]),a._v(" "),i("li",[i("p",[a._v("然后可以设置一个新的普通用户：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223555093","data-src":"/img/docimg/image-20201004223555093.png",loading:"lazy"}})]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223643136","data-src":"/img/docimg/image-20201004223643136.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("可以把新增加的用户作为管理员")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004223700817","data-src":"/img/docimg/image-20201004223700817.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("普通管理员")]),a._v(" "),i("p",[a._v("这里的管理员不同于root用户——最高管理员，把普通用户设置为管理员意味着普通用户被root赋予部分管理权限——比如可以执行某些文件、访问或修改部分目录下的文件……这个在后面的用户管理中会详细介绍。")])])])]),a._v(" "),i("h3",{attrs:{id:"完成重启"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#完成重启"}},[a._v("#")]),a._v(" 完成重启")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("配置完成后等待一段时间，就安装完成了，等待重启：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004225534382","data-src":"/img/docimg/image-20201004225534382.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("启动引导界面选择安装好的CentOS：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004230228610","data-src":"/img/docimg/image-20201004230228610.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("接收许可证：")])])]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004225653461","data-src":"/img/docimg/image-20201004225653461.png",loading:"lazy"}})]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004225949596","data-src":"/img/docimg/image-20201004225949596.png",loading:"lazy"}})]),a._v(" "),i("ul",[i("li",[i("p",[a._v("【完成配置】后就可以进入图形化登录界面了：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004230055063","data-src":"/img/docimg/image-20201004230055063.png",loading:"lazy"}})])])]),a._v(" "),i("h2",{attrs:{id:"_7-5-初次登录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-初次登录"}},[a._v("#")]),a._v(" 7.5 初次登录")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("输入密码登录：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004230449536","data-src":"/img/docimg/image-20201004230449536.png",loading:"lazy"}})])]),a._v(" "),i("li",[i("p",[a._v("初次使用会用一些针对个人用户的个性化设置，根据自己的需求设置，建议设置为英文环境：")]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("个性化设置")]),a._v(" "),i("p",[a._v("在之前安装系统的时候不是已经设置过个性化设置了吗——语言、时区、输入法，为什么还要设置呢，因为系统安装的时候设置的对象是 "),i("code",[a._v("root")]),a._v(" 用户，而这个我们登陆的是最后新创建的普通个人用户。")])]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004230551492","data-src":"/img/docimg/image-20201004230551492.png",loading:"lazy"}})])])]),a._v(" "),i("h2",{attrs:{id:"_7-6-新手教程"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-新手教程"}},[a._v("#")]),a._v(" 7.6 新手教程")]),a._v(" "),i("p",[a._v("对于新手系统很友好的提供了一套关于"),i("strong",[a._v("个人桌面")]),a._v("使用的原生的教程：")]),a._v(" "),i("ul",[i("li",[a._v("窗口和虚拟工作攻坚")]),a._v(" "),i("li",[a._v("任务切换")]),a._v(" "),i("li",[a._v("改变壁纸")]),a._v(" "),i("li",[a._v("浏览器")]),a._v(" "),i("li",[a._v("……")])]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004230754677","data-src":"/img/docimg/image-20201004230754677.png",loading:"lazy"}})]),a._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[a._v("桌面使用")]),a._v(" "),i("ul",[i("li",[i("p",[a._v("Linux的Gnome桌面也是非常有主流且有趣的桌面环境，网络有很多"),i("strong",[a._v("优化")]),a._v("和"),i("strong",[a._v("美化")]),a._v("的教程，感兴趣可以体验一下，不过对于Linux用户，最精髓也最重要的还是先熟悉Linux的常用命令；")])]),a._v(" "),i("li",[i("p",[a._v("Linux最主要的应用还是——面向服务端，而在大型数据中心几百上千的服务器是不会配置显示器来用图形界面管理的；")])]),a._v(" "),i("li",[i("p",[a._v("一般管理服务器还是通过远程连接工具来连接远程服务器，比如下面是某运维人员的远程连接管理软件：")]),a._v(" "),i("p",[i("img",{staticClass:"lazy",attrs:{alt:"image-20201004231723008","data-src":"/img/docimg/image-20201004231723008.png",loading:"lazy"}})])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);