# JavaScript 

## JS基础语法

### 1.JS三部分：

>ECMAScript： 规定了基础语法
>
>DOM: 文档对象模型
>
>BOM: 浏览器对象模型

### 2.书写位置：

1. 内嵌式 ：所以的js中的代码都是单引号 
2. 行内式
3. 外部式：链接式引入

### 3.注释

- 单行注释 ctrl + /
- 多行注释 shift alt  a 

### 4.输入输出

- prompt(info)   输入框  用户输入数据
- alert(msg)   弹出警示框 展示给用户的
- console.log  浏览器控制台打印输出信

```js
    <script>
        // 输入框
        prompt('请输入你的年龄');
        // alert 弹出警示框 展示给用户的
        alert('计算的结果是');
     // console 控制台 浏览器控制台打印输出信息 供程序员使用的
        console.log('hello world');
         // alert("helloworld!");
    </script>
```

### 5.变量

#### 1.概述

白话：装东西的盒子 

通俗：用来存放数据的容器，存储数据

本质：内存中申请的一块用来存放数据的空间

***回忆C语言中的内存管理知识***

#### 2.变量使用

声明变量

>var age;  // 声明一个名称为age的变量 var 是JS中的关键词

```js
 var age;

 age = 10;

 alert(age); // 弹出
```



#### 3.初始化

```js
		var myage = 10;
 		console.log(myage);
```

案例1：

```js
      	//声明多个变量
		var myname = '张三';
        var age = '22';
        var email = '2863519726@qq.com';
        console.log(myname);
        console.log(age);
        console.log(email);
```

案例1升级:

```js
		//一次声明多个变量 用逗号分隔	
	    var ages = 18,
        	mynames = '李四';
        console.log(mynames);
        console.log(ages);
```

案例2：

```js
        // 1.输入用户名
        var myname = prompt('请输入你的名字');
        //输入用户名
        alert(myname);
```

#### 4.命名规范

- 由字母、数字、下划线、$组成
- 严格区分大小写
- 遵守驼峰命名法  myFirstName

#### 5.逻辑交换

```js
        var a1 = '青苹果';
        var a2 = '白苹果';
        var temp;
        temp = a1;
        a1 = a2;
        a2 = temp;
        alert(a1);
        alert(a2);
```

### 6.数据类型

#### 1.简介

**数据和数据的存储空间有关，js中也有不同的数据类型**

>JS是一种弱类型语言或者是一种动态语言
>
>java : int num = 10; num 一定为整型
>
>JS : var num;  //  js的变量数据类型只有程序在运行过程中，根据等号右边的值来确定的

js是动态语言 变量的数据类型可以变化的

```js
var x = 10; // x为数字型

x = ‘red’; // x是字符型
```

#### 2.简单数据类型

| 简单数据类型 | 说明                                         |
| :----------: | -------------------------------------------- |
|    Number    | 数字型，包含整数和浮点数值                   |
|   Boolean    | 布尔值类型                                   |
|    String    | 字符串类型，字符串都是是引号的  一般用单引号 |
|  Undefined   | var a; 声明但是没有给值                      |
|     Null     | var a = null;声明了变量a为空                 |

1. isNaN() 判断一个变量是否是数字和字符串

   alert(isNaN(22));  返回false

2. 字符串嵌套：var str = '我想去"南方"看看'; 

   **外双内单和外单内双**

3. 转义符：\n 换行  都是用 \ 开头

#### 3.检测字符串长度

1.检测获取字符串的长度

```js
	var str = 'my name is zhangsan';
​    alert(str.length);
```

2.字符串的拼接

```js
	alert('hello'+'world');
	helloworld
```

```js
alert('12'+12) // '1212' 数值字符串+数值 还是字符串
```

```js
 		var age = 20;
        console.log('张三'+age+'岁');
//变量和字符串相连口诀 引引加加 变量不能加引号通过+连接
```

3.案例分析

交互：

- 用户输入
- 内部拼接
- 输出结果

```js
        var age = prompt('请输入你的年龄');
    
        alert('张三'+age+'岁');
```

```js
		var age = prompt('请输入你的年龄');
        var str = '张三'+age+'岁';
        alert(str);
```

#### 4.获取变量数据类型

typeof 关键字

```js
		var name = 'chenyi';
        alert(typeof name);
```

#### 5.数据类型转换

转字符串型

1. toString
2. String
3. 加号拼接字符串

>//变量.toString
>
>​    var num = 10;
>
>​    var str = num.toString();
>
>​    alert(typeof str);
>
>
>
>​    //String(num)
>
>​    alert(String(num));
>
>​    
>
>​    //拼接
>
>​    alert(num + ' ');

转数字型 parseInt 

> //1. parseInt(变量)
>
> ​    var age = prompt('请输入你的年龄');
>
> ​    console.log(parseInt(age));
>
> ​    // alert(parseInt(age));
>
> ​    console.log(parseInt('120px')); //120
>
>  //2. number
>
> ​    var str = '123';
>
> ​    console.log(Number(str));
>
> ​    console.log(Number('12'));

案例：

```js
 var year = prompt('请输入你的初生年');//输入的是字符型
        var age = 2022 - year;//隐式转换 -year变成了数值型
        var str = '您的年龄是'+(year-age)+'岁';
        alert(str);
```









