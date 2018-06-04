# fly
html模块化加载，无node.js，纯js操作

1、创建子页面，并且根节点为 template
<br/>
2、在主页面中：
    <textarea rows="15" cols="100">
        <div class="box" load-url="header.html"></div>
        <div class="box" load-url="main.html"></div>
        <div class="box" load-url="footer.html"></div>
        <script src="fly.js"></script>
        <script type="text/javascript">
          $k.doLoad('.box');
        </script>
    </textarea>
       
     
3、fly会在内部将三个子页面的内容抓取到主页面中 

    

