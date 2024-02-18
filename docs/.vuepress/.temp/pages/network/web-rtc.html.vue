<template><div><h1 id="webrtc" tabindex="-1"><a class="header-anchor" href="#webrtc" aria-hidden="true">#</a> WebRTC</h1>
<p><strong>WebRTC 是一项实时通信技术（谷歌开源项目），允许网络应用或站点在不借助中间媒介的情况下，建立浏览器之间点对点（Pree-to-Pree）的连接，实现视频流/音频流或者其他任意数据的传输</strong></p>
<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2>
<ol>
<li><code v-pre>跨平台</code>： 可以在 web、Android、iOS、Windows、macos、linux 环境下运行</li>
<li><code v-pre>实时传输</code></li>
<li><code v-pre>音视频引擎强大</code>： 可直接提供实时音视频通信功能</li>
<li><code v-pre>免插件</code></li>
<li><code v-pre>免费</code></li>
<li><code v-pre>主流浏览器</code></li>
</ol>
<h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2>
<ol>
<li>音视频会议</li>
<li>在线教育</li>
<li>即时通信工具</li>
<li>游戏</li>
<li>人脸识别</li>
</ol>
<h2 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h2>
<p><strong>WebRTC 的架构包括 web 应用、web api 和 本地 c++ api 层</strong></p>
<ol>
<li>
<font color=green>Web 应用</font>：开发者开发的程序，可以基于集成WebRTC的浏览器提供的 Web api 开发基于视频、音频的实时通信应用</li>
<li>
<font color=green>Web API</font>: 面向第三方开发者的WebRTC标准api,使开发者可以容易地开发出类似于网络视频聊天的Web应用</li>
<li>
<font color=green>C++ API 层</font>： 使浏览器厂商容易实现WebRTC标准的Web API, 抽象地对数字信号过程进行处理</li>
</ol>
<h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理" aria-hidden="true">#</a> 工作原理</h2>
<ol>
<li>
<font color=green>获取本地媒体流</font>： WebRTC 使用浏览器提供的 getUserMedia API,允许用户访问摄像头和麦克风的权限，从而获取其他类型的媒体流，如屏幕共享</li>
<li>
<font color=green>建立对等连接</font>：WebRTC 使用信令服务器（websocket 服务器）来协助建立浏览器之间的对等连接。信令服务器负责处理浏览器之间的通信，包括发现对防、建立连接和传递通信相关的元数据，瓤儿，实际的音频、视频和数据传输时直接在浏览器之间进行的，不通过服务器</li>
<li>
<font color=green>数据传输</font>： 对等连接建立之后，音频、视频和数据就可以在浏览器之间直接传输，而无需经过服务器。这种直接避免了传统服务器中心的发送-接收模式，提供了更高的速度和更低的延迟</li>
<li>
<font color=green>NAT 穿越机制</font>: 由于网络地址转换(NAT)的存在，浏览器之间可能无法直接相互访问，因此,WebRTC 使用 NAT 穿越机制来协助建立连接。这些服务器帮助浏览器找到彼此的网络地址，从而建立连接</li>
<li>
<font color=green>网络候选者协商</font>： WebRTC 还负责选取最佳的网络路径，以确保点对点的稳定性和质量</li>
</ol>
</div></template>


