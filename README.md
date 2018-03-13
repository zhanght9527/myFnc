## myFnc

自己日常开发中以及网上总结下来的常用函数封装，包括cookie、ajax、dom操作、自适应浏览器前缀等

_函数的语法使用的是es6_

### 使用方法

### 引入myFnc.js

#### 1.trim

    myFnc.trim (str, type)

去除字符串的空格

param **{String}** str-待处理的字符串

param **{Int}** type-去除空格的形式（1-所有空格  2-前后空格  3-前空格 4-后空格，不传返回原字符串)

#### 2.repeatStr

    myFnc.repeatStr (str, count)

字符串循环复制

param **{String}** str-待复制的字符串

param **{Int}** type-复制的次数

#### 3.checkType

    myFnc.checkType (str, type)

检测字符串

param **{String}** str-待检测的字符串

param **{Int}** type-检测类型（email、phone、tel、number、English、text、Chinese、lower、upper）

#### 4.checkPwd

    myFnc.checkPwd (str)

检测密码强度

param **{String}** str-待检测的密码字符串

密码长度小于6为0，大写+1，小写+1，数字+1

#### 5.randomWord

    myFnc.randomWord (count)

随机码

param **{Int}** count-取值范围2-36

##### demo

    myFnc.randomWord(10)
    result："2584316588472575"

    myFnc.randomWord(14)
    result："9b405070dd00122640c192caab84537"

    myFnc.randomWord(36)
    result："83vhdx10rmjkyb9"

#### 6.formatText

    myFnc.formatText(str, size, delimiter)

格式化处理字符串

param **{String}** str-待处理的字符串

param **{Int}** size-间隔,默认3

param **{String}** delimiter-间隔符，默认','

##### demo

    myFnc.formatText('1234asda567asd890')
    result："12,34a,sda,567,asd,890"

    myFnc.formatText('1234asda567asd890',4,' ')
    result："1 234a sda5 67as d890"

    myFnc.formatText('1234asda567asd890',4,'-')
    result："1-234a-sda5-67as-d890"

#### 7.longestWord

    myFnc.longestWord(str, splitType)

找出最长单词

param **{String}** str-字符串

param **{splitType}** size-间隔符，默认' '

#### 8.removeRepeatArray

	myFnc.removeRepeatArray (arr)

数组去重

param **{Array}** arr-待去重数组

#### 9.upsetArr

	myFnc.upsetArr (arr)

数组顺序打乱

param **{Array}** arr-待打乱数组

#### 10.maxArr

	myFnc.maxArr (arr)

数组最大值

param **{Array}** arr-待处理数组

#### 11.minArr

	myFnc.minArr (arr)

数组最小值

param **{Array}** arr-待处理数组

#### 12.sumArr

	myFnc.sumArr (arr)

数组求和

param **{Array}** arr-待处理数组

#### 13.covArr

	myFnc.covArr (arr)

数组平均值

param **{Array}** arr-待处理数组

#### 14.randomOne

	myFnc.randomOne (arr)

从数组中随机获取元素

param **{Array}** arr-待处理数组

#### 15.getOptionArray

	getOptionArray (arr, keys)

获取对象数组某些项

param **{Array}** arr-待处理数组

param **{Sting}** keys-要获取的值的属性，多个属性用','分割

##### demo
    var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]

    myFnc.getOptionArray(arr,'a')
    result： [1, 2, 5, 4, 4]

    myFnc.getOptionArray(arr,'a,c')
    result：[{a: 1, c: 9},{a: 2, c: 5},{a: 5, c: undefined},{a: 4, c: 5},{a: 4, c: 7}]

#### 16.filterOptionArray

    myFnc.filterOptionArray(arr, keys)

description-过滤对象数组某些项

param **{Array}** arr-待处理数组

param **{Sting}** keys-要过滤的值的属性，多个属性用','分割

##### demo

    var arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]

    myFnc.filterOptionArray(arr,'a')
    result： [1, 2, 5, 4, 4]

    myFnc.filterOptionArray(arr,'a,c')
    result：[{b: 2},{b: 3},{b: 9},{b: 2},{b: 5}]

#### 17.setFontSize

	myFnc.setFontSize (_client)

适配rem

param **{Ine}** _client-效果图宽度，默认750

#### 18.getEndTime

	myFnc.getEndTime (endTime)

到某一个时间的倒计时

param **{String}** endTime-结束时间(需要正确的时间格式)

##### demo

    myFnc.getEndTime('2017/11/22 16:0:0')
    //目前时间是2017.11.6  17.14.55
    result：{
        d:15,
        h:22,
        m:46,
        s:43
    }

#### 19.randomNumber

	myFnc.randomNumber (n1, n2)

随机返回一个范围的数字

param **{Int}** n1-最小值

param **{Int}** n2-最大值

如果只传入一个参数，则返回0到这个参数的随机数，如果没有传参，则返回0-255的随机数

#### 20.setUrlPrmt

	myFnc.setUrlPrmt (obj)

设置url参数

param **{Object}** obj-需要设置的参数

##### demo

    myFnc.setUrlPrmt({'a':1,'b':2})
    result：a=1&b=2

#### 21.getUrlPrmt

	myFnc.getUrlPrmt (url)

获取url参数

param **{String}** url-超链接,如果没有则获取当前的url

##### demo

    myFnc.getUrlPrmt('github.com?draftId=122000011938')
    result：{draftId: "122000011938"}

#### 22.filterParams

	filterParams (obj)

清除对象中值为空的属性

param **{Object}** obj-待操作的对象

##### demo

    myFnc.filterParams({a:"",b:null,c:"010",d:123})
    result：{c: "010", d: 123}

#### 23.checkBrowser

	checkBrowser (type)

手机类型判断

param **{String}** type-手机类型（android、iphone、ipad、weixin）

#### 24.delayFn

    myFnc.delayFn(fn, delay, mustDelay)

函数节流

param **{String}** fn-执行的函数

param **{Number}** delay-间隔时间

param **{Number}** mustDelay-最大间隔时间

##### demo

     var count=0;
     function fn1(){
         count++;
         console.log(count)
     }
     //每100ms连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔200ms至少执行一次
     document.onmousemove=myFnc.delayFn(fn1,100,200)
	
#### 25.setCookie

    myFnc.setCookie(name, value, iDay)

description-设置cookie

param **{String}** name-cookie名

param **{String}** value-cookie值

param **{Int}** iDay-时间（天数）

### 26.getCookie

    myFnc.getCookie(name)

获取cookie

param **{String}** name-cookie名

### 27.removeCookie

    myFnc.removeCookie(name)

删除cookie

param **{String}** name-cookie名

#### 28.hasClass

    myFnc.hasClass(obj, classStr)

检测对象是否有哪个类名

param **{Object}** obj-Dom对象

param **{String}** classStr-class名

##### demo

    myFnc.classStr(obj,'test')
    result:true|false

#### 29.addClass

    myFnc.addClass(obj, classStr)

添加类名

param **{Object}** obj-Dom对象

param **{String}** classStr-class名

##### demo

    myFnc.addClass(obj,'test')

#### 30.removeClass

    myFnc.removeClass(obj, classStr)

添加类名

param **{Object}** obj-Dom对象

param **{String}** classStr-class名

##### demo

    myFnc.removeClass(obj,'test')

#### 31.replaceClass

    myFnc.replaceClass(obj, newName, oldName)

替换类名

param **{Object}** obj-Dom对象

param **{String}** newName-被替换的类名

param **{String}** oldName-替换的类名

##### demo

    myFnc.replaceClass(obj,'test','afterClass')

#### 32.siblings

    myFnc.siblings(obj, opt)

获取兄弟节点

param **{Object}** obj-Dom对象

param **{String}** opt-过滤条件

##### demo

    myFnc.siblings(obj,'#id')
    result：符合条件的Dom对象

#### 33.show

    myFnc.show(obj)

显示对象

param **{Object}** obj-Dom对象

#### 34.hide

    myFnc.hide(obj)

隐藏对象

param **{Object}** obj-Dom对象

#### 35.prefixStyle

	prefixStyle (style)

自动适配浏览器前缀

param **{String}** style-需要转换的css样式名称

##### demo

	const transform = myFnc.prefixStyle('transform')
	this.$refs.lyricList.$el.style[transform] = xxx

	result: this.$refs.lyricList.$el.style.webkitTransfrom = xxx

#### 36.ajax

    myFnc.ajax(obj)

ajax封装参数

param **{Object}** 对象参数

 * @param {string}obj.type http连接的方式，包括POST和GET两种方式
 * @param {string}obj.url 发送请求的url
 * @param {boolean}obj.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}obj.data 发送的参数，格式为对象类型
 * @param {function}obj.success ajax发送并接收成功调用的回调函数
 * @param {function}obj.error ajax发送失败或者接收失败调用的回调函数

##### demo

    myFnc.ajax({
      	type:'get',
      	url:'xxx',
      	data:{
      		id:'111'
      	},
      	success:function(res){
      		console.log(res)
      	}
    })


