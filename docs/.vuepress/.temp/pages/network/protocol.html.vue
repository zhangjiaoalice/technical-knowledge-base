<template><div><h1 id="一、网络协议概述" tabindex="-1"><a class="header-anchor" href="#一、网络协议概述" aria-hidden="true">#</a> 一、网络协议概述</h1>
<p>网络协议是计算机网络中进行数据交换而建立的规则、标准或约定的集合。</p>
<ol>
<li>
<p>网络协议三要素：</p>
<ul>
<li>语义</li>
<li>语法</li>
<li>时序</li>
</ul>
</li>
<li>
<p>作用： 确保计算机之间能够进行有效的通信，规定了通信时信息 <font color=red>必须采用的格式和这个格式的意义，以及如何发送和接收数据</font>，以确保数据能可靠的传输到目标地址</p>
</li>
<li>
<p>计算机网络中，不同的协议用于不同的网络层，如 TCP/IP,HTTP,FTP等，这些协议在传输层和网络层中定义</p>
<ul>
<li>网络层协议：<font color=red>IP 协议、ARP协议、RARP协议</font></li>
<li>传输层协议：<font color=red>TCP协议、UD协议</font></li>
<li>应用层协议：<font color=red>HTTP、HTTPS、FTP、POP3、SMTP、SNMP、RDP、NTP、SSH、SIP、Telnet</font></li>
</ul>
</li>
</ol>
<hr>
<h1 id="二、常见的网络协议" tabindex="-1"><a class="header-anchor" href="#二、常见的网络协议" aria-hidden="true">#</a> 二、常见的网络协议</h1>
<h2 id="一-、网络层协议" tabindex="-1"><a class="header-anchor" href="#一-、网络层协议" aria-hidden="true">#</a> &lt;一&gt;、网络层协议</h2>
<h3 id="_1-1-ip-协议" tabindex="-1"><a class="header-anchor" href="#_1-1-ip-协议" aria-hidden="true">#</a> 1.1 IP 协议</h3>
<p>IP协议（互联网协议）是TCP/IP 协议的核心协议。定义了数据报的格式，使得数据包可以在互联网中进行传输。</p>
<ul>
<li>IP 协议使用IP地址进行寻址，并通过路由选择算法将数据包从源节点转发到目标节点</li>
</ul>
<h3 id="_1-2-arp-协议" tabindex="-1"><a class="header-anchor" href="#_1-2-arp-协议" aria-hidden="true">#</a> 1.2 ARP 协议</h3>
<p>ARP(Address Resolution Protocol)(地址解析协议)，作用是在以太网环境总，数据的传输所以来的是MAC地址而非IP地址。</p>
<ul>
<li>将已知的ip地址转化为MAC地址的工作是由APR协议完成的</li>
</ul>
<h3 id="_1-3-rarp-协议" tabindex="-1"><a class="header-anchor" href="#_1-3-rarp-协议" aria-hidden="true">#</a> 1.3 RARP 协议</h3>
<p>RARP 是从MAC 地址定位IP地址的一种协议，我们平时可以通过设置电脑IP，也可以通过DHCP自动分配获取ip地址</p>
<h2 id="二-、-传输层协议" tabindex="-1"><a class="header-anchor" href="#二-、-传输层协议" aria-hidden="true">#</a> &lt;二&gt;、 传输层协议</h2>
<h3 id="_2-1-tcp-协议" tabindex="-1"><a class="header-anchor" href="#_2-1-tcp-协议" aria-hidden="true">#</a> 2.1 TCP 协议</h3>
<p>TCP 是 <code v-pre>传输控制协议</code>，提供 可靠的、面向连接的、基于字节流数据传输服务。</p>
<h4 id="_2-2-1-tcp的特点" tabindex="-1"><a class="header-anchor" href="#_2-2-1-tcp的特点" aria-hidden="true">#</a> 2.2.1 TCP的特点</h4>
<ul>
<li>面向连接、可靠的数据传输、流量控制、拥塞控制和错误控制等</li>
</ul>
<h4 id="_2-1-2-基础概念" tabindex="-1"><a class="header-anchor" href="#_2-1-2-基础概念" aria-hidden="true">#</a> 2.1.2 基础概念</h4>
<ul>
<li>
<font color=green>TIME_WATI 状态:</font> TIME_WAIT 状态是连接释放过程中的一个状态，当一方发送完最后一个ACK报文后，会进入 TIME_WAIT 状态，等待一段时间以确保对方接收到自己的ACK报文。这个状态可以避免出现重复连接的情况，保证连接的可靠性</li>
<li>
<font color=green>MSS(Maximum Segment Size):</font> 指TCP段的最大长度，它是TCP 协议中定义的一个参数，用于限制连接时TCP段的数据长度。<ul>
<li>mms 的大小取决于IP 数据报和TCP头部的最大长度。</li>
<li>在建立TCP 连接时，双方会协商MSS的大小，以便在传输数据时能更有效地利用带宽，避免丢包等问题</li>
</ul>
</li>
<li>
<font color=green>SYN 队列:</font> 指在建立TCP 连接时使用的一个队列，存储等待处理的连接报文，以便服务器能够按照顺序处理这些请求并建立连接</li>
<li>
<font color=green>TIME_WAIT、SYN之间的关系：</font> 当一方关闭连接时，它会发送一个FIN报文请求关闭连接。另一方接收到FIN报文之后也会关闭连接并回一个 ACK 报文确认收到请求。如果一方在发送完最后ACK报文后进入 TIME_WAIT 状态等待一段时间确保对方接收到自己的ACK保本，而另一方在这段时间内又发送了一个新的SYN保本请求建立新的连接，那么这个新的SYN 报文会被放入SYN队列中等待处理。</li>
</ul>
<h4 id="_2-1-3-tcp-工作原理" tabindex="-1"><a class="header-anchor" href="#_2-1-3-tcp-工作原理" aria-hidden="true">#</a> 2.1.3 TCP 工作原理</h4>
<ul>
<li>TCP 通过<code v-pre>面相连接</code>的方式建立虚电路，确保数据传输的可靠性和顺序的正确性。</li>
<li>使用<code v-pre>确认机制、重传机制和窗口机制</code>来保证数据传输的可靠性</li>
<li>TCP 还具有<code v-pre>流量控制和拥塞控制机制</code>，能够更具网络状况动态调整数据传输速率，避免网络拥塞和丢包问题</li>
</ul>
<h4 id="_2-1-4-三次握手" tabindex="-1"><a class="header-anchor" href="#_2-1-4-三次握手" aria-hidden="true">#</a> 2.1.4 三次握手</h4>
<ul>
<li>客户端向服务端发送一个<font color=red>请求建立连接</font>的 <code v-pre>SYN</code> 报文</li>
<li>服务器接收到 <code v-pre>SYN</code> 报文之后，会给客户端返回一个 <code v-pre>SYN+ACK</code> 的报文，表示<font color=red>同意建立连接</font></li>
<li>客户端端接收到 <code v-pre>SYN+ACK</code> 报文之后，再向服务端发送一个 <code v-pre>ACK</code> 报文，表示<font color=red>确认连接建立</font></li>
</ul>
<h4 id="_2-1-5-四次挥手" tabindex="-1"><a class="header-anchor" href="#_2-1-5-四次挥手" aria-hidden="true">#</a> 2.1.5 四次挥手</h4>
<ul>
<li>当一方A想关闭连接的时候，会发送一个 <code v-pre>FIN</code> 报文，<font color=red>请求关闭连接</font></li>
<li>另一方B接收到 <code v-pre>FIN</code> 报文之后，会回复一个 <code v-pre>ACK</code> 报文，进入TIME_WAIT状态,表示 <font color=red>确认收到关闭请求</font></li>
<li>然后A可以发送一个 <code v-pre>FIN</code> 报文，表示<font color=red>关闭连接</font></li>
<li>B 接收到 <code v-pre>FIN</code> 报文之后，<code v-pre>待处理完剩余的传输任务</code>之后，关闭连接，然后向 A 发送一个 <code v-pre>ACK</code> 报文，表示<font color=red>确认连接关闭的</font></li>
</ul>
<h4 id="_2-1-6-tcp协议中的流量控制和拥塞控制机制" tabindex="-1"><a class="header-anchor" href="#_2-1-6-tcp协议中的流量控制和拥塞控制机制" aria-hidden="true">#</a> 2.1.6 TCP协议中的流量控制和拥塞控制机制</h4>
<ul>
<li>TCP 中的流量控制机制通过 <font color=red>滑动窗口协议实现</font>。它通过动态调整窗口大小来控制发送方发送数据的速率，以避免接收方来不及接受数据而造成数据丢失</li>
<li>TCP 中的拥塞控制机制通过 <font color=red>拥塞避免算法和拥塞窗口机制实现</font>。它通过动态调整窗口大小来控制发送方发送的速率，以避免网络拥塞发生</li>
</ul>
<h4 id="_2-1-7-如何处理丢包和延时" tabindex="-1"><a class="header-anchor" href="#_2-1-7-如何处理丢包和延时" aria-hidden="true">#</a> 2.1.7 如何处理丢包和延时？</h4>
<ul>
<li>TCP 中处理延时和丢包的情况主要依靠<code v-pre>重传机制</code>和<code v-pre>拥塞机制</code>来实现</li>
<li>当接收方未收到数据是，会发送一个 <code v-pre>NAK 或者 RST</code> 报文给发送方要求<code v-pre>重传数据或者关闭连接</code></li>
<li>同时，TCP 还会<code v-pre>动态调整拥塞窗口</code>的大小以避免网络拥塞的发生，并减少丢包的可能性</li>
<li>此外， TCP 还采用 <code v-pre>快速重传和快速回复等算法</code> 来快速处理丢包和延迟的情况，提高数据传输的效率和可靠性</li>
</ul>
<h4 id="_2-1-8-如何保证数据传输的可靠性和顺序性" tabindex="-1"><a class="header-anchor" href="#_2-1-8-如何保证数据传输的可靠性和顺序性" aria-hidden="true">#</a> 2.1.8 如何保证数据传输的可靠性和顺序性</h4>
<ul>
<li>TCP 中，为了保证数据传输的可靠性和顺序的正确性，主要采用 <font color=red>确认机制、重传机制、序列号机制和流量控制机制</font> 等机制来实现</li>
<li>通过 <code v-pre>确认机制</code> 和 <code v-pre>重传机制</code> 保证数据能够可靠地传输到接收方</li>
<li>通过 <code v-pre>序列号机制</code> 保证数据能够按照发送的顺序进行接收</li>
<li>通过 <code v-pre>流量控制机制</code> 避免接收方来不及接受数据而造成数据丢失或者重复接收的情况发生</li>
</ul>
<h3 id="_2-2-udp-协议" tabindex="-1"><a class="header-anchor" href="#_2-2-udp-协议" aria-hidden="true">#</a> 2.2 UDP 协议</h3>
<p>UDP 是 <code v-pre>用户数据报协议</code>， 提供无连接的数据传输服务。UDP 在传输数据之前不需要建立连接，页不提供数据包的重传价值。适用于实时性要求高的应用（音视频传输、实时游戏）</p>
<h4 id="_2-2-1-udp-和-tcp-的区别" tabindex="-1"><a class="header-anchor" href="#_2-2-1-udp-和-tcp-的区别" aria-hidden="true">#</a> 2.2.1 UDP 和 TCP 的区别</h4>
<ul>
<li>UDP 和 TCP  的主要区别在于传输方式和可靠性</li>
<li>UDP 提供了一种简单的方式来发送和接收数据，但是不提供任何可靠性和顺序保证，可能会出现数据丢失、重复和乱序的情况</li>
<li>UDP 只需要知道接收方的 ip 和端口好即可，传输时即时性的，不用事先建立连接</li>
</ul>
<h4 id="_2-2-2-udp-的特点和应用场景" tabindex="-1"><a class="header-anchor" href="#_2-2-2-udp-的特点和应用场景" aria-hidden="true">#</a> 2.2.2 UDP 的特点和应用场景</h4>
<ul>
<li>特点： 简单、无连接、不可靠、支持一对一、一对多，多对一和多对多的交互通信</li>
<li>应用： 广泛应用于一些不需要可靠传输的场景，如流媒体、VoIP（语音通话）和 DNS 查询</li>
</ul>
<h4 id="_2-2-3-udp-头部结构是什么-有哪些字段" tabindex="-1"><a class="header-anchor" href="#_2-2-3-udp-头部结构是什么-有哪些字段" aria-hidden="true">#</a> 2.2.3 UDP 头部结构是什么？有哪些字段</h4>
<ul>
<li>头部结构包含四个字段: 源端口、目的端口、长度和校验和</li>
<li><code v-pre>源端口</code> 和 <code v-pre>目的端口</code>用于标识和接收UDP 数据报的应用程序</li>
<li><code v-pre>长度字段</code> 表示 UDP头部和数据的总长度</li>
<li><code v-pre>校验和</code> 用于检测数据在传输过程中是否发生错误</li>
</ul>
<h4 id="_2-2-4-udp-通信过程" tabindex="-1"><a class="header-anchor" href="#_2-2-4-udp-通信过程" aria-hidden="true">#</a> 2.2.4 UDP 通信过程</h4>
<ul>
<li>发送方应用程序将数据打包成UDP数据报，并指定目的端的IP地址和端口号</li>
<li>UDP将数据报发送到网络中，并尽力将其传递到目的端</li>
<li>接收方接收到数据之后会进行相应的处理</li>
</ul>
<h4 id="_2-2-5-udp-有哪些传输模式-特点是什么" tabindex="-1"><a class="header-anchor" href="#_2-2-5-udp-有哪些传输模式-特点是什么" aria-hidden="true">#</a> 2.2.5 UDP 有哪些传输模式，特点是什么</h4>
<ul>
<li>UDP 传播模式主要包括 单播、广播和组播</li>
<li><code v-pre>单播</code>： 一个源端发送数据到单个目的端， 适用于 点对点通信</li>
<li><code v-pre>广播</code>:  一个源端发送数据到网络中的所有设备中， 适用于 向大量设备发送相同数据</li>
<li><code v-pre>组播</code>： 一个源端发送数据到一个特定的组中， 适用于 向一组特定设备发送数据</li>
</ul>
<h2 id="三-、应用层协议" tabindex="-1"><a class="header-anchor" href="#三-、应用层协议" aria-hidden="true">#</a> &lt;三&gt;、应用层协议</h2>
<h3 id="_3-1-http-协议" tabindex="-1"><a class="header-anchor" href="#_3-1-http-协议" aria-hidden="true">#</a> 3.1 HTTP 协议</h3>
<p>HTTP 是 <code v-pre>超文本传输协议</code>， 用于在web浏览器和服务器之间传输超文本数据，支持请求和响应模型，客户端向服务器端发送请求，服务器返响应</p>
<h4 id="_3-1-1-http-协议的特点" tabindex="-1"><a class="header-anchor" href="#_3-1-1-http-协议的特点" aria-hidden="true">#</a> 3.1.1 HTTP 协议的特点</h4>
<ul>
<li>无状态</li>
<li>简单快速</li>
<li>灵活</li>
<li>无需建立连接</li>
<li>可缓存</li>
</ul>
<hr>
<h4 id="_3-1-2-请求方法有哪些-每种方法的作用时什么" tabindex="-1"><a class="header-anchor" href="#_3-1-2-请求方法有哪些-每种方法的作用时什么" aria-hidden="true">#</a> 3.1.2 请求方法有哪些？每种方法的作用时什么</h4>
<table>
<thead>
<tr>
<th>请求方法</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>用于获取指定的资源</td>
</tr>
<tr>
<td>POST</td>
<td>提交数据，请求服务器处理</td>
</tr>
<tr>
<td>PUT</td>
<td>将数据传递到服务器以创建或者更新资源，可以用上传的内容替换目标资源中的内容</td>
</tr>
<tr>
<td>DELETE</td>
<td>删除指定资源</td>
</tr>
<tr>
<td>HEAD</td>
<td>与get请求的基本相同，不同的是HEAD请求没有响应体，仅用于传输状态行和标题部分 <br> 这对一仅查看响应头的数据非常有用，可以避免传输所有内容 <br> 常被用于客户端查看服务器的性能</td>
</tr>
<tr>
<td>CONNECT</td>
<td>用来建立到给定URI标识服务器的隧道，是 HTTP/1.1预留的，可将连接改为管道方式的代理服务器</td>
</tr>
<tr>
<td>OPTIONS</td>
<td>通常用于查看服务器性能，这个方法会请求服务器返回该资源所支持的预定义URL的HTTP策略</td>
</tr>
<tr>
<td>TRACE</td>
<td>请求服务器回显其收到的请求信息，主要用于HTTP 请求的测试或者诊断</td>
</tr>
<tr>
<td>PATCH</td>
<td>用于资源更新</td>
</tr>
</tbody>
</table>
<h6 id="get-请求和-post-请求之间的区别" tabindex="-1"><a class="header-anchor" href="#get-请求和-post-请求之间的区别" aria-hidden="true">#</a> <font color=red>get 请求和 post 请求之间的区别</font></h6>
<ul>
<li><code v-pre>数据传输方式:</code> get 请求会将请求参数放在 URL 中，但是post请求会通过HTTP请求的body来传递数据</li>
<li><code v-pre>数据容量:</code> 因为get 请求的数据放在URL中，所以对数据的长度是有限制的；post 请求对请求参数的长度没有限制</li>
<li><code v-pre>数据安全性:</code> POST 比 get请求更安全一些，这是因为post请求的数据都在body中，而不是直接在 URL 中</li>
<li><code v-pre>幂等性:</code> get请求是幂等的，意味着多次执行相同的get请求，其效果与执行一次是一样的。post 请求不是幂等的，多次执行相同的post请求可能会产生生不同的结果</li>
<li><code v-pre>缓存:</code> get请求可以被浏览器缓存，但是post请求不能被浏览器缓存</li>
</ul>
<hr>
<h4 id="_3-1-3-常见状态码及含义" tabindex="-1"><a class="header-anchor" href="#_3-1-3-常见状态码及含义" aria-hidden="true">#</a> 3.1.3 常见状态码及含义？</h4>
<ul>
<li>
<font color=green>1xx:</font> 消息状态码<ul>
<li>100: Continue 继续。客户端应当继续请求</li>
<li>101: Switching Protocols 切换协议。服务器根据客户端的请求切换协议。智能切换到更高级的协议，例如切换到HTTP的新版本</li>
</ul>
</li>
<li>
<font color=green>2xx:</font> 成功状态码<ul>
<li>200: 请求成功</li>
<li>201: 成功请求，并创建了新的资源</li>
<li>202: Accepted 已接收, 已接收请求，但未处理完成</li>
<li>203: Non-Authoritative Information 非授权信息。请求成功，但返回的meta信息不再原始的服务器，是一个副本</li>
<li>204: No-Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档</li>
<li>205: Reset Content 重置内容。服务器处理成功，用户终端应重置文档视图</li>
</ul>
</li>
<li>
<font color=green>3xx:</font> 重定向状态码<ul>
<li>301: 请求的资源已被永久移动到新的URI，返回信息包括新的URI，浏览器回自动重定向到新的URI，之后所有的请求都用新的URI代替</li>
<li>302: 临时移动,与301类似，但资源纵横四海临时被移动，客户端应该继续使用原有URI</li>
<li>304: 未修改，所请求的资源未修改，服务器返回此状态码时不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源</li>
<li>305: 使用代理。所请求的资源必须通过代理访问</li>
<li>307: 临时重定向。与302类似，使用GET请求重定向</li>
</ul>
</li>
<li>
<font color=green>4xx:</font> 客户端错误状态码<ul>
<li>404: 服务器无法根据客户端请求找到资源</li>
<li>400: 客户端请求的语法错误，服务器无法理解</li>
<li>401: 未授权，要求客户端身份认证</li>
<li>402: Payment Required 保留，将来使用</li>
<li>405: 客户端请求中的方法被禁止</li>
<li>406: 服务器无法根据客户端请求的内容特性完成请求</li>
</ul>
</li>
<li>
<font color=green>5xx:</font> 服务端错误状态码<ul>
<li>500: 服务器内部错误，无法完成请求</li>
<li>501: 服务器不支持请求的功能，无法完成请求</li>
<li>502: 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应</li>
<li>503: 服务器由于超载或者系统维护，暂时无法处理客户端请求。延时的长度包含在服务器的Retry-After头信息中</li>
</ul>
</li>
</ul>
<h4 id="_3-1-4-http-头部" tabindex="-1"><a class="header-anchor" href="#_3-1-4-http-头部" aria-hidden="true">#</a> 3.1.4 HTTP 头部</h4>
<ul>
<li>
<font color=red>General Header 通用头</font><ul>
<li><code v-pre>Cache-Control</code>: 用于控制缓存策略</li>
<li><code v-pre>Connection</code>: 指定转发时需要去掉的内容; 管理持久连接（http/1.1 默认时持久连接的），当服务器端想明确断开连接的话，指定 Connection 头部字段为 Close</li>
<li><code v-pre>Upgrade</code>: 用于检测HTTP协议以及其他协议是否使用更高版本进行通信，其参数值可以用来指定一个完全不同的通信协议</li>
<li><code v-pre>via</code>: 代理服务器相关信息,报文经过代理或者网关时，会现在 via 头部字段中附加该服务器的信息，然后再进行转发</li>
<li><code v-pre>Warning</code>: 错误和警告通知</li>
<li><code v-pre>Transfor-Encoding</code>: 报文主题的传输编码格式（HTTP/1.1 中该字段仅对分块时候的传输编码有效）</li>
<li><code v-pre>Trailer</code>: 会事先说明在报文主体后记录了哪些字段，常用于啊 HTTP/1.1 分块传输编码中国</li>
<li><code v-pre>Pragma</code>: 是 HTTP/1.1 之前版本的遗留字段，仅作为与HTTP/1.0向后兼容而定义的</li>
<li><code v-pre>Date</code>: 创建 HTTP 报文的时间</li>
</ul>
</li>
<li>
<font color=red>Request Header 请求头</font><ul>
<li><code v-pre>Accept</code>: 用户可处理的媒体类型，可以一次指定多个</li>
<li><code v-pre>Accept-Charset</code>: 告诉服务端，客户端想要什么字符集</li>
<li><code v-pre>Accept-Encoding</code>:  报文压缩策略（gzip、deflate）</li>
<li><code v-pre>Accept-Language</code>: 需要语言类型</li>
<li><code v-pre>Authorization</code>: 携带的web 认证信息</li>
<li><code v-pre>Expect</code>: 期待服务器的特定行为</li>
<li><code v-pre>From</code>: 用户邮箱地址</li>
<li><code v-pre>Host</code>: 请求资源所在服务器</li>
<li><code v-pre>If-Match</code>: 附带条件的请求，使用附带条件和实体标记(ETag) 进行对比，相等返回200， 否则返回412 （Precondition Fail）</li>
<li><code v-pre>If-Modifiled-Since</code>: 比较资源更新时间，资源更新时间大于该附带条件时候正常返回则返回304</li>
<li><code v-pre>If-None-Match</code>: 比较实体标记</li>
<li><code v-pre>If-Range</code>: 资源未更新时，针对资源的范围进行请求</li>
<li><code v-pre>If-Unmodified-Since</code>: 比较资源更新时间</li>
<li><code v-pre>Max-Forwards</code>: 服务器在往下一个服务器转发请求之前，Max-Forwards 的 值减 1 ,当服务器接收到 Max-Forwards 值为 0 的请求 时，则不再进行转发，而是直接返回响应</li>
<li><code v-pre>Range</code>: 范围请求 （断点续传时候使用到了）接收到附带 Range 头部字段请求的服务器，会在处理请求之后返回状 态码为 206 Partial Content 的响应。无法处理该范围请求时，则会返 回状态码 200 OK 的响应及全部资源</li>
<li><code v-pre>Referer</code>: 告知服务器请求原始资源的URI</li>
<li><code v-pre>TE</code>: 告诉服务器客户端能处理响应的传输编码方式以及相对优先级</li>
<li><code v-pre>User-Agent</code>: 会创建请求的浏览器和用户代理名称等信息传递给服务器。网络爬虫发起请求时，有可能在字段内添加爬虫作者的电子邮件地址。此外如果请求经过代理，那么中间也很可能被添加上代理</li>
</ul>
</li>
<li>
<font color=red>Response Header 响应头</font><ul>
<li><code v-pre>Accept-Ranges</code>: 是够接收范围请求, 可指定两种字段值： bytes(可处理请求范围)，none(不接受范围处理)</li>
<li><code v-pre>Age</code>： 告诉客户端，源服务器在多久前创建了响应，单位为 秒</li>
<li><code v-pre>ETag</code>: 资源匹配信息， 是一种可以将资源以字符串的形式生成唯一标识的方式，服务器会为每份资源分配对应的ETag值</li>
<li><code v-pre>Location</code>: 让客户端重定向到指定的URI，该字段会配合 3xx 的状态码，提供重定向的URI</li>
<li><code v-pre>Proxy-Authenticate</code>: 代理服务器对客户端的认证信息，会把由代理服务器所要求的认证信息发送给客户端，
<ul>
<li>它与客户端和服务器之间的HTTP访问认证行为相似，不同之处在于其认证行为是在客户端与代理服务器之间进行的</li>
<li>而客户端和服务器之间进行认证是，其与头部字段 WWW-Authorization 有着相同的作用</li>
</ul>
</li>
<li><code v-pre>Retry-After</code>: 对再次发起请求的时机要求；告知客户端应该在做就之后再次发送请求，主要配合 503 和 3xx 响应状态码一起使用
<ul>
<li>该字段值可以指定为具体的日期时间，也可以是创建响应之后的毫秒数</li>
</ul>
</li>
<li><code v-pre>Server HTTP</code>： HTTP 服务器安装信息，告知客户端当前服务器上安装的HTTP服务器应用程序的信息</li>
<li><code v-pre>Vary</code>: 代理服务器缓存的管理信息
<ul>
<li>当代理服务器接收到带有Vary头部字段指定的资源请求时，如果和使用的Accept-Language字段相同时，直接从缓存中返回响应</li>
</ul>
</li>
<li><code v-pre>WWW-Authenticate</code>: 服务器对客户端的认证信息</li>
</ul>
</li>
<li>
<font color=red>Entity Header 实体头</font><ul>
<li><code v-pre>Allow</code>: 资源可支持的HTTP方法</li>
<li><code v-pre>Content-Encoding</code>: body 适用的编码方式</li>
<li><code v-pre>Content-Language</code>: body 自然语言</li>
<li><code v-pre>Content-Length</code>: body 的大小</li>
<li><code v-pre>Content-Location</code>: 替代对应资源的URI</li>
<li><code v-pre>Content-MD5</code>: body 的报文摘要；md5形式</li>
<li><code v-pre>Content-Range</code>: body 的位置范围</li>
<li><code v-pre>Content-Type</code>: body 的媒体类型</li>
<li><code v-pre>Expires</code>: body日期过期时间</li>
<li><code v-pre>Last-Modified</code>: 资源的最后更改日期</li>
</ul>
</li>
</ul>
<p><img src="@source/network/image-6.png" alt="请求报文">
<img src="@source/network/image-7.png" alt="响应报文"></p>
<h4 id="_3-1-5-http-缓存" tabindex="-1"><a class="header-anchor" href="#_3-1-5-http-缓存" aria-hidden="true">#</a> 3.1.5 HTTP 缓存</h4>
<p><a href="https://blog.csdn.net/qq_42943914/article/details/129795804?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">HTTP 缓存详解<ExternalLinkIcon/></a></p>
<h4 id="_3-1-6-http-长连接和短链接" tabindex="-1"><a class="header-anchor" href="#_3-1-6-http-长连接和短链接" aria-hidden="true">#</a> 3.1.6 HTTP 长连接和短链接</h4>
<p><strong>长链接和短链接是两种不同的TCP链接方式</strong></p>
<ul>
<li>长链接也称为持久连接或者 HTTP/1.1连接，它允许TCP链接在发送和接收数据后仍然保持打开状态，以便后续请求和响应可以在同一链接上传输</li>
<li>短链接则是在每个请求/响应交换后关闭TCP链接的方式</li>
<li>HTTP/1.0 默认使用短链接， HTTP/1.1 默认采用长链接</li>
</ul>
<h4 id="_3-1-7-如何优化http请求性能" tabindex="-1"><a class="header-anchor" href="#_3-1-7-如何优化http请求性能" aria-hidden="true">#</a> 3.1.7 如何优化HTTP请求性能？</h4>
<ul>
<li>减少请求次数</li>
<li>使用CDN内容分发</li>
<li>利用浏览器缓存和代理缓存</li>
<li>优化图片的质量和资源的大小</li>
<li>利用长链接和管道化请求等</li>
</ul>
<h4 id="_3-1-8-http-各个版本之间有什么不同" tabindex="-1"><a class="header-anchor" href="#_3-1-8-http-各个版本之间有什么不同" aria-hidden="true">#</a> 3.1.8 HTTP 各个版本之间有什么不同?</h4>
<ul>
<li>
<p><strong><font color=red>HTTP/1.0</font></strong></p>
<ul>
<li><code v-pre>连接管理</code>: HTTP/1.0 默认使用短链接，即每个请求都需要建立一个 TCP 链接，在请求完成之后关闭连接。这种方式可能会导致性能问题</li>
<li><code v-pre>请求管道化</code>: 不支持请求流水线，即客户端在发送一个请求之后必须等待服务器响应后才能发送下一个请求，者限制了并发请求的能力</li>
<li><code v-pre>缓存</code>: HTTP/1.0 引入了缓存机制，通过 Cache-Control、Expires 等头部字段来控制缓存行为</li>
<li><code v-pre>安全性</code>: 没有内置的安全机制，如加密或者身份认证</li>
</ul>
</li>
<li>
<p><strong><font color=red>HTTP/1.1</font></strong></p>
<ul>
<li><code v-pre>连接管理</code>: HTTP/1.1 默认使用长连接（Keep-Alive）,TCP 链接在发送和接收数据后保持打开状态，可以被多个请求复用。这减少了链接建立和关闭的开销，提高了性能</li>
<li><code v-pre>请求管道化</code>： 虽然 HTTP/1.1允许在同一个TCP链接中同时发送多个请求，但它采用了基于请求/响应的模型，当服务器处理一个请求时，其他请求可能会被阻塞，这可能会导致头阻塞（Head-of-Line-Blocking）问题</li>
<li><code v-pre>缓存</code>： 继续支持并扩展HTTP/1.0的缓存机制</li>
<li><code v-pre>安全性</code>： 引入了更多安全性的考虑，如使用 SSL/TLS 进行加密通信，但任然存在一些安全漏洞如，跨站脚本攻击（XSS）和 跨站请求伪造（CSRF）等</li>
<li><code v-pre>新方法和头部</code>： 引入了新的请求方法（PUT、PATCH、OPTIONS、DELETE），和头部字段，以支持更多的功能和应用场景</li>
</ul>
</li>
<li>
<p><strong><font color=red>HTTP/2.0</font></strong></p>
<ul>
<li><code v-pre>二进制协议</code>: HTTP/2.0 是一个彻底的二进制协议，头部信息和数据体都是二进制格式，这提高了协议的解析效率和可扩展性</li>
<li><code v-pre>多路复用</code>: HTTP/2.0 允许在同一个TCP链接中同时传输多个请求和响应，而不需要为每个请求建立新的连接。这消除了 头阻塞的问题，并显著提高了请求性能</li>
<li><code v-pre>服务器推送</code>: 引入了服务器推送机制，允许服务器未经请求主动向客户端发送资源，这有助于减少页面加载时间</li>
<li><code v-pre>头部压缩</code>: 使用头部压缩机制（gzip、compress）来减少头部信息的大小，从而降低了传输开销</li>
<li><code v-pre>流量控制</code>: 提供了流量控制机制，允许接收方控制发送方的发送速率，以避免资源耗尽或拥塞问题</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_3-2-https-协议" tabindex="-1"><a class="header-anchor" href="#_3-2-https-协议" aria-hidden="true">#</a> 3.2 HTTPS 协议</h3>
<p>HTTPS 是 <code v-pre>安全套接层超文本传输协议</code>， 是HTTP 的安全版本，使用加密来保护数据传输的安全性</p>
<h4 id="_3-2-1-http-协议和-https-协议之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#_3-2-1-http-协议和-https-协议之间的区别是什么" aria-hidden="true">#</a> 3.2.1 HTTP 协议和 HTTPS 协议之间的区别是什么？</h4>
<ul>
<li>HTTPS 是 HTTP 协议的安全版本，通过在 HTTP 和 TCP 之间添加一个安全协议层（ssh或tls）来实现安全通信</li>
<li>HTTPS 默认的端口号是443, HTTP 默认端口号是80端口</li>
<li>HTTPS 提供加密、身份验证和数据完整性保护，以防止数据在传输的过程中被窃取或者篡改</li>
</ul>
<font color=red>HTTPS = HTTP + 身份认证 + SSL/TLS + 数据私密性 + 数据完整性</font><h4 id="_3-2-2-https-加密过程" tabindex="-1"><a class="header-anchor" href="#_3-2-2-https-加密过程" aria-hidden="true">#</a> 3.2.2 HTTPS 加密过程</h4>
<p>HTTPS 经由HTTP 通信，利用ssh/tls建立信息安全通道，加密数据包
<strong><a href="https://blog.csdn.net/qq_42943914/article/details/129748816?spm=1001.2014.3001.5502" target="_blank" rel="noopener noreferrer">HTTPS 加密过程<ExternalLinkIcon/></a></strong></p>
<h4 id="_3-2-3-https-中的-ssh-tls-是如何工作" tabindex="-1"><a class="header-anchor" href="#_3-2-3-https-中的-ssh-tls-是如何工作" aria-hidden="true">#</a> 3.2.3 HTTPS 中的 SSH/TLS 是如何工作?</h4>
<ul>
<li>SSH/TLS 是由受信任的证书颁发机构（CA）签发的<code v-pre>数字证书</code>，其中包含<code v-pre>服务器的公钥和一些标识性的信息</code></li>
<li>当客户端连接到服务器的时候，<code v-pre>服务器会将其证书发送给客户端</code></li>
<li><code v-pre>客户端通过验证证书的合法性</code>，包括检查证书是否由受信任的CA签发、证书是否过期以及证书中的域名是否正在访问的域名匹配</li>
<li>一旦证书认证通过，客户端和服务器端之间就可以使用证书中的公钥来建立加密连接</li>
</ul>
<h4 id="_3-2-3-https-是如何防止中间人攻击的" tabindex="-1"><a class="header-anchor" href="#_3-2-3-https-是如何防止中间人攻击的" aria-hidden="true">#</a> 3.2.3 HTTPS 是如何防止中间人攻击的？</h4>
<ul>
<li>HTTPS 通过验证和迷药交换来防止中间人攻击</li>
<li>在建立连接时，客户端会验证服务器端的证书和合法性，确保证书是有受信任的CA机构签发的</li>
<li>服务器也会验证客户端的证书</li>
</ul>
<h4 id="_3-2-4-https-的性能-与-http的性能" tabindex="-1"><a class="header-anchor" href="#_3-2-4-https-的性能-与-http的性能" aria-hidden="true">#</a> 3.2.4 HTTPS 的性能 与 HTTP的性能？</h4>
<ul>
<li>HTTPS 相较于 HTTP 来说有一定的性能损耗，因为需要进行加密和解密，以及证书认证等步骤</li>
<li>这可能会导致连接建立的时间相对会长一些，以及加密数据可能会对cpu 和 内存资源有一定的要求</li>
<li>但是，随着技术的不断发展，现代硬件和操作系统对SSH/TLS加密的支持已经非常高效了，因此对于HTTPS 的性能损耗一般是可以接收的</li>
</ul>
<hr>
<h3 id="_3-3-ssh-协议" tabindex="-1"><a class="header-anchor" href="#_3-3-ssh-协议" aria-hidden="true">#</a> 3.3 SSH 协议</h3>
<p>SSH 是 <code v-pre>安全外壳协议</code>, 用于安全登录到服务器或者网络设备，以加密数据传输和身份认证</p>
<h4 id="_3-3-1-ssh-特点" tabindex="-1"><a class="header-anchor" href="#_3-3-1-ssh-特点" aria-hidden="true">#</a> 3.3.1 SSH 特点</h4>
<ul>
<li><code v-pre>安全性</code>： SSH 协议使用加密技术来保护数据的机密性和完整性，使用 <font color=red>非对称加密</font>，服务器和客户端都会生成自己的公钥和私钥。使用SSH
所有传输的数据都可以进行加密，从而防止中间人攻击、dns欺骗和IP欺骗等安全威胁</li>
<li><code v-pre>可靠性</code>： SSH 是一个相对可靠的协议，专为远程登录会话和其他网络服务提供安全性。</li>
<li><code v-pre>跨平台</code>： SSH 最初是一个程序，但后来迅速被扩展到其他操作系统平台。几乎所有的UNIX平台都可以使用SSH客户端和服务器</li>
<li><code v-pre>扩展性</code>： SSH 协议框架包括传输层协议、用户认证和连接协议等主要部分，同时还未许多高层的网络安全应用协议提供扩展支持</li>
</ul>
<hr>
<h3 id="_3-4-ftp-协议" tabindex="-1"><a class="header-anchor" href="#_3-4-ftp-协议" aria-hidden="true">#</a> 3.4 FTP 协议</h3>
<p>FTP 是 <code v-pre>文件传输协议</code>, 用于在网络上传输文件，使用户可以上传或者下载文件到远程服务器</p>
<h3 id="_3-5-pop3-协议-和-imap-协议" tabindex="-1"><a class="header-anchor" href="#_3-5-pop3-协议-和-imap-协议" aria-hidden="true">#</a> 3.5 POP3 协议 和 IMAP 协议</h3>
<p>POP3 是 <code v-pre>邮局协议版本3</code> ， IMAP 是 <code v-pre>Internet 消息访问协议</code>, 用于接收电子邮价，分本用于从服务器下载邮件或者在服务器上管理邮件</p>
<h3 id="_3-6-smtp-协议" tabindex="-1"><a class="header-anchor" href="#_3-6-smtp-协议" aria-hidden="true">#</a> 3.6 SMTP 协议</h3>
<p>SMTP 是 <code v-pre>简单邮件传输协议</code>， 主要用于电子邮件的发送，规定了邮件客户端和邮件服务器之间的交互方式</p>
<h3 id="_3-7-telnet" tabindex="-1"><a class="header-anchor" href="#_3-7-telnet" aria-hidden="true">#</a> 3.7 Telnet</h3>
<p>Telnet 用于在网络上远程登录到其他计算机，以便进行远程控制和管理</p>
<h3 id="_3-8-snmp" tabindex="-1"><a class="header-anchor" href="#_3-8-snmp" aria-hidden="true">#</a> 3.8 SNMP</h3>
<p>SNMP 是 <code v-pre>简单网络管理协议</code>， 用于网络设备之间的监控和管理，例如路由器、交换机等。</p>
<h2 id="_3-9-rdp" tabindex="-1"><a class="header-anchor" href="#_3-9-rdp" aria-hidden="true">#</a> 3.9 RDP</h2>
<p>RDP 是 <code v-pre>远程桌面协议</code>， 用于在计算机上显示和控制图形桌面</p>
<h3 id="_3-10-ntp" tabindex="-1"><a class="header-anchor" href="#_3-10-ntp" aria-hidden="true">#</a> 3.10 NTP</h3>
<p>NTP 是 <code v-pre>网络时间协议</code>， 用于同步网络中计算机的时间，确保各设备具有统一的时间标准</p>
<h3 id="_3-11-sip" tabindex="-1"><a class="header-anchor" href="#_3-11-sip" aria-hidden="true">#</a> 3.11 SIP</h3>
<p>SIP 是 <code v-pre>会话发起协议</code>， 用于建立、修改和中止多媒体会话，如 语音通话、视频通话等</p>
</div></template>


