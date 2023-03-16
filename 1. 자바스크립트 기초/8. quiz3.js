

var height = +prompt('정사각형을 그립니다\n높이는 얼마인가요?');
var star = '';
for(var i=0;i<height; i++){
    for(var j=0;j<height;j++){
    star += '* ';
    }
    star += '\n';
}
alert(`${star}`);