(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{374:function(t,e,n){"use strict";n.r(e);var a=n(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"使用cgroup限制内存"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用cgroup限制内存"}},[t._v("#")]),t._v(" 使用cgroup限制内存")]),t._v(" "),n("p",[t._v("有些场景下需要限制下程序的内存，可以用cgroup来实现。\n本次操作的系统为 CentOS 6 或 7")]),t._v(" "),n("h2",{attrs:{id:"准备下环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备下环境"}},[t._v("#")]),t._v(" 准备下环境")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yum install -y libcgroup libcgroup-tools \n")])])]),n("p",[t._v("修改下内核，让程序可以随便申请内存")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("echo 1 > /proc/sys/vm/overcommit_memory\n")])])]),n("p",[t._v("关闭交换分区")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("swapoff -a\n")])])]),n("h2",{attrs:{id:"实验一"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验一"}},[t._v("#")]),t._v(" 实验一")]),t._v(" "),n("p",[n("strong",[t._v("1")]),t._v(".创建一个cgroup限制")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("cd /sys/fs/cgroup/memory/\nmkdir test\ncd test\n")])])]),n("p",[t._v("进入test会看到自动产生了很多文件\n"),n("strong",[t._v("2")]),t._v(".修改配置，限制内存在100M内")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("echo $((100*1024*1024)) > memory.limit_in_bytes\n")])])]),n("p",[n("strong",[t._v("3")]),t._v(".编译一个程序来测试下，看能否限制在100M内，代码如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#include <stdlib.h>\n#include <stdio.h>\n#include <string.h>\n\nint main(int argc, char **argv)\n{\n\tint max = -1;\n\tint mb = 0;\n\tchar *buffer;\n\tint i;\n#define SIZE 500\n\tunsigned int *p = malloc(1024 * 1024 * SIZE);\n\n\tprintf("malloc buffer: %p\\n", p);\n\n\tfor (i = 0; i < 1024 * 1024 * (SIZE/sizeof(int)); i++) {\n\t\tp[i] = 123;\n\t\tif ((i & 0xFFFFF) == 0) {\n\t\t\tprintf("%dMB written\\n", i >> 18);\n\t\t\tusleep(100000);\n\t\t}\n\t}\n\tpause();\n\treturn 0;\n}\n')])])]),n("p",[t._v("编译一下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("gcc oom.c\n")])])]),n("p",[t._v("使用cgroup来测试下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[root@localhost ~]# cgexec -g memory:test ./a.out \nmalloc buffer: 0x7fdbc67e2010\n0MB written\n4MB written\n8MB written\n12MB written\n16MB written\n20MB written\n24MB written\n28MB written\n32MB written\n36MB written\n40MB written\n44MB written\n48MB written\n52MB written\n56MB written\n60MB written\n64MB written\n68MB written\n72MB written\n76MB written\n80MB written\n84MB written\n88MB written\n92MB written\n96MB written\nKilled\n")])])]),n("p",[t._v("可以看到要超过100M时，程序被结束掉了。\n改成50M再测试下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("echo $((50*1024*1024)) > /sys/fs/cgroup/memory/test/memory.limit_in_bytes\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[root@localhost ~]# cgexec -g memory:test ./a.out \nmalloc buffer: 0x7f7b9fec0010\n0MB written\n4MB written\n8MB written\n12MB written\n16MB written\n20MB written\n24MB written\n28MB written\n32MB written\n36MB written\n40MB written\n44MB written\n48MB written\nKilled\n")])])]),n("p",[t._v("可以看到要超过50M时，程序被结束掉了。")]),t._v(" "),n("p",[n("strong",[t._v("打扫环境")])]),t._v(" "),n("p",[t._v("删除cgroup下的test目录的步骤如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("rmdir /sys/fs/cgroup/memory/test\n")])])]),n("p",[t._v("如果报错没权限，看看是不是把当前会话的pid放进去了，如果是则把它移出来，命令如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("echo $$ > /sys/fs/cgroup/memory/tasks \n")])])]),n("p",[t._v("之后再删除test目录。")]),t._v(" "),n("h2",{attrs:{id:"实验二"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实验二"}},[t._v("#")]),t._v(" 实验二")]),t._v(" "),n("p",[t._v("使用配置文件来限制\n"),n("strong",[t._v("增加内存限制的配置")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("vim /etc/cgconfig.conf \n")])])]),n("p",[t._v("添加如下内容")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('group TestGroup {\n    memory {\n        memory.limit_in_bytes = "52428800";\n        memory.swappiness = 0;\n    }\n}\n')])])]),n("p",[t._v("这里定义了一个TestGroup组，这个组限制的内存为50M，50"),n("em",[t._v("1024")]),t._v("1024。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("vim /etc/cgrules.conf \n")])])]),n("p",[t._v("增加如下配置")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("*:a.out    memory      TestGroup/\n")])])]),n("p",[t._v("这里简单说明下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("*:a.out 程序名，也就是我们要限制的实例\nmemory: 要限制的内容，比如这里要限制内存\nTestGroup:限制的规则，这里使用的是刚才配置的限制50M的规则\n")])])]),n("p",[n("strong",[t._v("启动服务")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("service cgconfig start\nservice cgred start\n或\nsystemctl start cgconfig\nsystemctl start cgred\n")])])]),n("p",[t._v("至此就配置完成了，跑一下程序，观察下内存的使用情况。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[root@localhost opt]# ./a.out \nmalloc buffer: 0x7f42cf62d010\n0MB written\n4MB written\n8MB written\n12MB written\n16MB written\n20MB written\n24MB written\n28MB written\n32MB written\n36MB written\n40MB written\n44MB written\n48MB written\nKilled\n")])])]),n("p",[t._v("改成限制20M，再测试下。更改/etc/cgconfig.conf配置文件，将内存限制在20M，重启cgconfig服务，看内存使用情况：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("[root@localhost opt]# ./a.out \nmalloc buffer: 0x7fc5521ca010\n0MB written\n4MB written\n8MB written\n12MB written\n16MB written\n20MB written\nKilled\n")])])]),n("p",[t._v("可以看到内存超过20M时，程序被结束掉了。")]),t._v(" "),n("h2",{attrs:{id:"关于cgroup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于cgroup"}},[t._v("#")]),t._v(" 关于cgroup")]),t._v(" "),n("p",[t._v("cgroups（Control Groups）最初叫Process Container，由Google工程师（Paul Menage和Rohit Seth）于2006年提出，后来因为Container有多重含义容易引起误解，就在2007年更名为Control Groups，并被整合进Linux内核。\ncgroups可以限制、记录、隔离进程组所使用的物理资源（包括：CPU、memory、IO等），是lxc （linux container）的基础之一。\n看到这里是不是隐约感觉到了什么？是的，docker也用了它。\n"),n("a",{attrs:{href:"http://www.infoq.com/cn/articles/docker-kernel-knowledge-cgroups-resource-isolation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker背后的内核知识——cgroups资源限制"),n("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);