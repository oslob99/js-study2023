
for (var i = 0; i < 3; i++){
    for( var j = 0; j < 2; j++){
        if( i === j){
            break;
        }
        console.log(`[ ${i}, ${j} ]`);
    }
}





for (var i = 0; i < 5000; i++){
    var rn = Math.floor(Math.random()*10)+1;
    console.log(rn);
    if(rn ===3){
        console.log(`반복문 종료 : ${i}`);
        break;
    }
    
}