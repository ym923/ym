# 杨蔓个人简历网站

这是一个静态个人作品集网站，内容来自 `杨蔓-简历（技术简历26.9.26）.docx`。

直接打开 `dist/index.html` 即可预览。项目卡片和实习经历支持点击查看详情。

建议通过静态服务器预览（详情页使用根路径）：`python -m http.server 4173 --directory site/dist`。

全站字体采用 Times New Roman + Noto Serif SC，与 micdz.cn/cn 的字体组合一致。中文可变字体以 WOFF2 本地加载，开源许可位于 `dist/fonts/OFL.txt`。新增文字后，使用 Google Fonts 官方仓库的 NotoSerifSC[wght].ttf 运行 `python site/scripts/subset-font.py 字体文件路径` 更新字体子集（需要 `fonttools[woff]`）。缺失字符会回退到系统宋体。

Stand By Me 的技术、实验表与界面截图来自提供的项目材料。93.15% / 0.926 是表 5-1 的归一化消融实验结果；96.5% 是另一组最终分类器测试，页面分别说明口径。响应耗时写明验收阈值及通过结论，没有当作逐项实测均值。配图只包含应用界面，不发布原始 PDF。

`posts/stand-by-me-notes/` 仅用于旧链接重定向。照片保留手动切换，不自动播放。
