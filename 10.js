
function simpleNumbers(){
  let n = prompt('Введите число до 1000');
  let j = true;

  if (n <= 1000){
    
    for(let i = 2; i < n; i++){
      if (n % i == 0){
        j = false
      }
   
    }
    
    if (j == false){
      console.log (n);
      console.log ('число не простое');
    }
    else if (j == true)  { 
      console.log (n);
      console.log ('число  простое');
          }
  
  }


  
  else {
        alert('число больше 1000! введите другое число!');
        simpleNumbers();
        
       
       
        
  }}
simpleNumbers();
    