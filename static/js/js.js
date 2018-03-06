// var imga=document.getElementById('imga');
// var buta=document.getElementById('buta');
// var inputa=document.getElementById('inputa');


// // 3.当点击button时，调用ajax上传图片
// buta.onclick=function(){
// // 2.获取上传的数据
// var getData=inputa.files[0];
// // 2.1创建格式化数据，
// var fd=new FormData();
// // 2.2格式化数据并以键值对的形式存放到fd对象中
// fd.append('imageIcon',getData);
// // 3.1创建XMLHttpRequest对象
// var xhr=new XMLHttpRequest();
// // 3.2使用open方法,设置请求
// xhr.open('POST','/ajaxUpload',true)
// // 3.3使用send方法发送数据
// xhr.send(fd);
// // 3.4监听发送数据状态
// xhr.onreadystatechange=function(){
// if(xhr.readyState===4){
// imga.src=xhr.responseText;
// }
// }
// }