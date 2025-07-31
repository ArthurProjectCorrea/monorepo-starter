// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  server: { port: 3002 },

  integrations: [
	starlight({
	  title: 'Documentação Monorepo',
	  social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
	  sidebar: [
		
		
	  ],
	}),
  ],
});
