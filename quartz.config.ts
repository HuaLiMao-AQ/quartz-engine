import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "HuaLiMao-AQ的博客",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "zh-CN",
    baseUrl: "blog.cat-boy.cn",
    ignorePatterns: ["private", "templates", "CS/Templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e5e7eb",
          gray: "#9ca3af",
          darkgray: "#374151",
          dark: "#111827",
          secondary: "#4f46e5", // Indigo 600
          tertiary: "#818cf8",  // Indigo 400
          highlight: "rgba(79, 70, 229, 0.10)",
          textHighlight: "#fef08a88",
        },
        darkMode: {
          light: "#0a0a0a", // 深空黑
          lightgray: "#1c1c1c",
          gray: "#52525b",
          darkgray: "#d4d4d8",
          dark: "#fafafa",
          secondary: "#818cf8", // 发光星际紫
          tertiary: "#4f46e5",
          highlight: "rgba(129, 140, 248, 0.15)",
          textHighlight: "#b3ebf288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.Description(),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
        enableYouTubeEmbed: true,
        enableVideoEmbed: true,
        enableCheckbox: true,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
      }),
      Plugin.TableOfContents(),
      Plugin.Latex({
        renderEngine: "katex",
        customMacros: {
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
        },
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
      Plugin.Favicon(),
    ],
  },
}

export default config
