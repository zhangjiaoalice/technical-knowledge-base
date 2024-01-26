<template><div><h2 id="应该掌握的知识点" tabindex="-1"><a class="header-anchor" href="#应该掌握的知识点" aria-hidden="true">#</a> 应该掌握的知识点</h2>
<h4 id="wxml和wxss" tabindex="-1"><a class="header-anchor" href="#wxml和wxss" aria-hidden="true">#</a> WXML和WXSS：</h4>
<ol>
<li>
<p>如何使用WXML进行页面结构搭建？
WXML 是框架设计的一套标签语言，结合 基础组件、事件系统，可以构建出页面结构</p>
</li>
<li>
<p>WXSS与CSS的区别是什么？</p>
</li>
</ol>
<ul>
<li><code v-pre>平台特性</code>： wxss 主要用于微信小程序，css 主要用于网页开发。虽然在微信小程序中允许使用部分css，但是两者还是存在一定的差异</li>
<li><code v-pre>尺寸单位</code>:
<ul>
<li>WXSS 新增 <font color=red>rpx</font> 单位，这是一种响应式的尺寸单位，可以根据屏幕宽度进行自适应调整</li>
<li>CSS 中使用 <font color=red>px、%、vh/vw</font></li>
<li>规定屏幕宽度为750rpx，在 iPhone6 中，屏幕宽度为375px，共有750个像素，则 750rpx=375px=750像素<font color=red>1rpx = 0.5px = 1物理像素</font></li>
</ul>
</li>
<li><code v-pre>支持的选择器存在差异</code>:
<ul>
<li>目前 WXSS 只支持一下几种选择器:
<ul>
<li>.class</li>
<li>#id</li>
<li>element</li>
<li>element,element</li>
<li>::after</li>
<li>::before</li>
</ul>
</li>
</ul>
</li>
<li><code v-pre>API 和组件</code>:
<ul>
<li>微信小程序提供了丰富的API和组件，如位置、设备信息、网络请求等，这些组件都可以通过WXSS进行样式定制</li>
<li>CSS 很少涉及 微信小程序定制内置组件样式的功能</li>
</ul>
</li>
<li><code v-pre>动态样式</code>:
<ul>
<li>WXSS 允许使用js代码动态设置样式</li>
<li>CSS 通常需要通过外部样式表或者内联样式来设置样式</li>
</ul>
</li>
<li><code v-pre>组件化开发</code>:
<ul>
<li>组件可以拥有自己的样式表</li>
<li>CSS 通常是全局作用</li>
</ul>
</li>
<li><code v-pre>兼容性</code>:
<ul>
<li>CSS 具有更好的跨浏览器兼容性</li>
<li>WXSS 主要针对微信小程序平台</li>
</ul>
</li>
</ul>
<h4 id="组件和api" tabindex="-1"><a class="header-anchor" href="#组件和api" aria-hidden="true">#</a> 组件和API：</h4>
<ol>
<li>微信小程序有哪些常用的组件？</li>
<li>如何使用组件的属性、事件和方法？</li>
<li>微信小程序提供了哪些API，如何使用它们？</li>
<li>数据绑定和事件处理：</li>
<li>如何进行数据绑定？</li>
<li>this.setData方法的作用和使用方式是什么？</li>
<li>如何使用bind和catch方法绑定事件？</li>
</ol>
<h4 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化：</h4>
<ol>
<li>如何进行按需加载来减少首屏加载时间？</li>
<li>如何使用懒加载来延迟加载非可视区域的内容？</li>
<li>如何通过优化网络请求来提高性能？</li>
</ol>
<h4 id="调试和测试" tabindex="-1"><a class="header-anchor" href="#调试和测试" aria-hidden="true">#</a> 调试和测试：</h4>
<ol>
<li>如何使用微信开发者工具进行调试和测试？</li>
<li>如何使用console.log输出调试信息？</li>
<li>如何进行断点调试？</li>
</ol>
<h4 id="安全加固" tabindex="-1"><a class="header-anchor" href="#安全加固" aria-hidden="true">#</a> 安全加固：</h4>
<ol>
<li>如何对敏感操作进行校验？</li>
<li>如何对数据进行加密？</li>
<li>如何防止恶意请求攻击？</li>
</ol>
<h4 id="跨平台开发" tabindex="-1"><a class="header-anchor" href="#跨平台开发" aria-hidden="true">#</a> 跨平台开发：</h4>
<ol>
<li>微信小程序是否支持跨平台开发？</li>
<li>如何在不同平台上进行适配和优化？</li>
</ol>
<h4 id="项目经验" tabindex="-1"><a class="header-anchor" href="#项目经验" aria-hidden="true">#</a> 项目经验：</h4>
<ol>
<li>你过去是如何使用微信小程序进行开发的？</li>
<li>在项目中遇到了哪些问题，如何解决这些问题？</li>
<li>你认为微信小程序在哪些方面还有待改进？</li>
</ol>
<h4 id="未来展望" tabindex="-1"><a class="header-anchor" href="#未来展望" aria-hidden="true">#</a> 未来展望：</h4>
<ol>
<li>你对微信小程序未来的发展有何看法？</li>
<li>你认为微信小程序在哪些方面还有待改进？</li>
</ol>
</div></template>


