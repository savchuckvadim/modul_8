

let myMap = new Map();

myMap.set ('ключ', 'значение');

myMap.set (1, 'первое');

myMap.set (true, 78);

myMap.set ('mountains', 26);

let k =  myMap.keys();


for(let name of myMap.keys()){
  console.log (name)
}

for (let [key, value] of myMap) {
  console.log(`Ключ - ${key}, Значение - ${value}`);
}
