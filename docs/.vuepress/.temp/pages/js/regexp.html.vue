<template><div><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式" aria-hidden="true">#</a> 正则表达式</h1>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<ol>
<li>正则表达式由斜线<code v-pre>/</code>包围的模式组成，例如： <code v-pre>/abc/</code></li>
<li>可以使用 <font color=green>new Regexp()</font> 构造函数可以一颗创建正则表达式</li>
</ol>
<h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2>
<ol>
<li><code v-pre>.</code>: 匹配任何除换行之外的单个字符</li>
<li><code v-pre>*</code>: 匹配一个字符 0次或者多次</li>
<li><code v-pre>+</code>: 匹配前一个字符1次或多次</li>
<li><code v-pre>?</code>: 匹配前一个字符0次或1次</li>
<li><code v-pre>{n}</code>: 匹配一个字符正好n次</li>
<li><code v-pre>{n,}</code>: 匹配一个字符n次或多次</li>
<li><code v-pre>{n, m}</code>: 匹配一个字符至少n次，但不超过m次</li>
<li><code v-pre>^</code>: 匹配输出字符串的开始位置</li>
<li><code v-pre>$</code>: 匹配输入字符串的结束位置</li>
<li><code v-pre>\d</code>: 匹配一个数字字符</li>
<li><code v-pre>\D</code>: 匹配一个非数字字符</li>
<li><code v-pre>\w</code>: 匹配一个单词字符（字母、数字、下划线）</li>
<li><code v-pre>\W</code>: 匹配一个非单词字符</li>
<li><code v-pre>\s</code>: 匹配任何空白字符串，包括空格、制表符、换页符等</li>
<li><code v-pre>\S</code>: 陪陪任何非空字符串</li>
<li><code v-pre>\b</code>: 匹配一个单词边界</li>
<li><code v-pre>\B</code>: 匹配一个非单词边界</li>
</ol>
<h2 id="字符类" tabindex="-1"><a class="header-anchor" href="#字符类" aria-hidden="true">#</a> 字符类</h2>
<ol>
<li>使用 <font color=green>方括号[]</font> 定义一个字符集，例如： <code v-pre>[abc]</code> 表示匹配 <code v-pre>a</code>、<code v-pre>b</code> 或 <code v-pre>c</code></li>
<li>可以在 <font color=green>方括号[]内</font> 使用 <code v-pre>^</code> 符号表示否定，例如： <code v-pre>[^abc]</code> 表示 匹配除 <code v-pre>a</code>、<code v-pre>b</code>和<code v-pre>c</code> 之外的任意字符</li>
</ol>
<h2 id="选择、分组和引用" tabindex="-1"><a class="header-anchor" href="#选择、分组和引用" aria-hidden="true">#</a> 选择、分组和引用</h2>
<ol>
<li>
<font color=green>|</font>: 用于选择，匹配左边或者右边的模式</li>
<li>
<font color=green>()</font>: 用于分组，可以将一部分模式组合在一起</li>
<li>
<font color=green>\1、\2</font>: 引用前面的分组</li>
</ol>
<h2 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h2>
<ol>
<li><code v-pre>g</code>: 全局搜索，不仅返回第一个匹配，而是返回所有的匹配</li>
<li><code v-pre>i</code>: 不区分大小写搜索</li>
<li><code v-pre>m</code>: 多行搜索、让<code v-pre>^</code>、<code v-pre>$</code> 分别匹配字符串的开始和结束，以及任何行的开始和结束</li>
<li><code v-pre>y</code>: 执行“粘性”搜索，要求匹配必须从给定的位置开始</li>
<li><code v-pre>u</code>: 将模式视为Unicode 序列点的序列，这样就能正确的吃力四个字节的UTF-16编码</li>
<li><code v-pre>s</code>: 让 <code v-pre>.</code> 特殊字符匹配任何字符（包括<code v-pre>\n</code>和<code v-pre>\w</code>）</li>
</ol>
<h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2>
<ol>
<li><code v-pre>exec()</code>: 在字符串中执行搜索匹配</li>
<li><code v-pre>test()</code>: 检测字符串中是否有匹配</li>
<li><code v-pre>match()</code>: 在字符串中查找匹配项，并返回匹配的数组</li>
<li><code v-pre>replace()</code>: 在字符串中替换匹配项</li>
<li><code v-pre>search()</code>: 在字符串中搜素匹配项，并返回索引</li>
<li><code v-pre>split()</code>: 使用正则表达式将字符串分割为数组</li>
</ol>
<h2 id="正则表达式对象属性" tabindex="-1"><a class="header-anchor" href="#正则表达式对象属性" aria-hidden="true">#</a> 正则表达式对象属性</h2>
<ol>
<li><code v-pre>global</code>: boolean, 表示是否设置了 <code v-pre>g</code> 修饰符</li>
<li><code v-pre>ignoreCase</code>: boolean, 表示是否设置了 <code v-pre>i</code> 修饰符</li>
<li><code v-pre>lastIndex</code>: 整数，表示下一次匹配的开始位置</li>
<li><code v-pre>multiline</code>: boolean, 表示是否设置了<code v-pre>m</code>修饰符</li>
<li><code v-pre>source</code>: 正则表达式的源文本</li>
<li><code v-pre>sticky</code>: boolean, 表示是否设置了 <code v-pre>y</code> 修饰符</li>
<li><code v-pre>unicode</code>: boolean, 表示是否设置了 <code v-pre>u</code> 修饰符</li>
</ol>
<h2 id="常用正则表达式规则匹配" tabindex="-1"><a class="header-anchor" href="#常用正则表达式规则匹配" aria-hidden="true">#</a> 常用正则表达式规则匹配</h2>
<ol>
<li>匹配数字：
<ul>
<li><code v-pre>/^\d+$/</code>: 匹配正整数</li>
<li><code v-pre>/^\d*.?\d*$/</code>: 匹配非负整数（包括0）</li>
<li><code v-pre>/^-[1-9]\d*$/</code>: 匹配负整数</li>
<li><code v-pre>/^-?\d+$/</code>: 匹配整数（整数、负数、0）</li>
<li><code v-pre>/^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/</code>: 匹配正浮点数</li>
<li><code v-pre>/^\d*\.?\d*(?!\.\d)$/</code>: 匹配非负浮点数(包括0)</li>
<li><code v-pre>/^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/</code>: 匹配负浮点数</li>
<li><code v-pre>/^-?\d*\.?\d*(?!\.\d)$/</code>: 匹配浮点数（包括正浮点数、0、负浮点数）</li>
</ul>
</li>
<li>匹配字母和数字
<ul>
<li><code v-pre>/^\w+$/</code>: 匹配由数字、26个英文字母或下划线组成的字符串</li>
<li><code v-pre>/^[A-Za-z0-9]$/</code>: 匹配由字母和数字组成的字符串</li>
</ul>
</li>
<li>匹配中文
<ul>
<li><code v-pre>^[\u4e00-\u9fa5]+$</code>: 匹配中文字符</li>
</ul>
</li>
<li>匹配特定格式
<ul>
<li><code v-pre>/^[a-z]+$/</code>: 匹配由小写字母组成的字符串</li>
<li><code v-pre>/^[A-Z]+$/</code>: 匹配由大写字母组成的字符串</li>
<li><code v-pre>/^[A-Za-z]+$/</code>: 匹配由字母组成的字符串（不区分大小写）</li>
<li><code v-pre>/^[A-Za-z0-9]+$/</code>: 匹配由数字和26个英文字母组成的字符串</li>
<li><code v-pre>/^\w+$/</code>: 匹配由数字、26个英文字母或者下划线组成的字符串</li>
<li><code v-pre>^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$</code>: 匹配邮箱地址</li>
<li><code v-pre>/^0\d{2}-?\d{8}$/</code>: 匹配国内电话号码（以3位区号、8位电话号码为例）</li>
<li><code v-pre>^\d{15}|\d{18}$</code>: 匹配身份证号（15位或18位）</li>
<li><code v-pre>/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/</code>: 匹配URL</li>
</ul>
</li>
<li>匹配特定字符
<ul>
<li><code v-pre>/^\s*$/</code>: 匹配由空格组成的字符串</li>
<li><code v-pre>^\S*$</code>: 匹配由非空格字符组成的字符串</li>
<li><code v-pre>/^\t*$/</code>: 匹配由制表符组成的字符串</li>
<li><code v-pre>^\T*$</code>: 匹配由非制表符组成的字符串</li>
</ul>
</li>
<li>其他常见规则匹配
<ul>
<li><code v-pre>/^特定字符串/</code>: 匹配开头是某个特定字符串</li>
<li><code v-pre>/特定字符串$/</code> : 匹配结尾是某个特定字符串</li>
<li><code v-pre>/.*特定字符串.*/</code>: 匹配包含某个特定字符串</li>
<li><code v-pre>^(?!.*特定字符串).*$</code>: 匹配不包含某个特定字符串</li>
</ul>
</li>
</ol>
</div></template>


