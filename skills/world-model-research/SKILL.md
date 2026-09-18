---
name: world-model-research
description: Maintain a sourced Chinese world-model company, product, team, and talent map. Use when updating the research website, adding companies or people, classifying world-model applications, or preparing a GitHub-ready release.
metadata:
  short-description: Update the world-model research map
---

# World Model Research

Use this skill for updates to the standalone talent map in `work/world-model-talent-map-expanded.html`.

## Information model

Keep three levels separate:

1. Application schools: interactive virtual environments, generative content and video, spatial intelligence and 3D worlds, embodied intelligence and robotics.
2. Cross-cutting capabilities: memory and long-term consistency, multimodal control, distillation/low-step inference, and spatial layout/editability.
3. Team/company nodes: team identity, products, business model, people, sources, and evidence status.

Do not turn a cross-cutting engineering problem into a standalone market category. A team may belong to multiple application schools.

## Evidence rules

- `verified`: an official personal, company, or institutional page confirms the role or profile.
- `project`: a paper, repository, official project page, or author list confirms the project relationship.
- `pending`: media, search snippets, company directories, or indirect organizational evidence only.

Do not infer nationality, ethnicity, employment, authorship, or team reporting lines from a name. Record Chinese background only when education, Chinese institution employment, Chinese company affiliation, or a Chinese-language public profile is verifiable. Keep company ownership and project authorship separate.

## Company updates

For each new company or team, capture:

- business and customer/use case;
- product, model, API, open-source release, or research preview;
- how the world model is used;
- commercialization entry point;
- public status and last verification date;
- primary source URL and any secondary source used for context.

Use the `companyProfiles` array for business/product facts and `teams`/`teamProfiles` for technical and talent facts. Avoid duplicating long prose between these structures.

## Update workflow

1. Read the existing source and preserve user edits.
2. Add primary sources before adding a node; use secondary reporting only to fill context and mark it accordingly.
3. Add the node to an application school only when its public evidence supports that relationship.
4. Put memory, long-video consistency, multimodal control, and acceleration in `capabilityLayers` when they describe a shared technical layer.
5. Run `node work/check-html.cjs work/world-model-talent-map-expanded.html`.
6. Run `node work/render-expanded.cjs` to refresh `outputs/world-model-talent-map.html`.
7. Inspect the output for the new company/product name, iframe popup permissions, and valid links.

## Publishing boundary

The project can be packaged for GitHub with the source, standalone output, README, and this skill. Do not push, create a remote repository, or publish external content unless the user has provided or confirmed the target remote and explicitly asked for the push. Before publishing, inspect `git remote -v`, review `git status`, and use a normal commit with a descriptive message.

For field definitions and the recommended release checklist, read [references/data-schema.md](references/data-schema.md).
