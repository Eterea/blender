# How to add this to Eterea/blender

1. Copy these into the repo root, keeping the folder structure:
   - mkdocs.yml
   - requirements.txt
   - docs/  (index.md, addons.md, keymaps.md, links.md, tips.md, stylesheets/extra.css)
   - .github/workflows/deploy.yml

2. You can delete the old blender_*.html files from the repo root once the new site is live (they're superseded by docs/*.md).

3. Commit and push with GitHub Desktop, same as always.

4. One-time only: go to Settings > Pages in the repo, and under "Build and deployment" change
   Source from "Deploy from a branch" to "GitHub Actions". Nothing else needs to change.

5. Wait ~1 minute after the push, then check the "Actions" tab for the build. Once green, the
   site is live at https://eterea.github.io/blender/ with the new theme.

From then on: edit the .md files in Oh My MarkText as always, push with GitHub Desktop, and the
site rebuilds and republishes automatically on every push. No local build step needed.
