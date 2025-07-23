---
title: Como gerar um token pessoal (PAT) para automações no GitHub Actions
description: Guia para gerar e configurar um token pessoal (PAT) no GitHub para automações CI/CD.
---

# Como gerar um token pessoal (PAT) para automações no GitHub Actions

## Passo a passo

1. **Acesse seu perfil no GitHub**
   - Clique na sua foto (canto superior direito) > Settings.

2. **Vá para Developer settings**
   - No menu lateral, clique em "Developer settings".

3. **Acesse Personal access tokens**
   - Clique em "Personal access tokens" > "Tokens (classic)".

4. **Clique em "Generate new token"**
   - Escolha "Generate new token (classic)".

5. **Preencha as informações**
   - Nome: `GH_PAT` ou outro identificador.
   - Expiração: escolha conforme sua necessidade.

6. **Marque os escopos necessários**
   - **repo** (Full control of private repositories)
   - **workflow** (Update GitHub Action workflows)
   - Opcional: `write:packages`, `read:packages` (para publicar/download de pacotes)

7. **Clique em "Generate token"**
   - Copie o token gerado imediatamente (não será exibido novamente).

8. **Adicione o token como secret no repositório**
   - No repositório, vá em Settings > Secrets and variables > Actions.
   - Clique em "New repository secret".
   - Valor: cole o token gerado.

## Observações

**Referência oficial:**

# Como gerar um token pessoal (PAT) para automações no GitHub Actions

## Passo a passo

1. **Acesse seu perfil no GitHub**
   - Clique na sua foto (canto superior direito) > Settings.

2. **Vá para Developer settings**
   - No menu lateral, clique em "Developer settings".

3. **Acesse Personal access tokens**
   - Clique em "Personal access tokens" > "Tokens (classic)".

4. **Clique em "Generate new token"**
   - Escolha "Generate new token (classic)".

5. **Preencha as informações**
   - Nome: `GH_PAT` ou outro identificador.
   - Expiração: escolha conforme sua necessidade.

6. **Marque os escopos necessários**
   - **repo** (Full control of private repositories)
   - **workflow** (Update GitHub Action workflows)
   - Opcional: `write:packages`, `read:packages` (para publicar/download de pacotes)

7. **Clique em "Generate token"**
   - Copie o token gerado imediatamente (não será exibido novamente).

8. **Adicione o token como secret no repositório**
   - Salve.

## Observações

- O escopo `repo` já inclui permissões para push, commit, branch, etc.
- Não compartilhe seu token, ele dá acesso total ao seu repositório.
- Se o repositório for de uma organização, confira se há restrições extras para tokens pessoais.

---

**Referência oficial:**

- [GitHub Docs: Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
