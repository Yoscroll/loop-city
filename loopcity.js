var count = null;
for (count = 0;count<=100;count++){
  console.log(count);
}


var animalCount=null;
for (animalCount = 2; animalCount <7; animalCount++){
console.log("there are "+animalCount+" many animals in Noah's Arc");
}


var partyAnimals = ["pig","dog","cat","wolf","snail"];
for (x = 0; x <=4; x++){
  console.log(partyAnimals[x]);
}


var weaponChest = ["Mace","Sorcerer's Stone","Excalibur"];
var hero={
  name: "Merlin",
  weapon: "Mace",
  power:30
};
function something(name,weapon) {
  if (name=="Merlin"&&weapon=="Sorcerer's Stone"){
    console.log(name+ " shall slay the dragon with the"+weapon);
  }
  else{
    weapon=weaponChest[1];
    console.log(name+" is ready for war with the "+weapon);
  }
}
something(hero.name,hero.weapon);