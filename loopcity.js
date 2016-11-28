var count = null;
for (count = 0;count<=100;count++){
  console.log(count);
}

var animalCount=null;
for (animalCount = 2; animalCount <=7; animalCount++){
console.log("there are "+animalCount+" many animals in Noah's Arc");
}

var partyAnimals = ["pig","dog","cat","wolf","snail"];
for (x = 0; x <=4; x++){
  console.log(partyAnimals[x]);
}

var weaponChest = ["Mace","Sorcerer's Stone","Excalibur"];
var hero{
  name: "Merlin",
  weapon: "Mace",
  power:30
};
function something(par) {
  if (hero.name=="Merlin"&&hero.weapon=="Sorcerer's Stone"){
    console.log(hero.name+ " shall slay the dragon with the"+hero.weapon);
  }
  else{
    hero.weapon="Sorcerer's Stone";
    console.log(hero.name+" is ready for war with the "+hero.weapon);
  }
}