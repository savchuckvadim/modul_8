

let X = false;

let y = typeof(X);


if (y == "number"){
  console.log('X - число')
}
else if (y == "string"){
  console.log('X - строка')
}
else if (y == "boolean"){
  console.log('X - логический тип данных')
}
else{
  console.log('Тип не определен')
}