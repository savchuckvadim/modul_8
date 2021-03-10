

function getOddEvenArr(a){
  let odd = 0;
  let even = 0;
  let zero = 0;
    
  for(let i = 0; i < arr.length; i++){
  if(isNaN(arr[i]) || arr[i] === null){}
  else{   
    if (arr[i] === 0){zero++}
    else if(arr[i] !== 0){
       if (arr[i] % 2 === 0){even++}
       else {odd++}; 
    }
   }  
  };
  
  console.log('четных - '+ even + ' нечётных - '+ odd + ' нулей - '+ zero);
  };
  
  let  arr = [2, 6, 7, 'гвоздь', 87, 0, 'петьдесят', 0, 67, 854, 12, null, '!'];
  getOddEvenArr(arr);
  