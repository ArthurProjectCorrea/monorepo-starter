// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightNextjsTheme from 'starlight-nextjs-theme'

// https://astro.build/config
export default defineConfig({
  server: { port: 3002 },
  integrations: [
	starlight({
	  plugins: [starlightNextjsTheme()],
	  title: 'Documentação Monorepo',
	  social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
	  sidebar: [
		{
		  label: 'Visão Geral',
		  items: ['overview', 'dev-checklist']
		},
		{
		  label: 'Monorepo',
		  items: [
			'monorepo',
			'monorepo/estrutura',
			'monorepo/configuracoes',
			'monorepo/comandos',
			'monorepo/novos-comandos',
			'monorepo/automacoes',
			'monorepo/github-configs',
			'monorepo/changeset',
			'monorepo/boas-praticas',
			'monorepo/faq'
		  ]
		},
		{
		  label: 'Apps',
		  items: ['frontend-structure', 'backend-structure']
		},
		{
		  label: 'Pacotes & Configs',
		  items: [
			'packages/ui',
			'packages/eslint-config',
			'packages/tailwind-config',
			'packages/typescript-config',
			'packages/scripts'
		  ]
		},
		{
		  label: 'Contribuição',
		  items: ['contributing', 'github-token']
		}
	  ],
	}),
  ],
});
