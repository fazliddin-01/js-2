let son1 = +prompt('1-sonni kiriting');
let son2 = +prompt('2-sonni kiriting');
let son3 = +prompt('3-sonni kiriting');

if (son2<son1 && son1<son3 || son2>son1 && son1>son3){
    alert('1-son orta qiymat ' + son1)
}else if (son1<son2 && son2<son3 || son1>son2 && son2>son3){
    alert('2-son orta qiymat ' + son2)
}else if (son1<son3 && son3<son2 || son1>son3 && son3>son2){
    alert('3-son orta qiymat ' + son3)
}else{
    alert("siz son kiritmadingiz")
}