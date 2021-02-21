(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{379:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在centos7下安装使用kvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在centos7下安装使用kvm"}},[t._v("#")]),t._v(" 在centos7下安装使用kvm")]),t._v(" "),s("h2",{attrs:{id:"一-前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-前期准备"}},[t._v("#")]),t._v(" 一.前期准备")]),t._v(" "),s("p",[t._v("1.确定机器有VT")]),t._v(" "),s("p",[t._v("终端输入命令：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("grep -E -o '(vmx|svm)' /proc/cpuinfo\n")])])]),s("p",[t._v("如果flags: 里有vmx 或者svm就说明支持VT；如果没有任何的输出，说明你的cpu不支持，将无法使用KVM虚拟机。")]),t._v(" "),s("p",[t._v("2.确保BIOS里开启VT:")]),t._v(" "),s("p",[t._v("Intel(R) Virtualization Tech [Enabled]")]),t._v(" "),s("p",[t._v("使用如下命令确定")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("lsmod | grep kvm \n如果无相关信息，手动加载下\nmodprobe kvm-intel\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"二-桥接网络"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-桥接网络"}},[t._v("#")]),t._v(" 二.桥接网络")]),t._v(" "),s("p",[t._v("使用桥接网络，虚拟机即可与其他机器互相访问。")]),t._v(" "),s("p",[t._v("安装下工具")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install bridge-utils\n")])])]),s("p",[t._v("1.复制ifcfg-em1 为 ifcfg-br1，并将ifcfg-br1改为如下配置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("TYPE=Bridge\nBOOTPROTO=static\nDEFROUTE=yes\nPEERDNS=yes\nPEERROUTES=yes\nIPV4_FAILURE_FATAL=no\nNAME=br1\nDEVICE=br1\nONBOOT=yes\nIPADDR=192.168.1.116\nNETMASK=255.255.255.0\nGATEWAY=192.168.1.1\n")])])]),s("p",[t._v("2.原网卡ifcfg-em1只保留如下配置,其他都注释掉：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NAME=em1\nDEVICE=em1\nONBOOT=yes\nBRIDGE=br1\n")])])]),s("p",[t._v("3.重启网络")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("systemctl restart network\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"三-安装kvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-安装kvm"}},[t._v("#")]),t._v(" 三.安装kvm")]),t._v(" "),s("p",[t._v("1.安装kvm")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" yum -y install libcanberra-gtk2 qemu-kvm.x86_64 qemu-kvm-tools.x86_64    libvirt.x86_64 libvirt-cim.x86_64 libvirt-client.x86_64 libvirt-java.noarch  libvirt-python.x86_64 libiscsi device-mapper-libs  dbus-devel  virt-clone tunctl virt-manager libvirt libvirt-python python-virtinst\n")])])]),s("p",[t._v("2.安装x-windows,使用图形界面管理虚拟机")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('yum groupinstall "X Window System"\nyum install "@X Window System"\n')])])]),s("p",[t._v("3.安装中文字符，解决界面乱码问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(' yum install dejavu-lgc-sans-fonts\n yum groupinstall "Fonts" -y\n')])])]),s("p",[t._v("4.启动kvm")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" centos7 下\n systemctl start libvirtd \n systemctl enable libvirtd \n\n centos6 下\n service libvirtd start\n chkconfig libvirtd  on\n")])])]),s("p",[t._v("5.错误集锦：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("couldn't connect to accessibility bus failed to connect to socket /tmp/dbus\n解决方法：\nexport NO_AT_BRIDGE=1\n\nvirGetHostname:1957 : getaddrinfo failed for 'test': Name or service not known\n解决方法：\nvim /etc/hosts\n添加hostname  test 的本地解析\n192.168.1.116 test\n")])])]),s("h2",{attrs:{id:"四-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-使用"}},[t._v("#")]),t._v(" 四.使用")]),t._v(" "),s("p",[s("strong",[t._v("1.")]),t._v(" 使用virt-manager管理虚拟机，可以完成克隆，安装，开启，关闭等大部分的动作")]),t._v(" "),s("p",[t._v("如是ssh命令登录服务器，需加上XC参数。")]),t._v(" "),s("p",[t._v("如是在windows环境下通过putty登录服务器，需打开x-windows，方法如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("在http://sourceforge.net/projects/xming/下载Xming，并安装运行。\nputty.exe ==> Connection/SSH/X11 ==> X11 forwarding/Enable打勾即可,X dispaly location可以空着\n")])])]),s("p",[s("strong",[t._v("2.")]),t._v(" 创建预分配文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("qemu-img create -f qcow2 -o preallocation=metadata /data/test.qcow2 80G\n")])])]),s("p",[t._v("这里也可以使用存储池来做,方便使用,步骤参考如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("定义存储池\nvirsh pool-define-as optimg --type dir --target /opt/kvm\n\n构建\nvirsh pool-build optimg\n\n查看\nvirsh pool-list --all\n\n开启\nvirsh pool-start optimg\n\n开机自动启动\nvirsh pool-autostart optimg\n")])])]),s("p",[s("strong",[t._v("3")]),t._v(". 让虚拟机开机自动启动")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("virsh list --all  查看虚拟机名称及状态\nvirsh autostart +虚拟机名称\n")])])]),s("p",[t._v("设置后可在/etc/libvirt/qemu/autostart下看到已设置自动启动KVM配置文件链接")]),t._v(" "),s("p",[s("strong",[t._v("4.")]),t._v(" 在桥接网络下给虚拟机做NAT")]),t._v(" "),s("p",[t._v("有种情况是:服务器有两张网卡，一张外网，一张内网。当我们给kvm桥接的是内网时，虚拟机只能访问内网，无法访问外网。这时就可以利用iptables做NAT，让虚拟机也能访问外网。")]),t._v(" "),s("p",[t._v("首先开启转发")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('echo "net.ipv4.ip_forward = 1" >>/etc/sysctl.conf\nsysctl -p\n')])])]),s("p",[t._v("配置防火墙")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#虚拟机ip 192.168.1.120 公网ip 1.1.1.1 公网网卡em1\niptables -t nat -A POSTROUTING -s 192.168.1.120 -o em1 -j SNAT --to 1.1.1.1\niptables -A FORWARD -d 192.168.1.120 -j ACCEPT\niptables -A FORWARD -s 192.168.1.120 -j ACCEPT\n#注意新增的iptables -A FORWARD两条链要在下面这条之上\n#-A FORWARD -j REJECT --reject-with icmp-host-prohibited\n#如不想单独配置每个虚拟机的ip，可把192.168.1.120改为网段192.168.1.0/24\n\n#保存配置\nservice iptables save\n")])])]),s("p",[t._v("虚拟机的网关指向桥接ip,配置完成后虚拟机即可上网")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("GATEWAY=192.168.1.116\n")])])]),s("p",[s("strong",[t._v("5.")]),t._v(" 克隆虚拟机的网卡问题")]),t._v(" "),s("p",[t._v("如果虚拟机是centos6.x的,克隆虚拟机后会有mac地址冲突的问题,导致克隆出来的虚拟机无法启动网卡.")]),t._v(" "),s("p",[t._v("centos7没有这个问题.")]),t._v(" "),s("p",[t._v("简单的处理步骤如下")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("删除/etc/udev/rules.d/70-persistent-net.rules这个文件\n将ifcfg-eth0文件中的mac地址和UUID这两行内容注释掉\n重启虚拟机，网卡恢复正常。\n如果还是无法启动，查看新产生的/etc/udev/rules.d/70-persistent-net.rules内容,并将网卡的配置文件改成相应的内容\n")])])]),s("p",[s("strong",[t._v("6.")]),t._v(" 虚拟机备份问题\n采用qcow2格式的虚拟机镜像,通过scp备份到其他机器时,假如文件变成预分配的大小.比如预分配一个200G的qcow2文件,实际使用20G,备份文件变成200G时,可尝试用rsync的方式避免这个问题")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("rsync --progress --sparse -avhze 'ssh -p12220' centos6.6-x86-1.qcow2 root@192.168.1.100:/data/backups/kvm/\n")])])]),s("p",[t._v("建议用存储池来放镜像，另外格式还是建议使用qcow2。")]),t._v(" "),s("p",[s("strong",[t._v("7.")]),t._v(" kvm克隆问题\n除了使用系统自带的virt-lone外,也可以通过cp镜像文件来实现,方法如下:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("关闭虚拟机\n复制镜像文件\n#cp -av source.img new.img\n复制模板配置文件为new.xml\n#cd /etc/libvirtd/qemu\n#cp -av source.xml  new.xml\n修改如下选项\n修改虚拟机的名称，如：<name>new</name>\n修改disk位置：<source file='/data1/vmdisk/new.img'/> \n修改uuid编号 ，如：<uuid>de8d962a-6334-a652-f66b-4da87d852343</uuid>\n修改mac地址，如：<mac address='52:54:00:11:12:1f'/>\n重启libvirt\n#service libvirtd restart\n")])])]),s("p",[s("strong",[t._v("8.")]),t._v(" 快照使用")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("virsh snapshot-create-as --domain xxx  xxx-snap1 --disk-only --atomic --quiesce\n")])])]),s("p",[t._v("这里需要注意的是,如果用了快照,镜像文件会变大.")]),t._v(" "),s("p",[s("strong",[t._v("9")]),t._v(" 转换镜像格式")]),t._v(" "),s("p",[t._v("查看镜像文件信息")]),t._v(" "),s("p",[t._v("qemu-img info /var/lib/libvirt/images/ATE1.img")]),t._v(" "),s("p",[t._v("转换镜像文件")]),t._v(" "),s("p",[t._v("关闭虚拟机,将raw转换为qcow2")]),t._v(" "),s("p",[t._v("qemu-img convert -f raw -O qcow2 old.raw new.qcow2")]),t._v(" "),s("p",[t._v("修改配置文件")]),t._v(" "),s("p",[t._v("vim /etc/libvirt/qemu/old.xml")]),t._v(" "),s("p",[t._v("将disk的路径和type改下")]),t._v(" "),s("p",[t._v("重启libvirt服务")]),t._v(" "),s("p",[t._v("service libvirtd restart")]),t._v(" "),s("p",[s("strong",[t._v("10")]),t._v(" 在终端进入虚拟机")]),t._v(" "),s("p",[t._v("有时候想在终端上直接进入虚拟机，可以使用virsh console 命令。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("进入：\nvirsh console + 虚拟机名称\n\n退出：\n按右ctrl + ]\n")])])]),s("p",[s("strong",[t._v("11")]),t._v(" Unable to read from monitor: Connection reset by peer")]),t._v(" "),s("p",[t._v("有时候宿主机重启后,再去开虚拟机会提示如上错误信息,使用如下命令处理")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("virsh managedsave-remove domain\n")])])]),s("p",[t._v("重置完成后,再启动虚拟机即可.")]),t._v(" "),s("p",[s("strong",[t._v("12")]),t._v(" 默认的网卡驱动模式是virtio，是百兆的，而现在的服务器基本都是千兆和万兆了，所以可以改为e1000，让虚拟机的网卡也是千兆的。")]),t._v(" "),s("p",[t._v("打开对应的虚拟机配置文件，找到网卡配置，将")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<model type='virtio'/>\n")])])]),s("p",[t._v("改为")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<model type='e1000'/>\n")])])]),s("p",[t._v("然后更新下配置，重启虚拟机即可")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" virsh define 虚拟机.xml\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);