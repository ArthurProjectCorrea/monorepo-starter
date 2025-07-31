# .husky Directory

This directory contains Git hooks managed by [Husky](https://typicode.github.io/husky) to enforce code quality, commit conventions, and automation in the monorepo.

## Purpose

- Automate checks and validations before commits and pushes.
- Enforce commit message conventions and code quality standards.
- Prevent bad commits or broken code from entering the repository.

## Common Hooks

- `pre-commit`: Runs lint, tests, or formatting checks before allowing a commit.
- `commit-msg`: Validates commit messages against the project's conventional commit rules and scope logic.
- `pre-push`: Ensures the code builds and passes tests before pushing to remote.

## Usage

- Husky hooks are installed automatically when you run `pnpm install` or `npm install` in the project root.
- Hooks are configured via shell scripts in this directory and can be customized as needed.

## Best Practices

- Never bypass hooks unless absolutely necessary (use `git commit --no-verify` only in exceptional cases).
- Keep hook scripts simple and fast to avoid slowing down development.
- Update this README and hook scripts whenever validation logic changes.

## References

- [Husky Documentation](https://typicode.github.io/husky)
- Project commit and scope rules: `.github/instructions/commit.instructions.md`
