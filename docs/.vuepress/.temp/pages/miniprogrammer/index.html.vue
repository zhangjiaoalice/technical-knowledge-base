<template><div><h1 id="微信小程序" tabindex="-1"><a class="header-anchor" href="#微信小程序" aria-hidden="true">#</a> 微信小程序</h1>
<h2 id="微信小程序开发和普通网页开发有什么区别" tabindex="-1"><a class="header-anchor" href="#微信小程序开发和普通网页开发有什么区别" aria-hidden="true">#</a> 微信小程序开发和普通网页开发有什么区别</h2>
<p><em>小程序主要开发语言是javascript, 小程序的开发痛普通网页的开发具有很大的相似性</em></p>
<ol>
<li>
<font color=red>运行环境: </font> <ul>
<li>微信小程序运行在微信环境中，这意味着微信小程序具有更高的集成度和便利性，但是同时也限制了其功能和访问权限，渲染层和逻辑层是分开的</li>
<li>普通网页运行在浏览器环境中，网页开发的渲染线程和js简本线程时互斥的</li>
</ul>
</li>
<li>
<font color=red>开发语言: </font> <ul>
<li>微信小程序主要使用的是 WXML、WXSS、WXS，这是基于 XML 和 CSS 的语言</li>
<li>普通网页开发主要使用 HTML、CSS</li>
</ul>
</li>
<li>
<font color=red>API 差异: </font><ul>
<li>微信小程序提供了很多特定的API，如微信登陆，微信支付，地理位置等api</li>
<li>普通网页开发可以使用更广泛的 Web API</li>
</ul>
</li>
<li>
<font color=red>更新机制: </font><ul>
<li>微信小程序发布时，需要经过后台审核通过才能更新，者使得更新和维护变得相对复杂</li>
<li>普通网页开发可以随时进行发布</li>
</ul>
</li>
<li>
<font color=red>性能优化: </font><ul>
<li>微信小程序需要考虑更多的性能优化问题，如代码拆分、按需加载、懒加载</li>
<li>普通网页开发这些可能都不是需要备首要考虑的问题</li>
</ul>
</li>
<li>
<font color=red>安全性: </font><ul>
<li>由于小程序具有更改的集成度和访问权限，因此安全性问题更加重要，开发者需要更加关注数据安全和用户隐私保护</li>
</ul>
</li>
<li>
<font color=red>跨平台开发: </font><ul>
<li>小程序可以在多个平台上运行，如微信、支付宝等。</li>
<li>普通网页开发则需要针对不同的浏览器和平台进行适配和优化</li>
</ul>
</li>
</ol>
<font color=green>微信小程序运行环境:</font><table>
<thead>
<tr>
<th>运行环境</th>
<th>逻辑层</th>
<th>渲染层</th>
</tr>
</thead>
<tbody>
<tr>
<td>IOS</td>
<td>JavascriptCore</td>
<td>WKWebView</td>
</tr>
<tr>
<td>安卓</td>
<td>V8</td>
<td>chromium 定制内核</td>
</tr>
<tr>
<td>小程序开发者工具</td>
<td>NWJS</td>
<td>Chrome WebView</td>
</tr>
</tbody>
</table>
<h2 id="小程序框架系统" tabindex="-1"><a class="header-anchor" href="#小程序框架系统" aria-hidden="true">#</a> 小程序框架系统</h2>
<p><em>微信小程序框架系统分为 <strong><font color=green>逻辑层</font></strong> 和 <strong><font color=green>渲染层</font></strong></em></p>
<h4 id="小程序通信模型" tabindex="-1"><a class="header-anchor" href="#小程序通信模型" aria-hidden="true">#</a> 小程序通信模型</h4>
<p><img src="@source/miniprogrammer/image.png" alt="小程序架构图"></p>
<ol>
<li>小程序的 渲染层和逻辑层分别有两个线程管理
<ul>
<li>渲染层的界面使用了 WebView 进行渲染</li>
<li>逻辑层使用 JSCore 线程运行js脚本</li>
</ul>
</li>
<li>两个线程之间的通信主要通过 <font color=red>微信客户端(Native)</font> 进行通信</li>
<li>Native 客户端提供了 数据传输的事件系统</li>
<li>小程序框架核心是 <code v-pre>响应的事件绑定系统</code>。在逻辑层修改数据的时候，通过Native通信 ，视图层也会做出响应的变化</li>
</ol>
<h4 id="逻辑层" tabindex="-1"><a class="header-anchor" href="#逻辑层" aria-hidden="true">#</a> 逻辑层</h4>
<p><em>开发者写的所有代码都会打包成一份js文件，并且在小程序启动的时候运行，直到小程序销毁。这一系列的行为类似于ServiceWorker, 所以逻辑层也被称为App Service</em></p>
<ol>
<li>在JS 的基础上，新增了一些功能，以便于小程序的开发
<ul>
<li>增加了 <font color=red>App</font> 方法和 <font color=red>Page</font> 方法，进行<code v-pre>程序注册</code>和<code v-pre>页面注册</code></li>
<li>增加了 <font color=red>getApp</font> 方法 和 <font color=red>getCurrentPages</font> 方法，分别用来获取 APP 实例和当前页面栈</li>
<li>提供丰富的 API，如微信用户数据，扫一扫、支付等微信特有的能力</li>
<li>提供模块化的能力，每个页面都有独立的作用域</li>
</ul>
</li>
</ol>
<h4 id="视图层" tabindex="-1"><a class="header-anchor" href="#视图层" aria-hidden="true">#</a> 视图层</h4>
<ol>
<li>WXML(WeiXin Markup language): 描述页面结构</li>
<li>WXS(WeiXin Script): 小程序的一套脚本语言，结合 WXML ，可以构建出页面的结构
<ul>
<li>wxs 是内联在WXML 中的脚本段（页面渲染），通过 WXS 可以在模版中内联少量处理脚本，丰富模板的预处理能力</li>
<li>还能用来编写简单的 WXS 事件响应函数（数据处理）</li>
<li>使用 wsx 可以减少事件通信次数</li>
</ul>
</li>
<li>WXSS(WeiXin Style Sheet): 描述页面样式</li>
</ol>
<h4 id="事件系统-通信" tabindex="-1"><a class="header-anchor" href="#事件系统-通信" aria-hidden="true">#</a> 事件系统（通信）</h4>
<ul>
<li>事件是视图层和逻辑层的通讯方式</li>
<li>事件可以将用户的行为反馈到逻辑层处理</li>
<li>事件可以绑定到组件上，当触发事件时，就会执行逻辑层中对应事件的处理函数</li>
<li>事件对象可以携带额外信息，如 id、dataset、touches</li>
</ul>
<hr>
<ol>
<li>事件分类
<ul>
<li>冒泡事件</li>
<li>非冒泡事件</li>
</ul>
</li>
</ol>
</div></template>


