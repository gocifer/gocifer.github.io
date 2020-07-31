(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{455:function(s,e,t){"use strict";t.r(e);var a=t(6),l=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("[toc]")]),s._v(" "),t("h2",{attrs:{id:"什么是zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是zsh"}},[s._v("#")]),s._v(" 什么是Zsh")]),s._v(" "),t("p",[s._v("Zsh是一款强大的虚拟终端，既是一个系统的虚拟终端，也可以作为一个脚本语言的交互解析器。")]),s._v(" "),t("h2",{attrs:{id:"zsh的一些特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zsh的一些特性"}},[s._v("#")]),s._v(" Zsh的一些特性")]),s._v(" "),t("blockquote",[t("p",[s._v("兼容bash，原来使用bash的兄弟切换过来毫无压力。")])]),s._v(" "),t("blockquote",[t("p",[s._v("强大的历史纪录功能，在用或者方向上键查找历史命令时，zsh支持限制查找。比如输入ls然后再按方向上键,则只会查找用过的ls命令。而此时使用则会仍然按之前的方式查找，忽略ls。")])]),s._v(" "),t("blockquote",[t("p",[s._v("多个终端会话共享历史记录。经常有多个窗口，tab，tmux的多个session，panel。这些命令历史不能共享实在是很糟糕的回忆。但是有了zsh之后，这些确实成了回忆了,所有的命令历史都可以共享。")])]),s._v(" "),t("blockquote",[t("p",[s._v("智能拼写纠正，输入gtep mactalk * -R，系统会提示：zsh: correct 'gtep' to 'grep' [nyae]?比妹纸贴心吧，她们向来都是让你猜的……")])]),s._v(" "),t("blockquote",[t("p",[s._v("各种补全：路径补全、命令补全，命令参数补全，插件内容补全等等。触发补全只需要按一下或两下tab键，补全项可以使用ctrl+n/p/f/b上下左右切换。比如你想杀掉java的进程，只需要输入kill java + tab键，如果只有一个java进程，zsh 会自动替换为进程的 pid，如果有多个则会出现选择项供你选择。ssh+空格+两个tab键，zsh会列出所有访问过的主机和用户名进行补全")])]),s._v(" "),t("blockquote",[t("p",[s._v("智能跳转，安装了autojump之后，zsh 会自动记录你访问过的目录，通过 j + 目录名 可以直接进行目录跳转，而且目录名支持模糊匹配和自动补全，例如你访问过hadoop-1.0.0目录，输入j hado 即可正确跳转。j –stat 可以看你的历史路径库。")])]),s._v(" "),t("blockquote",[t("p",[s._v("目录浏览和跳转：输入 d，即可列出你在这个会话里访问的目录列表，输入列表前的序号，即可直接跳转。")])]),s._v(" "),t("blockquote",[t("p",[s._v("在当前目录下输入 .. 或 … ，或直接输入当前目录名都可以跳转，你甚至不再需要输入cd命令了。")])]),s._v(" "),t("blockquote",[t("p",[s._v("通配符搜索：ls -l **/*.sh，可以递归显示当前目录下的 shell 文件，文件少时可以代替find，文件太多还是用find。")])]),s._v(" "),t("h2",{attrs:{id:"设置默认shell为zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置默认shell为zsh"}},[s._v("#")]),s._v(" 设置默认shell为zsh")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("cat /etc/shells  //查看当前计算机支持的shell\n\nchsh -l     //查看当前用户支持的shell\n\nchsh -s path/to/shell\nchsh    //交互模式更改shell\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("code",[s._v("$ chsh -s $(which zsh)")])]),s._v(" "),t("p",[s._v("完成后可以使用下面这条命令检查是否设置成功")]),s._v(" "),t("p",[t("code",[s._v("$ echo $SHELL")])]),s._v(" "),t("h2",{attrs:{id:"bash兼容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bash兼容"}},[s._v("#")]),s._v(" bash兼容")]),s._v(" "),t("blockquote",[t("p",[s._v("Zsh默认不兼容Bash，不过Zsh实现中包含了一个屌炸天的仿真模式(emulation mode)支持对两种主流的Bourne衍生版shell（bash、ksh）和C shell的仿真(csh的支持并不完整)。在Bash的仿真模式下，可以使用与Bash相同的语法和命令集合，从而达到近乎完全兼容的目的。")])]),s._v(" "),t("p",[s._v("为了激活对Bash的仿真，需要显式执行")]),s._v(" "),t("p",[t("code",[s._v("$ emulate bash")]),s._v("\n等效于\n"),t("code",[s._v("$ emulate sh")])]),s._v(" "),t("p",[s._v("更详细介绍可到官网了解，zsh官网：http://www.zsh.org/")]),s._v(" "),t("h2",{attrs:{id:"管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理工具"}},[s._v("#")]),s._v(" 管理工具")]),s._v(" "),t("h3",{attrs:{id:"oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh"}},[s._v("#")]),s._v(" oh-my-zsh")]),s._v(" "),t("blockquote",[t("p",[s._v("Oh My Zsh是一款社区驱动的命令行工具，正如它的主页上说的，Oh My Zsh 是一种生活方式。它基于zsh命令行，提供了主题配置，插件机制，已经内置的便捷操作。给我们一种全新的方式使用命令行。")])]),s._v(" "),t("blockquote",[t("p",[s._v("Oh My Zsh这个名字听起来就很有意思，它是基于zsh命令行的一个扩展工具集，提供了丰富的扩展功能。")])]),s._v(" "),t("blockquote",[t("p",[s._v("Oh My Zsh只是一个对zsh命令行环境的配置包装框架，但它不提供命令行窗口，更不是一个独立的APP。")])]),s._v(" "),t("p",[s._v("更详细介绍可到官网了解，Oh My Zsh官网：http://ohmyz.sh")]),s._v(" "),t("h3",{attrs:{id:"oh-my-zsh目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oh-my-zsh目录结构"}},[s._v("#")]),s._v(" Oh My Zsh目录结构")]),s._v(" "),t("p",[s._v("进入~/.oh-my-zsh目录后，看看该目录的结构")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ls ~/.oh-my-zsh\ncache  custom  lib  log  MIT-LICENSE.txt  oh-my-zsh.sh  plugins  README.markdown  templates  themes  tools\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("lib 提供了核心功能的脚本库")]),s._v(" "),t("li",[s._v("tools 提供安装、升级等功能的快捷工具")]),s._v(" "),t("li",[s._v("plugins 自带插件的存在放位置")]),s._v(" "),t("li",[s._v("templates 自带模板的存在放位置")]),s._v(" "),t("li",[s._v("themes  自带主题文件的存在放位置")]),s._v(" "),t("li",[s._v("custom 个性化配置目录，自安装的插件和主题可放这里")])]),s._v(" "),t("h2",{attrs:{id:"主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题"}},[s._v("#")]),s._v(" 主题")]),s._v(" "),t("blockquote",[t("p",[s._v("系统自带主题放在"),t("code",[s._v("。oh-mu-zsh/theme")]),s._v("，如果是外置的主题把主题包里的文件复制到"),t("code",[s._v(".oh-my-zsh/custom/theme")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('vim ~/.zshrc\nZSH_THEME="robbyrussel"\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#插件"}},[s._v("#")]),s._v(" 插件")]),s._v(" "),t("blockquote",[t("p",[s._v("Oh My Zsh 默认自带了一些默认主题，存放在~/.oh-my-zsh/plugins目录中。我们可以查看这些插件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ ls ~/.oh-my-zsh/plugins\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("虽然 oh-my-zsh 提供了很多插件，不过也不要贪多哦，大量的插件会拖慢打开的速度，因此只安装你常用的就好了")])]),s._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/wiki/Plugin:git",target:"_blank",rel:"noopener noreferrer"}},[s._v("git"),t("OutboundLink")],1),s._v("：oh-my-zsh 默认开启的插件，提供了大量 git 的alias")])]),s._v(" "),t("li",[t("p",[s._v("extract：功能强大的解压插件，所有类型的文件解压一个命令x全搞定，再也不需要去记tar后面到底是哪几个参数了")])]),s._v(" "),t("li",[t("p",[s._v("z：强大的目录自动跳转命令，会记忆你曾经进入过的目录，用模糊匹配快速进入你想要的目录。")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/history-substring-search",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-history-substring-search"),t("OutboundLink")],1),s._v("：")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-syntax-highlighting"),t("OutboundLink")],1),s._v("：这个是当你正在输入一个命令的时候，显示绿色，表示这个命令是有效的存在的，显示红色表示这个命令在系统中不存在")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"}},[s._v("zsh-autosuggestions"),t("OutboundLink")],1),s._v("：当我们输入命令时，终端会自动提示你接下来可能要输入的命令，这时按 → 便可输出这些命令，非常方便。(PS：当你重新打开终端的时候可能看不到变化，可能你的字体颜色太淡了，我们把其改亮一些：修改"),t("code",[s._v("zsh-autosuggestions.zsh")]),s._v(" 文件 ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=10')")])]),s._v(" "),t("li",[t("p",[s._v("web-search：能让我们在命令行中使用搜索引擎进行搜索。比如  "),t("code",[s._v("google swift")]),s._v(" 这个命令就可以使用 Google 搜索 swift 关键字,web-content 同样集成了 baidu, bing 这些搜索引擎")])]),s._v(" "),t("li",[t("p",[s._v("last-working-dir：可以记录上一次退出命令行时候的所在路径，并且在下一次启动命令行的时候自动恢复到上一次所在的路径")])]),s._v(" "),t("li",[t("p",[s._v("catimg：这个命令将图片文件的内容输出到命令行, 比如："),t("code",[s._v("catimg swift.png")])])]),s._v(" "),t("li",[t("p",[s._v("encode64：是一个 Base64 编码的插件，可以让大家很方便的调试编码过程，使用也很简单："),t("code",[s._v("$ encode64 some_string")])])]),s._v(" "),t("li",[t("p",[s._v("urltools：同样的，urltools 还提供了 URL 编码的机制，我们可以使用 urlencode 命令对 url 进行编码：")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("urlencode http://google.com\nhttp%3A%2F%2Fgoogle.com\n还对应了一个 urldecode 命令来对 url 进行解码。\n\nurldecode http%3A%2F%2Fgoogle.com\nhttp://google.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("wd：它的作用就是能够快速的切换到常用的目录。我们用命令行时经常会遇到这样一种情况，我们常用的目录就那么几个，而这些目录有时候会再很深的层级中。使用 cd 命令在这些深层级目录中切换就比较耗费时间了，wd 插件正是为了解决这个问题")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("比如我们有一个常用的目录 /usr/nginx/www/html，我们首先进入到这个目录中，然后输入\n\nwd add web\n这个命令相当于给当前目录做了一个标识，标识名叫做  web ，我们下次如果再想进入这个目录，只需输入： \n\nwd web\n这样就可以完成目录切换了，非常方便。\n\n更多内容可以查看它的 github 主页：  https://github.com/mfaerevaag/wd\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("colored-man-pages")])]),s._v(" "),t("li",[t("p",[s._v("sudo：当你输入一个命令发现需要root权限，通常只能按方向上键，然后光标移到头部，加入sudo，但是有了这个插件，不用再移动光标到头部了，直接两下 ESC， sudo就会自动加入到最前面。。。")])]),s._v(" "),t("li",[t("p",[s._v("brew-cask brew ：这两个是给OS X 的brew增加补全的。我用的OS X")])]),s._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://github.com/wting/autojump",target:"_blank",rel:"noopener noreferrer"}},[s._v("autojump"),t("OutboundLink")],1),s._v("：j 一下就到日常的常用目录。")])]),s._v(" "),t("li",[t("p",[s._v("node：在浏览器打开当前版本的 Node.js API。"),t("code",[s._v("node-docs http")])])]),s._v(" "),t("li",[t("p",[s._v("bower：给 Bower 命令添加自动补全"),t("code",[s._v("bower + tab")])])])]),s._v(" "),t("blockquote",[t("p",[s._v("更多插件可参考:")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins")]),s._v(" "),t("li",[s._v("https://github.com/unixorn/awesome-zsh-plugins")]),s._v(" "),t("li",[s._v("https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins-Overview")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);