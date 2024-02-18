# BOM 对象
浏览器对象模型（BOM）用于和浏览器进行交互,浏览器默认对象是 window

## window 对象下定义的属性

### document
文档对象模型

### history
history 对象表示用户访问的URL 数组，通过 history对象，可以加载上一页，下一页或者任何特定的页面
#### 属性
1. `length`: url 长度
#### 方法 
1. `forward`: 加载下一页
2. `back`: 返回上一页
3. `go`: 加载给定的页码
***

### screen
screen 对象保存了浏览器的屏幕信息，可用于获取显示屏幕的width、heigt、colorDepth、pixelDepth等
#### 属性
1. `width`
2. `height`
3. `availWidth`: 可用宽度
4. `availHeight`: 可用高度
5. `colorDepth`: 颜色深度
6. `pixelDepth`: 像素深度

***

### navigator
可用于获取浏览器的信息，如： `appName、appCodeName、userAgent`
#### 属性
1. `appName`: 应用名称
2. `appVersion`: 应用版本
3. `appCodeName`: 返回代码版本
4. `cookieEnabled`: 是否启用cookie
5. `userAgent`: 用户代理
6. `language`: 语言，仅支持Netscap和 firefox
7. `userLanguage`: 语言，仅支持IE
8. `plugins`: 返回插件，仅支持Netscap和 firefox
9. `systemLanguage`: 返回系统语言，仅支持ie
10. `mimeTypes[]`: 返回 mime 类型
11. `platform`
12. `online`: 浏览器是否在线

#### 方法
1. `javaEnabled`: 是否启用java
***

### location

