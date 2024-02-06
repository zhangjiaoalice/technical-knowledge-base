<template><div><h1 id="cdn" tabindex="-1"><a class="header-anchor" href="#cdn" aria-hidden="true">#</a> CDN</h1>
<font color=green>CDN(Content Delivery Network, 内容分发网络)</font>, 是一种用于加速互联网内容传输和访问的网络技术。<ul>
<li>CDN 通过在全球分布的多个节点上存储数据，使用户从最近的节点获取内容，从而加快了内容的传输速度</li>
</ul>
<hr>
<h2 id="cdn-工作原理" tabindex="-1"><a class="header-anchor" href="#cdn-工作原理" aria-hidden="true">#</a> CDN 工作原理</h2>
<ul>
<li>当用户访问某个网站资源的时候，CDN 会根据用户的地理位置和网络状况，选择一个最优的节点来提供服务</li>
<li>
<font color=green>如果这个节点有缓存用户请求的内容，</font>那么可以直接从缓存中提供服务，避免了从原始服务器下载数据的延迟</li>
<li>如果这个节点<font color=green>没有缓存</font>用户请求的内容，CDN 会从原始服务器上获取内容，并缓存在该节点上，以便下次用户能够快速提供服务</li>
</ul>
<h2 id="cdn-优点" tabindex="-1"><a class="header-anchor" href="#cdn-优点" aria-hidden="true">#</a> CDN 优点</h2>
<ol>
<li><strong><font color=green>加速内容传输</font></strong></li>
<li><strong><font color=green>减轻原始服务器的负担:</font></strong> CDN 可以分散请求流量到多个节点，减轻原始服务器的负载</li>
<li><strong><font color=green>提高可用性和可靠性：</font></strong> CDN 可以提供多个冗余节点，以提高可用性和可靠性</li>
<li><strong><font color=green>地理负载保护：</font></strong> CDN 可以根据用户的地理位置选择最近的节点，提供更好的用户体验</li>
<li><strong><font color=green>安全保护：</font></strong> CDN 可以提供DDOS 攻击防御，Web 应用防火墙安全等安全功能呢</li>
</ol>
<h2 id="cdn-缺点" tabindex="-1"><a class="header-anchor" href="#cdn-缺点" aria-hidden="true">#</a> CDN 缺点</h2>
<ol>
<li>成本</li>
<li>复杂性： 对于一些不熟悉CDN的用户来说，配置和使用CDN 可能会比较复杂。他们需要了解如何设置缓存规则、如何配置域名等</li>
<li>数据安全问题： 虽然CDN 可以提供一些安全功能，但用户的数据仍然存在风险，如果CDN 节点遭遇攻击或者数据泄露，可能会导致用户数据被窃或滥用</li>
<li>兼容性问题:  某些CDN可能与某些特定的WEB 技术或者应用程序不兼容，导致兼容性问题</li>
<li>地理位置限制： 虽然CDN 可以在全球范围内提供服务，但是对于偏远地区或者发展中国家的用户来说，由于网络基础设施的限制，他们可能无法获得CDN 带来的加速效果</li>
<li>缓存控制：在使用CDN 时，网站管理员可能需要将缓存控制权限交给CDN服务商，这可能对网站的性能和可用性产生影响</li>
<li>性能问题：在某些情况下，CDN 可能会导致性能下降，例如在请求量非常大的时候，CDN 节点可能面临性能瓶颈</li>
</ol>
<h2 id="hosts-配置" tabindex="-1"><a class="header-anchor" href="#hosts-配置" aria-hidden="true">#</a> Hosts 配置</h2>
<p><em>Hosts 文件时一个用于转换域名与IP 地址的配置文件，通常用于位操作系统的系统文件夹中。它允许用户手动指定域名和IP地址的映射关系，以便在浏览器中通过域名访问网站时能更快解析和访问</em></p>
</div></template>


