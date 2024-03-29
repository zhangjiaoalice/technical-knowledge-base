## 应该掌握的知识点

#### WXML和WXSS：
1. 如何使用WXML进行页面结构搭建？
WXML 是框架设计的一套标签语言，结合 基础组件、事件系统，可以构建出页面结构

2. WXSS与CSS的区别是什么？
* `平台特性`： wxss 主要用于微信小程序，css 主要用于网页开发。虽然在微信小程序中允许使用部分css，但是两者还是存在一定的差异
* `尺寸单位`: 
    * WXSS 新增 <font color=red>rpx</font> 单位，这是一种响应式的尺寸单位，可以根据屏幕宽度进行自适应调整
    * CSS 中使用 <font color=red>px、%、vh/vw</font>
    * 规定屏幕宽度为750rpx，在 iPhone6 中，屏幕宽度为375px，共有750个像素，则 750rpx=375px=750像素<font color=red>1rpx = 0.5px = 1物理像素</font>
* `支持的选择器存在差异`:
    * 目前 WXSS 只支持一下几种选择器:
        * .class
        * #id
        * element
        * element,element
        * ::after
        * ::before
* `API 和组件`:
    * 微信小程序提供了丰富的API和组件，如位置、设备信息、网络请求等，这些组件都可以通过WXSS进行样式定制
    * CSS 很少涉及 微信小程序定制内置组件样式的功能
* `动态样式`:
    * WXSS 允许使用js代码动态设置样式
    * CSS 通常需要通过外部样式表或者内联样式来设置样式
* `组件化开发`: 
    * 组件可以拥有自己的样式表
    * CSS 通常是全局作用
* `兼容性`:
    * CSS 具有更好的跨浏览器兼容性
    * WXSS 主要针对微信小程序平台


#### 组件和API：
1. 微信小程序有哪些常用的组件？
2. 如何使用组件的属性、事件和方法？
3. 微信小程序提供了哪些API，如何使用它们？
4. 数据绑定和事件处理：
5. 如何进行数据绑定？
6. this.setData方法的作用和使用方式是什么？
7. 如何使用bind和catch方法绑定事件？


#### 性能优化：
1. 如何进行按需加载来减少首屏加载时间？
2. 如何使用懒加载来延迟加载非可视区域的内容？
3. 如何通过优化网络请求来提高性能？


#### 调试和测试：
1. 如何使用微信开发者工具进行调试和测试？
2. 如何使用console.log输出调试信息？
3. 如何进行断点调试？


#### 安全加固：
1. 如何对敏感操作进行校验？
2. 如何对数据进行加密？
3. 如何防止恶意请求攻击？


#### 跨平台开发：
1. 微信小程序是否支持跨平台开发？
2. 如何在不同平台上进行适配和优化？


#### 项目经验：
1. 你过去是如何使用微信小程序进行开发的？
2. 在项目中遇到了哪些问题，如何解决这些问题？
3. 你认为微信小程序在哪些方面还有待改进？


#### 未来展望：
1. 你对微信小程序未来的发展有何看法？
3. 你认为微信小程序在哪些方面还有待改进？