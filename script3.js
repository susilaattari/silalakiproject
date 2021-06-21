var s="";
var g=" "
var pola=4;

for (var i =0 ; i<10; i++){
    //membuat sepasi kesamping
    for (var j=10; j>i; j--) {
        s += " ";
    }
    //membuat * kesamping
    for(var k=0; k<=i; k++){
        s += " *";
    }
        
    s += "\n";
}
//bawah
for (var l =0 ; l<=10; l++){
    //membuat sepasi kesamping
    for (var m=0; m<l; m++) {
        s += " ";
    }
    //membuat * kesamping
    for(var n=10; n>=l; n--){
        s += " *";
    }
        
    s += "\n";
}
console.log(s)
//factorial
// function factorial (n){
//     var a =1;
//     var b =1;
//     while (b<=n){
//         a+=b;
//         b++;
//     }
//     return a;
// }
// for (var b=0; b<pola; b++){
//     for(var c=pola; c>=b; c--){
//         g +=" ";
//     }
//     for(var c=0; c<=b; c++){
//         g += factorial(b)/(factorial(c) * factorial(b-c))+ ' ';
//     }
//     g+= "\n";
// }
// console.log(g);