<template><div><h1 id="dom-对象" tabindex="-1"><a class="header-anchor" href="#dom-对象" aria-hidden="true">#</a> DOM 对象</h1>
<p>DOM 文档对象代表整个 html 文档</p>
<h2 id="dom-节点的尺寸属性和位置属性" tabindex="-1"><a class="header-anchor" href="#dom-节点的尺寸属性和位置属性" aria-hidden="true">#</a> DOM 节点的尺寸属性和位置属性</h2>
<h3 id="盒模型" tabindex="-1"><a class="header-anchor" href="#盒模型" aria-hidden="true">#</a> 盒模型</h3>
<p>和模型是css 中的一个基本概念，将每个元素视为一个矩形盒子，盒子由 <font color=green>内容(content)</font>、 <font color=green>边框(border)</font>、<font color=green>内边距(padding)</font>、<font color=green>外边距(margin)</font> 四个部分组成</p>
<h3 id="位置属性" tabindex="-1"><a class="header-anchor" href="#位置属性" aria-hidden="true">#</a> 位置属性</h3>
<ol>
<li>
<font color=green>offsetTop/offsetLet</font>: 表示DOM元素距离其父元素的偏移位置，如果没有定位父元素，则表示DOM元素距离body元素的距离</li>
<li>
<font color=green>scrollTop/scrollLeft</font>: 表示元素在垂直/水平方向上的滚动距离</li>
</ol>
<h3 id="尺寸属性" tabindex="-1"><a class="header-anchor" href="#尺寸属性" aria-hidden="true">#</a> 尺寸属性</h3>
<ol>
<li>
<font color=green>offsetHeight/offsetWidth</font>: 描述元素的总体尺寸，包括边框、内边距和滚动条</li>
<li>
<font color=green>clientWidth/clientHeight</font>: 描述元素的内部尺寸，不包括边框， 但是包括内边距</li>
<li>
<font color=green>scrollWidth/scrollHeight</font>: 描述元素的滚动区域尺寸，如果内容超出了元素的可见区域，可以通过滚动查看的大小</li>
<li>
<font color=green>innerHeight/innerWidth</font>: 元素内部的高度/宽度，包括滚动条，通常用于确定一个元素的可视高度/宽度, <font color=red>innerHeigh 属性用于非ie浏览器，在ie浏览器中使用 clientHeight/clientWidth 获取元素的内部高度/宽度</font></li>
</ol>
<h3 id="长列表渲染优化" tabindex="-1"><a class="header-anchor" href="#长列表渲染优化" aria-hidden="true">#</a> 长列表渲染优化</h3>
<ol>
<li>
<font color=green>虚拟化技术：</font> 在任何时候仅渲染可是区域内的元素，当用户滚动页面是，在视口之外的元素会被销毁，同时会创建视口内的元素。这样可以显著减少内存的使用和提高性能<ul>
<li><strong>实现步骤:</strong>
<ul>
<li>计算可视区域高度<code v-pre>const visibleHeight = (window.innerHeight-(window.innerWidth &gt; window.screen.width ? 20 : 0), // 减去滚动条的宽度)</code> 和 单列列表的高度<code v-pre>(itemHeight)</code></li>
<li>根据可视区域的高度和单个列表项的高度<code v-pre>itemHeight</code>，计算出一屏需要渲染的列表项个数 <code v-pre>const visilbeCount = Math.floor((window.scrollY/itemHeight))</code></li>
<li>监听页面滚动事件，记录滚动的距离，并根据滚动的距离和单个列表的高度计算出当前可视区域的起始索引和结束索引</li>
<li>根据当前可视区域的索引，动态获取可视区域内的列表项数据，并将非可视区域内存在的列表项数据删除</li>
<li>将获取到的列表项数据渲染到列表上</li>
</ul>
</li>
<li><strong>注意事项</strong>
<ul>
<li>需要确保列表数据是可复用的，避免重复创建和销毁列表</li>
<li>优化数据获取和渲染的过程，提高性能</li>
<li>考虑使用懒加载技术，进一步优化用户体验</li>
<li>注意处理滚动事件和列表项的点击事件等交互逻辑，确保良好的用户体验</li>
</ul>
</li>
<li><strong>代码示例</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 容器用 parentBox表示</span>
<span class="token keyword">const</span> parentBox <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'#box'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 可视区域高度 </span>
<span class="token keyword">const</span> visibleHeight <span class="token operator">=</span> parentBox<span class="token punctuation">.</span>innerHeight <span class="token operator">-</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>parentBox<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">'--scrollbar-width'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 单个元素的高度</span>
<span class="token keyword">const</span> itemHeight <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>
<span class="token comment">// 计算可渲染的元素个数</span>
<span class="token keyword">const</span> visibleCount <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>visibleHeight <span class="token operator">/</span> itemHeigt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 计算渲染元素的起始位置</span>
<span class="token keyword">const</span> startIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>parentBox<span class="token punctuation">.</span>scrollTop <span class="token operator">/</span> itemHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 计算渲染元素的结束位置</span>
<span class="token keyword">const</span> endIndex <span class="token operator">=</span> startIndex <span class="token operator">+</span> visibleCount<span class="token punctuation">;</span>

<span class="token comment">// 渲染</span>

<span class="token keyword">function</span> <span class="token function">renderContent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parentBox<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> startIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> endINdex <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createELement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        item<span class="token punctuation">.</span>innerText <span class="token operator">=</span> list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>name
        parentBox<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> renderContent<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<font color=green>无限滚动：</font> 当用户滚动到列表底部的时候，加载更多数据，这种技术可以减少一次加载大量数据的需求，从而减少初始加载时间</li>
<li>
<font color=green>懒加载：</font> 仅在需要的时候才加载数据。这可用于图像、iframe、外部脚本等</li>
<li>
<font color=green>优化数据结构：</font> 使用合适的数据结构可以优化渲染速度。如果我们已经知道某个值不会经常修改，那么可以在渲染之前缓存这个值，而不是每次都重新计算</li>
<li>
<font color=green>优化CSS：</font> 使用适当的CSS属性可以提高渲染速度。例如使用 <code v-pre>display: none</code> 代替 <code v-pre>visibility: hidden</code> 可以更快隐藏元素.</li>
<li>
<font color=green>分页：</font> 将大量数据分页展示</li>
<li>
<font color=green>使用Web Worker 或 Serivice Worker：</font> Web Worker 和 Serivice Worker 可以将计算密集型任务迁移到后台线程，从而避免主线程</li>
</ol>
</div></template>


