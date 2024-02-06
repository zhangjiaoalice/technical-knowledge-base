<template><div><h1 id="dns-域名系统" tabindex="-1"><a class="header-anchor" href="#dns-域名系统" aria-hidden="true">#</a> DNS(域名系统)</h1>
<p>DNS(Domain Name System), 域名解析协议, 主要用于将域名转化为IP地址的</p>
<h2 id="dns-结构" tabindex="-1"><a class="header-anchor" href="#dns-结构" aria-hidden="true">#</a> DNS 结构</h2>
<p><img src="@source/network/image-5.png" alt="英特网域名空间"></p>
<h2 id="域名解析的过程" tabindex="-1"><a class="header-anchor" href="#域名解析的过程" aria-hidden="true">#</a> 域名解析的过程</h2>
<ol>
<li>首先会在 <strong>浏览器缓存中</strong> 查找ip地址，如果找到直接返回，如果没有就继续下一步</li>
<li>将请求发送给<strong>本地的 DNS 服务器</strong>，在本底域名服务器缓存中查找，如果找到，直接返回，没有救继续下一步</li>
<li>本地DNS 服务器向 <strong>根域名服务器</strong> 发送请求，根域名服务器会返回一个所查询域的<strong>顶级域名服务器</strong>地址</li>
<li>本地DNS 服务器向 <strong>顶级域名服务器</strong> 发送请求，接收到请求之后，服务器会先在缓存中查询，如果有就返回，没有就返回相关的下一级权威域名服务器的地址</li>
<li>本地DNS服务器向 <strong>权威域名服务器</strong> 发送请求，权威域名服务器返回对应的结果</li>
<li>本地DNS服务器将返回的结果保存在缓存中，便于下次使用</li>
<li>本地DNS服务器将查找结果返回给浏览器</li>
</ol>
<h2 id="dns-攻击" tabindex="-1"><a class="header-anchor" href="#dns-攻击" aria-hidden="true">#</a> DNS 攻击</h2>
<p>利用DNS 系统缺陷或漏洞，通过恶意的方式对DNS系统进行干扰或破环,导致dns系统无法正常提供域名解析服务或者提供错误的域名解析结果，从而造成网络服务的不可用或用户的隐私泄露等危害。</p>
<ol>
<li>
<font color=green>DNS 泛洪攻击:</font> 通过向DNS 服务器发送大量的查询请求，使得服务器过载并拒绝服务</li>
<li>
<font color=green>DNS 劫持攻击:</font> 通过篡改DNS记录，将域名解析到恶意服务器上，从而窃取用户敏感信息或传播恶意软件</li>
<li>
<font color=green>DNS 欺骗攻击:</font> 通过伪造DNS响应，诱导用户访问错误的网站，从而实施钓鱼攻击或恶意软件的传播</li>
</ol>
<p><strong>可以采取哪些措施防范dns攻击</strong></p>
<ul>
<li>使用高性能的DNS 服务器</li>
<li>部署DNS防火墙</li>
<li>定期更新和备份DNS记录</li>
<li>使用加密的DNS查询等</li>
<li>提高自身网络安全意识</li>
</ul>
</div></template>


