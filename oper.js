let runningtool=0;
let buffer='0';
let privousoperater;

const screen= document.querySelector('.screen');
function buttonclick(value){
    if(isNaN(value)){
        handleSymblo(value);
    }else{
        handleNumber(value);
    }
    screen.innerText=buffer;
}
function handleSymblo(symbol){
    switch(symbol){
        case'C':
        buffer="0",
        runningtool=0;
        break;
        case'=':
        if(privousoperater ===null){
            return;
        }
        flushOperater(parseInt(buffer));
        privousoperater =null;
        buffer =runningtool;
        runningtool=0;
        break;
    case'←':
    if(buffer.length===1){
        buffer="0";
    }else{
        buffer = buffer.toString(0,buffer.length-1)
    }
    break;
    case'+':
    case'-':
    case'*':
    case'/':
    handleMath(symbol);
    break;
    }
}
function handleMath(symbol){
    if(buffer ==='0'){
        return;
    }
    const inBuffer=parseInt(buffer);
    if(runningtool ===0){
        runningtool =inBuffer;
       }else{
        flushOperater(inBuffer);

       }
       privousoperater = symbol;
       buffer ='0';
          
}
function flushOperater(inBuffer){
    
    if(privousoperater === '+'){
        runningtool +=inBuffer;
    
    }else if(privousoperater ==='-'){
        runningtool -=inBuffer;
    
    }else if(privousoperater ==='*'){
          runningtool *=inBuffer;
    
    }else if(privousoperater ==='/'){
        runningtool  /=inBuffer;
    }
}
function handleNumber(numberString){
    if(buffer ==='0'){
       buffer=numberString;
    }else{
        buffer +=numberString;
    }
} 
function init(){
    document.querySelector('.calc-button')
    .addEventListener('click',function(event){
        buttonclick(event.target.innerText);
    })
}
init();