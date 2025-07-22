## [1.1.5](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.1.4...v1.1.5) (2025-07-22)


### Bug Fixes

* **workflow:** garante PR único por execução usando sufixo github.run_id no branch temporário ([49e8e67](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/49e8e671578bcb20aeb6b04815dccd1ab6ae3bff))

## [1.1.4](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.1.3...v1.1.4) (2025-07-22)


### Bug Fixes

* **workflow:** remove push-to-fork para evitar erro e usar padrão da action ([5b479c5](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/5b479c522708d4e4233fbb5b03528238a939046c))

## [1.1.3](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.1.2...v1.1.3) (2025-07-22)


### Bug Fixes

* **workflow:** força criação do PR no repositório principal (push-to-fork: false) ([8c74c4e](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/8c74c4e186bd1eb960540665fcb30151e2f84798))

## [1.1.2](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.1.1...v1.1.2) (2025-07-22)

### Bug Fixes

- **workflow:** corrige parâmetros do PR Bot e adiciona checkout do branch de origem ([fefa95f](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/fefa95f25f83bfe1df0a006a35d5ae90392830cc))

## [1.1.1](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.1.0...v1.1.1) (2025-07-22)

### Bug Fixes

- **setup:** impede execução do setup com alterações não commitadas e garante robustez do fluxo ([af285b4](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/af285b49eb1d1ab4cdd820a2643d278506139508))

# [1.1.0](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.0.1...v1.1.0) (2025-07-22)

### Features

- **bot:** adiciona workflow para criação automática de PRs via bot ([f11d858](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/f11d858ded500cc3c2002353889a9ac61d07d14c))

## [1.0.1](https://github.com/ArthurProjectCorrea/monorepo-starter/compare/v1.0.0...v1.0.1) (2025-07-22)

### Bug Fixes

- **setup:** melhorias de robustez no alinhamento e proteção de branches no setup ([a7b2a31](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/a7b2a31660c87b34f6598d082aa77e838333b256))

# 1.0.0 (2025-07-22)

### Bug Fixes

- **ci:** adiciona @nestjs/cli no root para build do api no GitHub Actions ([6b61c68](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/6b61c6846458edbbdc925e8b3fad8ed536c7f5da))
- **release:** adiciona permissões de contents e issues para semantic-release no workflow ([89456b8](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/89456b8b9631120fc1ebd8871106d485ed9c21c6))
- **release:** atualiza Node.js para >=20.8.1 no workflow de release (semantic-release) ([818b3a7](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/818b3a79d2ac97e1d582795a507c726edac7b088))
- **setup:** ajusta proteção da branch dev para não bloquear releases automatizadas ([e2740bb](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/e2740bb808d9b8799c929b89a3b2d73c07ab8c21))
- **setup:** garante remoção e reconfiguração das proteções das branches main e dev no setup ([996b039](https://github.com/ArthurProjectCorrea/monorepo-starter/commit/996b0397edcd0fb5d0ece57c0d3ac8b4b27d3108))
