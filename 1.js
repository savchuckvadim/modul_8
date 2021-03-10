

let numb = + prompt('Введите число');
let even = numb % 2;



if (!Number.isNaN(numb)){
  if(even == 0){
    console.log ('число чётное!');
  }
  else { console.log ('число нечётное!')
       }
} else {
  console.log ('Упс, кажется, Вы ошиблись')
}
