# fly
html模块化加载，无node.js，纯js操作

1、创建模块化页面：

  header.html
    <template>
      <h1>我是导航栏</h1>
    </template>
  
  main.html
    <template>
      <h1>我是页面主题内容</h1>
    </template>
  
  footer.html
    <template>
      <h1>我是底部版权栏</h1>
    </template>

2、创建主页面 index.html
    <!DOCTYPE html>
    <html>
      <head>
        <title>主页面</title>
        <meta charset="UTF-8">
      </head>
      <body>
        <div class="box" load-url="header.html"></div>
        <div class="box" load-url="main.html"></div>
        <div class="box" load-url="footer.html"></div>

        <script src="fly.js"></script>
        <script type="text/javascript">
          $k.doLoad('.box');
        </script>
      </body>
    </html>
    
 3、fly会在内部将三个子页面的内容抓取到主页面中
 
    

