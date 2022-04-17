let html = document.querySelector('#html');
let style = document.querySelector("#style");
let n = 0;
let string = `
/*您好，我是Alen
*接下来我演示一下我的前端功底
*首先我要准备一个div
我要加的样式是*/
body{
    color:red;
}
#div1{
    width:200px;
    height:200px;

}
/*接下来我把div变成一个八卦图
*注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 300px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:white;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}`;
let string2 = [];
// setInterval(()=>{
//     n=n+1;
//     demo.innerHTML = n;
// },1000);
let step = ()=>{
    setTimeout(()=>{
        // console.log(n);
        //简化写法:如果是回车就不照搬，如果不是回车就照搬
        // string[n] === '\n'?string2+='<br>':string2+=string[n];
        if (string[n] === '\n') string2 += '<br>';
        else if (string[n] === ' ') string2 += '&nbsp;';
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 0);
};
step();

//# sourceMappingURL=index.de158e3a.js.map
