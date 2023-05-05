// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const path = require("path");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "My Usher Site", // INITIAL TODO
	tagline: "My project will solve this the best way possible.", // INITIAL TODO
	favicon: "img/favicon.ico", // INITIAL TODO don't forget to change your favicon for this project, if needed

	url: "https://docs.some-project.usher.so", // INITIAL TODO
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "usher",
	projectName: "reponame", // INITIAL TODO Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},
	plugins: [
		"docusaurus-plugin-sass",
		"@docusaurus/plugin-content-pages",
		"@docusaurus/plugin-debug",
		"@docusaurus/plugin-sitemap",
		[
			"@docusaurus/plugin-content-docs",
			{
				routeBasePath: "/",
				sidebarPath: require.resolve("./sidebars.js"),
				// Please change this to your repo.
				// Remove this to remove the "edit this page" links.
				editUrl:
					"https://github.com/usherlabs/some-usher-project/tree/main/packages/create-docusaurus/templates/shared/" // INITIAL TODO
			}
		],
		// This plugin enables tailwind
		async function myPlugin(context, options) {
			return {
				name: "docusaurus-tailwindcss",
				configurePostCss(postcssOptions) {
					// Appends TailwindCSS and AutoPrefixer.
					postcssOptions.plugins.push(require("tailwindcss"));
					postcssOptions.plugins.push(require("autoprefixer"));
					return postcssOptions;
				}
			};
		}
	],
	// algolia: { // INITIAL TODO to activate algolia search. Fill according to your needs
	//     appId: '',
	//     apiKey: '',
	//     indexName: '',
	//     contextualSearch: true,
	// },

	themes: [
		[
			path.resolve(__dirname, "./node_modules/@docusaurus/theme-classic"),
			{
				customCss: [
					require.resolve(
						"./node_modules/modern-normalize/modern-normalize.css"
					),
					require.resolve("./src/styles/custom.scss")
				]
			}
		]
		// path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'), // INITIAL TODO if needed to activate algolia
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// INITIAL TODO: Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				hideOnScroll: true,
				logo: {
					alt: "Site Logo", // no need to change, it's the default for accessibility reasons
					src: "logos/UsherLearnLogomark.svg", // INITIAL TODO
					srcDark: "logos/UsherLearnLogomark_drk.svg", // INITIAL TODO
					target: "_self",
					href: "/"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "intro",
						position: "left",
						label: "Docs"
					},
					{
						type: "docSidebar",
						sidebarId: "dev-guide",
						label: "Dev Guide",
						position: "left"
					},

					// Right side starts here
					{
						type: "search",
						position: "right"
					},
					{
						label: "Stay tuned",
						position: "right",
						items: [
							{
								href: "https://usher.so",
								label: "Our Homepage",
								target: "_blank",
								rel: null
							},
							{
								href: "https://usher.so/blog",
								label: "Blog",
								target: "_blank",
								rel: null
							}
						]
					},
					{
						// INITIAL TODO may change if you would want different action from user
						type: "custom-cta",
						position: "right",
						label: "Register your interest",
						href: "https://pages.usher.so/register-interest"
					},
					{
						type: "custom-separator",
						position: "right"
					},
					{
						type: "custom-iconLink",
						position: "right",
						icon: {
							alt: "twitter logo",
							src: `/logos/twitter.svg`,
							href: "https://twitter.com/usher_web3",
							target: "_blank"
						}
					},
					{
						type: "custom-iconLink",
						position: "right",
						icon: {
							alt: "github logo",
							src: `/logos/github.svg`,
							href: "https://github.com/usherlabs/[thisProject]", // INITIAL TODO
							target: "_blank"
						}
					},
					{
						type: "custom-iconLink",
						position: "right",
						icon: {
							alt: "discord logo",
							src: `/logos/discord.svg`,
							href: "https://go.usher.so/discord",
							target: "_blank"
						}
					}
				]
			},
			colorMode: {
				defaultMode: "light"
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
