# 文档编辑语法实例

---

## 普通语法：

---

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## 插件支持：

---

#### 1. 添加高亮 `emphasize`


This text is {% em %}highlighted !{% endem %}

This text is {% em %}highlighted with **markdown**!{% endem %}

This text is {% em type="green" %}highlighted in green!{% endem %}

This text is {% em type="red" %}highlighted in red!{% endem %}

This text is {% em color="#ff0000" %}highlighted with a custom color!{% endem %}

```

This text is {% em %}highlighted !{% endem %}

This text is {% em %}highlighted with **markdown**!{% endem %}

This text is {% em type="green" %}highlighted in green!{% endem %}

This text is {% em type="red" %}highlighted in red!{% endem %}

This text is {% em color="#ff0000" %}highlighted with a custom color!{% endem %}

```

---

#### 2. 添加 emoji 表情 `advanced-emoji`

#####[点击选择](https://emojipedia.org/)

:bowtie: :smile: :laughing: :blush: :smiley:

```
 `:bowtie:` `:smile:` `:laughing:` `:blush:` `:smiley:`
```

## 添加前端代码

<pre>
	&lt;style>
        input:disabled{
            border:2px solid blue;
            background-color:gold;
      		color:red;
        }
        input:focus{
            border:3px solid red;
            color:yellow;
        }
        input:checked{
            display:block;
            width:50px;
            height:50px;
        }
        input:enabled{
            background-color:pink;
        }
    &lt;/style>
    &lt;form>
        &lt;input type="text" disabled value="这是一个废弃标签"/>
        &lt;input type="text" value="这是测试focus的"/>
        &lt;input type="text" value="未设置的背景色是pink的"/>
        &lt;input type="checkbox"/>
        &lt;input type="checkbox"/>
    &lt;/form>
</pre>

#### 显示效果

<pre>
	<style>
        input:disabled{
            border:2px solid blue;
            background-color:gold;
      		color:red;
        }
        input:focus{
            border:3px solid red;
            color:yellow;
        }
        input:checked{
            display:block;
            width:50px;
            height:50px;
        }
        input:enabled{
            background-color:pink;
        }
    </style>
    <form>
        <input type="text" disabled value="这是一个废弃标签"/>
        <input type="text" value="这是测试focus的"/>
        <input type="text" value="未设置的背景色是pink的"/>
        <input type="checkbox"/>
        <input type="checkbox"/>
    </form>
</pre>