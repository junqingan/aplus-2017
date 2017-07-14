### ⊙ 目录结构

```

├─ dist/                                # 生成的开发环境的文件
├─ pages/                               # 用模块拼装的完整页面(静态html文件)
├─ src/									#静态资源
│   ├─ assets/								#静态素材(img png sprite icon)
│   ├─ modules/									#静态样式表 [具体的模块文件，目录名即模块名]
│   ├─ less/									#需要合并的min.less文件 (每个页面引用的单独less,编译后打包到dist目录的同名css文件供页面引用)
│   ├─ js/										```
│       ├─ 										...
│       ├─ 										...
│       ├─ 										...
│       ├─ 										...
│ 
├─ package.json                         # 项目依赖配置文件
├─ READEME.md                           # 说明文档
├─ .gitignore                           # 忽略文件


> 安装：npm install

> 本地服务：gulp web

> 开发、测试环境：gulp                   # 监控modules目录下的less文件
