var a = [1,3,10,2,8,11,25,18];

for(var i = 0; i < a.length; i++){
    for(var j = a.length-1; j>i; j--){
        if(a[j]<a[j-1]){
            var tmp = a[j];
            a[j] = a[j-1];
            a[j-1] = tmp;
        }
    }
}

console.log(a);