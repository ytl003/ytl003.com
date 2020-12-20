---
title: call，apply与bind方法的区别
date: 2020-12-20
description: call，apply与bind方法的区别
categories:
 - share
tags:
 - js
---

:::  tip 摘要

转自 [https://blog.csdn.net/pedrojuliet/article/details/70664696](https://blog.csdn.net/pedrojuliet/article/details/70664696)

call，apply与bind他们都三个特点

- 改变函数的this对象的指向的。

- 第一个参数都是this要指向的对象。

- 都可以利用后续参数传参。

但是他们也有一些不同之处，下面就让我们来看看

:::

## 1.call

通过call方法，将其执行环境添加到第一个参数的执行环境中，简单来说，this就会指向第一个参数那个对象。

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("call方法：");
        console.log(this.user); //哈哈哈哈哈
    }
}
var b = a.fn;
b.call(a);
```

这时this就将b添加到a中了，这就相当于：

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("call方法：");
        console.log(this.user);
    }
}
a.fn(); //哈哈哈哈哈
```

**当然，call也可以传入多个参数，如：**

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(x，y){
        console.log("call方法：");
        console.log(this.user); //哈哈哈哈哈
        console.log(x+y);//3
    }
}
var b = a.fn;
b.call(a，1,2);
```

## 2.apply

apply与call也很类似，他也可以改变this的指向，也能传入其他参数，但是是以数组的形式传入的

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("apply方法：");
        console.log(this.user); //哈哈哈哈哈
    }
}
var b = a.fn;
b.apply(a);
```

第二个参数必须是数组：

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(x，y){
        console.log("apply方法：");
        console.log(this.user); //哈哈哈哈哈
        console.log(x+y);//4
    }
}
var b = a.fn;
var array = [1,3];
b.apply(a，array);//或者：b.apply(a,[1,3]);
```

**注意：如果call和apply的第一个参数写的是null，那么this指向的是window对象**

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("apply方法：");
        console.log(this);
        //Window {external: Object, chrome: Object, document: document, a: Object, speechSynthesis: SpeechSynthesis…}
    }
}
var b = a.fn;
b.apply(null);
```

## 3.bind

bind与call和apply方法是不相同的，但是不管怎样他们都是可以改变this指向。
bind传入的第一个函数如果只是个对象，那么结果是不会被打印出来的。

```
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("bind方法：");
        console.log(this.user);
    }
}
var b = a.fn;
b.bind(a);
```

如果这样写的话是不会出现任何结果的，因为bind方法返回的是一个修改过后的函数。
该这样写：

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(){
        console.log("bind方法：");
        console.log(this.user);
    }
}
var b = a.fn;
b.bind(a)();//哈哈哈哈哈
//或者：var c=b.bind(a);   c();
console.log(c);
//function() { [native code] },这样会输出fn函数
```

同样的bind也可以传入多个参数，但是该参数是按顺序传入的

```javascript
var a = {
    user:"哈哈哈哈哈",
    fn:function(e,d,f){
        console.log("bind方法：");
        console.log(this.user); //哈哈哈哈哈
        console.log(e,d,f); 
    }
}
var b = a.fn;
// 5
var c = b.bind(a,5);
c(1,2);
// 1
// 2
// underfined
```

## 总结：

call和apply都是改变上下文中的this并立即执行这个函数，bind方法可以让对应的函数想什么时候调就什么时候调用，并且可以将参数在执行的时候添加，这是它们的区别，根据自己的实际情况来选择使用。