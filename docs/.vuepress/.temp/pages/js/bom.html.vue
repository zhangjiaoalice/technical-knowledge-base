<template><div><h1 id="bom-对象" tabindex="-1"><a class="header-anchor" href="#bom-对象" aria-hidden="true">#</a> BOM 对象</h1>
<p>浏览器对象模型（BOM）用于和浏览器进行交互,浏览器默认对象是 window</p>
<h2 id="window-对象下定义的属性" tabindex="-1"><a class="header-anchor" href="#window-对象下定义的属性" aria-hidden="true">#</a> window 对象下定义的属性</h2>
<h3 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> document</h3>
<p>文档对象模型</p>
<h3 id="history" tabindex="-1"><a class="header-anchor" href="#history" aria-hidden="true">#</a> history</h3>
<p>history 对象表示用户访问的URL 数组，通过 history对象，可以加载上一页，下一页或者任何特定的页面</p>
<h4 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h4>
<ol>
<li><code v-pre>length</code>: url 长度</li>
</ol>
<h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h4>
<ol>
<li><code v-pre>forward</code>: 加载下一页</li>
<li><code v-pre>back</code>: 返回上一页</li>
<li><code v-pre>go</code>: 加载给定的页码</li>
</ol>
<hr>
<h3 id="screen" tabindex="-1"><a class="header-anchor" href="#screen" aria-hidden="true">#</a> screen</h3>
<p>screen 对象保存了浏览器的屏幕信息，可用于获取显示屏幕的width、heigt、colorDepth、pixelDepth等</p>
<h4 id="属性-1" tabindex="-1"><a class="header-anchor" href="#属性-1" aria-hidden="true">#</a> 属性</h4>
<ol>
<li><code v-pre>width</code></li>
<li><code v-pre>height</code></li>
<li><code v-pre>availWidth</code>: 可用宽度</li>
<li><code v-pre>availHeight</code>: 可用高度</li>
<li><code v-pre>colorDepth</code>: 颜色深度</li>
<li><code v-pre>pixelDepth</code>: 像素深度</li>
</ol>
<hr>
<h3 id="navigator" tabindex="-1"><a class="header-anchor" href="#navigator" aria-hidden="true">#</a> navigator</h3>
<p>可用于获取浏览器的信息，如： <code v-pre>appName、appCodeName、userAgent</code></p>
<h4 id="属性-2" tabindex="-1"><a class="header-anchor" href="#属性-2" aria-hidden="true">#</a> 属性</h4>
<ol>
<li><code v-pre>appName</code>: 应用名称</li>
<li><code v-pre>appVersion</code>: 应用版本</li>
<li><code v-pre>appCodeName</code>: 返回代码版本</li>
<li><code v-pre>cookieEnabled</code>: 是否启用cookie</li>
<li><code v-pre>userAgent</code>: 用户代理</li>
<li><code v-pre>language</code>: 语言，仅支持Netscap和 firefox</li>
<li><code v-pre>userLanguage</code>: 语言，仅支持IE</li>
<li><code v-pre>plugins</code>: 返回插件，仅支持Netscap和 firefox</li>
<li><code v-pre>systemLanguage</code>: 返回系统语言，仅支持ie</li>
<li><code v-pre>mimeTypes[]</code>: 返回 mime 类型</li>
<li><code v-pre>platform</code></li>
<li><code v-pre>online</code>: 浏览器是否在线</li>
</ol>
<h4 id="方法-1" tabindex="-1"><a class="header-anchor" href="#方法-1" aria-hidden="true">#</a> 方法</h4>
<ol>
<li><code v-pre>javaEnabled</code>: 是否启用java</li>
</ol>
<hr>
<h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h3>
</div></template>


