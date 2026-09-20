# World Model Talent Map

中文世界模型公司、产品、团队与人才地图，覆盖交互式虚拟环境、生成式内容与视频、空间智能与 3D 世界、具身智能与机器人，以及记忆、控制、加速和空间布局等跨流派能力。

## 在线访问

- [直接打开世界模型人才地图（GitHub Pages）](https://rosairoausky-dot.github.io/AI--/outputs/world-model-talent-map.html)
- [查看 HTML 源文件](https://github.com/rosairoausky-dot/AI--/blob/main/outputs/world-model-talent-map.html)

如果 GitHub Pages 尚未启用，请先在仓库的 `Settings` → `Pages` 中选择 `main` 分支和根目录发布。网页也可以下载后直接用浏览器打开。

## Files

- `outputs/world-model-talent-map.html`: standalone page for sharing or hosting.
- `work/world-model-talent-map-expanded.html`: editable source fragment.
- `work/check-html.cjs`: syntax and structure validation.
- `work/render-expanded.cjs`: refreshes the standalone output.
- `skills/world-model-research/`: reusable Codex skill for future updates.

## Local use

Open `outputs/world-model-talent-map.html` directly, or serve the project directory with any static HTTP server. External source links open in a new tab. Notes and color labels are saved in the browser's local storage.

## Update

```powershell
node work/check-html.cjs work/world-model-talent-map-expanded.html
node work/render-expanded.cjs
```

When adding research, use primary sources where possible and mark indirect associations as `pending`. The page distinguishes application schools from cross-cutting capabilities so the same team can be compared across product contexts without treating every engineering challenge as a separate market.

## Scope

This is a public-source research map, not a complete employment directory or investment recommendation. Company claims, media metrics, project authorship, and current employment should be checked against the linked source and its verification date.

## GitHub release

Review `git status`, inspect `git remote -v`, run the validation commands, then commit the source, output, README, and skill. Push only to a remote supplied or confirmed by the repository owner.
