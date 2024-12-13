# Contributing to Worktime Tracker

Thank you for considering contributing to **Worktime Tracker**! This guide outlines the process for contributing to the project, whether you want to report bugs, suggest enhancements, or contribute code.

---

## Table of Contents
- [How to Contribute](#how-to-contribute)
- [Code of Conduct](#code-of-conduct)
- [Branching Strategy](#branching-strategy)
- [Issue Reporting](#issue-reporting)
- [Submitting Changes](#submitting-changes)
- [Code Style Guidelines](#code-style-guidelines)
- [Testing](#testing)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Community Support](#community-support)

---

## How to Contribute
1. Fork the repository and clone it locally.
2. Create a new branch for your work (see [Branching Strategy](#branching-strategy)).
3. Make your changes, ensuring they align with the [Code Style Guidelines](#code-style-guidelines).
4. Test your changes (see [Testing](#testing)).
5. Submit a pull request (PR) with a clear description of your changes.

---

## Code of Conduct
This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/). Please ensure that your interactions remain respectful and constructive.

---

## Branching Strategy
We use the following branching strategy:
- **`main`**: Stable and production-ready code.
- **`develop`**: Active development happens here.
- **Feature branches**: `feature/<feature-name>` (e.g., `feature/login`).
- **Bugfix branches**: `bugfix/<issue-name>` (e.g., `bugfix/navbar`).
- **Hotfix branches**: `hotfix/<issue-name>` (e.g., `hotfix/critical-bug`).
- **Release branches**: `release/<version>` (e.g., `release/v1.0`).

---

## Issue Reporting
If you encounter a bug or have a feature request, please open an issue:
1. Use a clear and descriptive title.
2. Provide steps to reproduce (if applicable).
3. Include any relevant logs or screenshots.
4. Tag your issue appropriately (`bug`, `enhancement`, `question`, etc.).

---

## Submitting Changes
1. Follow the [Branching Strategy](#branching-strategy).
2. Commit messages should follow this convention:
   ```
   [Type]: [Short Description]
   ```
   Examples:
   - `feat: add user login functionality`
   - `fix: resolve navbar alignment issue`

3. Push your branch to your forked repository.
4. Submit a pull request (PR) to the `develop` branch.

---

## Code Style Guidelines
- Follow the coding style defined in the repository (e.g., `eslint` or `prettier` for JavaScript).
- Use meaningful variable and function names.
- Add comments where necessary for clarity.
- Write clear and concise documentation for new features.

---

## Testing
- Ensure all new features and bug fixes are covered by unit and/or integration tests.
- Run existing tests using the command:
  ```bash
  npm test
  ```
  Replace with the appropriate testing command for your project.

- Confirm that all tests pass before submitting your PR.

---

## Pull Request Guidelines
1. Ensure your PR targets the correct branch (`develop` or `release/<version>`).
2. Add a clear and concise title and description.
3. Include references to related issues, if applicable (e.g., `Fixes #123`).
4. Ensure your branch is up-to-date with `develop` before opening the PR.
5. Wait for at least one approval and passing CI/CD checks before merging.

---

## Community Support
If you have questions or need help, feel free to:
- Open a discussion in the **Discussions** tab.
- Email us at [srdipu@hotmail.com](mailto:srdipu@hotmail.com).
<!-- - Join our [Slack/Discord community](#). -->

---

We look forward to your contributions! 🎉
