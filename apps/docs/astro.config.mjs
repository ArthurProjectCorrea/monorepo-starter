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
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
		  items: [
			// Example Guide removido pois o arquivo não existe mais
		  ],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
