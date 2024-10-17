import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Xceed UI Technologies for .NET diodottt',
  tagline: 'Xceed UI Technologies for .NET documentation',
  favicon: 'img/logox.ico',

  // Set the production url of your site here
  url: 'https://xceedsoftware.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/xceed-doc-ui/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xceedsoftware', // Usually your GitHub org/user name.
  projectName: 'xceed-doc-ui', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'datagrid',
        path: 'datagrid',
        routeBasePath: 'datagrid',
        sidebarPath: './sidebardatagrid.ts',
        // ... other options
      },
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // Replace with your project's social card
    image: 'img/xceed_front.png',
    colorMode: {
      defaultMode: 'dark', // o 'dark'
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      style: 'primary', // color del navbar,
      title: 'Xceed documentation center',
      logo: {
        alt: 'Xceed Logo',
        src: 'img/xceed_logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Toolkit Plus for WPF',
        },
        { to: '/datagrid/welcome', label:'DataGrid for WPF', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {
          href: 'https://github.com/xceedsoftware/wpf-ui',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `All rights reserved 2020 - ${new Date().getFullYear()} © Xceed Software Inc.`,
    },    
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['csharp', 'java', 'python']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
