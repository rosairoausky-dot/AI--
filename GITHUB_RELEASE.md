# GitHub 发布清单

当前项目已经包含可发布的独立网页、可编辑源文件、验证脚本、研究数据说明和 `world-model-research` skill。

由于当前工作区的 `.git` 目录没有可写 Git 元数据，本文件提供在可写目录中执行的发布命令。命令不会覆盖已有文件：先确认目录和远端，再执行初始化。

```powershell
Set-Location 'C:\Users\zlw\Documents\Codex\2026-07-21\1-happyoyster-2-joy-future-academy'
node work/check-html.cjs work/world-model-talent-map-expanded.html
node work/render-expanded.cjs

# 如果当前目录已有有效 Git 仓库，跳过 git init
git status
git remote -v

# 首次发布时，将 URL 替换为你拥有权限的 GitHub 仓库
git init
git add README.md GITHUB_RELEASE.md outputs work skills
git commit -m "Update world model company product map"
git branch -M main
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

建议启用 GitHub Pages 时将 `outputs/world-model-talent-map.html` 复制为发布分支的 `index.html`，或者在仓库根目录增加一个入口页链接到该文件。网页的外部资料链接使用新标签页打开，备注只保存在访问者自己的浏览器本地存储中。

发布前应检查：

- 公司业务字段和产品名称都有来源链接；
- 间接关联保持 `pending` 状态；
- `node work/check-html.cjs` 和 `node work/render-expanded.cjs` 均成功；
- GitHub 远端属于项目所有者，且推送目标已由所有者确认。
