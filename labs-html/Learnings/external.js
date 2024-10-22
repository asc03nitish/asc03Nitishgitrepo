let map1 = new Map();
map1.set('Rajat','Maggie');
map1.set('Bodha','Idli');
map1.set('Nitish','Dosa');
map1.set('Harsh','Puri');
map1.set('Aayush','Juice');
for(let[keys,values] of map1){
    console.log(keys, values);
}
console.log("        ");
map1.forEach((keys, values)=>{console.log(values, keys)}
);

// spread operator: Used to convet map into array
const mapArray = [...map1];
console.log(mapArray);

//Destructuring
const [name, food]=mapArray[0];
console.log(`Name: ${name} , Food: ${food}`);


