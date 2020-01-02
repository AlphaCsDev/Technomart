var result=0;
var arr=new Array();
for(var i=0;i<10;i++){
    arr[i]=i*2;
    document.write(arr[i]+"<br>");
}

for( i=0;i < arr.length;i++){
    result += arr[i];
    document.write(result);
    console.log(typeof(result));
    console.log(typeof(arr));
}