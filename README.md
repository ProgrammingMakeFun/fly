# fly
html模块化加载，无node.js，纯js操作

1、创建子页面，并且根节点为 template
<br/>
2、在主页面中的定义一个div标签，添加属性：load-url='子页面地址'：
        
        <script src="fly.js"></script>
        <script type="text/javascript">
          $k.doLoad('.box');
        </script>
       
     
3、fly会在内部将子页面template标签里的内容抓取到主页面中 

QQ:2393584716
 
