/* 
这里没有必要使用沙箱，原因如下
a. 沙箱是一个独立的作用域 ： 防止全局变量污染
b. 这个文件里面的变量 就需要是全局的
*/

//入口函数
$(function () {
    jeDate("#testico", {
        theme: { bgcolor: "#D91680", pnColor: "#FF6653" },
        isinitVal: true,
        format: "YYYY-MM-DD",
        festival: true,
        zIndex: 10001,
    });
    var E = window.wangEditor
    //将editor变成全局变量
    window.editor = new E('#editor')
    // 或者 var editor = new E( document.getElementById('editor') )
    editor.create()
});