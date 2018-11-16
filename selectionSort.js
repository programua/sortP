var a = [1,3,10,2,8,9,4];

for(var i = 0; i<a.length-1; i++){
    var min = a[i];
    var k = i;

    for(var j = i+1; j<a.length; j++){
        if(min > a[j]){
            min = a[j];
            k = j;
        };
    }

    var tmp = a[i];
    a[i] = a[k];
    a[k] = tmp;
}
console.log(a);