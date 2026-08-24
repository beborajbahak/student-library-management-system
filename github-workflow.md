# GitHub Workflow

This document records the version control practices used for this project, supporting Chapter 7 (Software Configuration and Version Management) of the final report.

## Branching Strategy
- `main` — stable, working version of the application
- `feature/*` — used for isolated development work before merging back into `main`

## Commit History
The project was built through multiple incremental commits rather than a single upload, covering:
- Initial project setup (Vite + React scaffold)
- Requirements documentation
- UML diagram additions
- React component development (Dashboard, Manage Books, Issue/Return, etc.)
- Testing documentation
- Final report and project documentation

See commit history: `git log --oneline --graph --all`

## Feature Branch & Pull Request
A feature branch was created to demonstrate basic Git workflow:
```bash
git checkout -b feature/documentation-update
git add .
git commit -m "Update documentation and add missing evidence files"
git push -u origin feature/documentation-update
```
This branch was then opened as a pull request on GitHub and merged into `main`.

- PR link: *[insert PR URL once created]*
- Merge commit: *[insert commit hash once merged]*

## Repository Structure