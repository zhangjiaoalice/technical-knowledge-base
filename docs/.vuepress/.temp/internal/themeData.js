export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"sidebar\":[{\"text\":\"计算机网络\",\"link\":\"/\"},{\"text\":\"浏览器工作原理\",\"link\":\"/browser\"},{\"text\":\"缓存策略\",\"link\":\"/cache\"},{\"text\":\"数据结构与算法\",\"link\":\"/datastruct\"},{\"text\":\"HTML\",\"link\":\"/html\"},{\"text\":\"CSS\",\"link\":\"/css\"},{\"text\":\"javascript\",\"link\":\"/js\"},{\"text\":\"Nodejs\",\"link\":\"/node\"},{\"text\":\"v8\",\"link\":\"/v8\"},{\"text\":\"vue\",\"link\":\"/vue\"},{\"text\":\"react\",\"link\":\"/react\"},{\"text\":\"SSR\",\"link\":\"/ssr\"},{\"text\":\"H5 开发\",\"link\":\"/h5\"},{\"text\":\"微信小程序\",\"link\":\"/miniprogrammer\"},{\"text\":\"uni-app\",\"link\":\"/uni-app\"},{\"text\":\"性能优化\",\"link\":\"/preformance\"},{\"text\":\"前端工程化\",\"link\":\"/tool\"},{\"text\":\"微前端\",\"link\":\"/micro-web\"},{\"text\":\"低代码平台\",\"link\":\"/lower-code\"},{\"text\":\"Docker\",\"link\":\"/docker\"},{\"text\":\"Linux 常用命令\",\"link\":\"/linux-command\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
