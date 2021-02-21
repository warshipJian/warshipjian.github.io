(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{361:function(s,a,t){"use strict";t.r(a);var e=t(26),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"缩减docker镜像体积"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缩减docker镜像体积"}},[s._v("#")]),s._v(" 缩减docker镜像体积")]),s._v(" "),t("p",[s._v("以一个C语言的hello word为例：")]),s._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),t("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<unistd.h>")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])]),t("p",[s._v("dockerfile 如下：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" gcc\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hello.c .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o hello hello.c\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("打包一下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('docker build -f gcc -t hello:gcc .  \nSending build context to Docker daemon  9.826MB\nStep 1/4 : FROM gcc\n ---\x3e 828cd42f8a79\nStep 2/4 : COPY hello.c .\n ---\x3e Using cache\n ---\x3e 8b885dff2f96\nStep 3/4 : RUN gcc -o hello hello.c\n ---\x3e Using cache\n ---\x3e a67d4b9e5d34\nStep 4/4 : CMD ["./hello"]\n ---\x3e Running in 4149076b6bdc\nRemoving intermediate container 4149076b6bdc\n ---\x3e 72502b8ed5aa\nSuccessfully built 72502b8ed5aa\nSuccessfully tagged hello:gcc\n')])])]),t("p",[s._v("后发现镜像体积接近1G多：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker images | grep gcc\nhello               gcc                 72502b8ed5aa        7 seconds ago       1.19GB\n")])])]),t("p",[s._v("改成多层构建")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" gcc AS mybuildstage\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hello.c .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o hello hello.c\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ubuntu\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=mybuildstage hello .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("打包后发现体积变成73.9MB了")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker images | grep gcc1\nhello               gcc1                c7b00d5f6293        55 seconds ago      73.9MB\n")])])]),t("p",[s._v("就一个hello world，能不能更小一点呢？用scratch吧")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" gcc\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hello.c .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o hello hello.c\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" scratch\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=0 hello .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("打包后的镜像只有16.4kB了：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker images | grep gcc2           \nhello               gcc2                e582940e0091        50 seconds ago          16.4kB\n")])])]),t("p",[s._v("但运行不起来：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('docker run -itd hello:gcc2\n4e9269f8daa2d57a60d5999058aa0b70cc6e921c0839dcc9fd05c6c8f4275fd5\n\ndocker ps --all | grep gcc2\n4e9269f8daa2        hello:gcc2          "./hello"           3 minutes ago       Exited (1) 3 minutes ago                       sharp_hellman\n\ndocker logs 4e9269f8daa2\nstandard_init_linux.go:211: exec user process caused "no such file or directory"\n')])])]),t("p",[s._v("折中一下，用 busybox:glibc 吧：")]),s._v(" "),t("div",{staticClass:"language-dockerfile extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" gcc\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" hello.c .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("o hello hello.c\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" busybox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("glibc\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("from=0 hello .\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./hello"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("打包后是5.21MB，不错。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker images  | grep gcc3\nhello               gcc3                11d69c32e379        54 seconds ago          5.21MB\n")])])]),t("p",[s._v("正常运行：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('docker ps\nCONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES\neef52f039b56        hello:gcc3          "./hello"           2 seconds ago       Up 1 second                             kind_lamarr\n')])])]),t("p",[s._v("并且可以进容器敲各种命令：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("docker exec -it eef52f039b56 /bin/sh\n/ # \n/ # \n/ # ls\nbin    dev    etc    hello  home   lib    lib64  proc   root   sys    tmp    usr    var\n/ # pwd\n/\n")])])]),t("p",[s._v("参考：https://mp.weixin.qq.com/s/6bgtD0Aer6-3u4u9jWBBhw")])])}),[],!1,null,null,null);a.default=n.exports}}]);