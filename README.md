# Sabai｜泰语口语与流行词

面向中文学习者的泰语口语学习小应用。打开即用，无需账号；部署到 HTTPS 静态网站后支持添加到主屏幕和离线缓存。

**在线使用：** https://2123801245-coder.github.io/sabai-thai/

| 扫码使用（网页版） | 扫码下载（离线 ZIP） |
| :---: | :---: |
| ![扫码使用](assets/sabai-扫码使用.png) | ![扫码下载](assets/sabai-下载安装包.png) |

Gitee 镜像：https://gitee.com/zhbedwin/sabai-thai
下载包（固定到 v1.0.0 标签，不用会在版本间漂移的 latest）：https://github.com/2123801245-coder/sabai-thai/releases/tag/v1.0.0

## 版本

v1.0.0 ｜ 更新日期 2026-10-23 ｜ 首版发布

## 目录

- `index.html`：主应用，词卡、词频索引、自建词条
- `resources/`：8 册资料（7 册语言技能 + 1 册文化附录）、离线检索站 `site/index.html`、词频数据 `phupha-wordfreq.js`、两份 PDF
- `fonts/`：Sarabun 泰文字体（400 / 500 / 600 / 700）与 OFL 许可全文 `OFL-Sarabun.txt`
- `assets/`：二维码与商城截图
- `icon.svg`、`icon-192.png`、`icon-512.png`、`apple-touch-icon.png`：应用图标
- `sw.js`：离线缓存；`manifest.webmanifest`：安装配置
- `DESIGN.md`：界面设计规则与交付物清单；`商品页文案.md`：对外商品页文案

## 产品内容

- 66 条日常口语、语气词、聊天反应和泰网热词（其中 14 条为泰网热词，整理于 2026 年 10 月，会随社群变化在更新中替换）
- 泰语、罗马音、中文释义、使用提醒与例句
- 按场景筛选、关键词搜索、泰语朗读
- 收藏表达、记录学习进度、按 1/2/4/7/15/30 天间隔递进的复习计划
- 自建词条，并导出 JSON 备份；可在换设备后导入恢复
- 内置 8 册深度学习资料（7 册语言技能 + 1 册文化附录）、1427 条离线可搜索摘录和两份可打印 PDF 练习资料
- 内置 62,264 条 Phupha 泰语网页词频索引，可离线搜索并逐条加入待补语境词卡；数据源不含释义与例句，学习者可补齐后保存为个人词卡
- 卡片分两类，界面上分开显示：66 条成品词卡（泰文、罗马音、中文释义、例句齐全）；词频索引里的待补语境词卡（只有泰文与语料计数，释义、罗马音、例句由学习者补充）
- 完整词频数据随应用交付；来源为 PyThaiNLP / Phupha-Word-freq（Common Crawl 2025-07，CC0）。语料频率不代表日常口语频率或网络热度
- 手机和桌面自适应；数据保存在当前设备
- 内置 Sarabun 泰文圈体无衬线字体（400 / 500 / 600 / 700）（SIL Open Font License 1.1）；部署后首次访问会缓存页面和字体

## 使用与发布

1. 直接打开 `index.html` 可以使用词卡、完整内置词频索引和本地资料库；发音使用设备的泰语语音引擎；设备没有泰语语音时，该功能不可用。
2. 发布网页商品时，将整个 `thai-sabai` 文件夹部署到支持 HTTPS 的静态托管；首次在线访问后会缓存应用、资料册和 PDF，并可添加到主屏幕。
3. 发布下载包时，将整个文件夹压缩为 ZIP；保留 `fonts/`、`sw.js`、`manifest.webmanifest` 和图标文件（`icon.svg`、`icon-192.png`、`icon-512.png`、`apple-touch-icon.png`）。
4. 每次发布新版本必须同步修改 `sw.js` 第一行的 `CACHE` 常量（当前为 `sabai-v1.0.0`）。这个值保持不变的话，已经访问过的用户会继续使用旧缓存，看不到新版本。

## 资料库与词频来源

- `resources/site/index.html`：从 `thai-reference-books/out/site/index.html` 打包的离线搜索站，含 8 册共 1427 条摘录；相对路径所需的 8 个 HTML 原页同步放在 `resources/`。
- `resources/泰语学习资料全套.pdf`、`resources/练习与错题本.pdf`：来自项目 `thai-reference-books/out/`。
- 高频参考：PyThaiNLP 的 [Phupha-Word-freq](https://github.com/PyThaiNLP/Phupha-Word-freq)，网页语料基于 Common Crawl 2025-07；README 说明数据集采用 CC0。完整 62,264 条词频数据已经打包在 `resources/phupha-wordfreq.js`，无需买家访问 GitHub 或联网查询。

## 热词整理参考

- Time Out Thailand，2026-07-21：泰国年轻人口语词与场景说明。
- Kapook，2026-09-14：2026 年社交媒体热词整理。

热词区本期收录 14 条，整理于 2026 年 10 月；网络词义和热度会变化，建议定期复核。

## 商品文案

对外商品页文案只在 `商品页文案.md` 维护，本文不再重复，避免两处不一致。
