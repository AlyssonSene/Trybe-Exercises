const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dmgDragonCalculator = () => {
  const dmgMin = 15;
  const strengthDragon = dragon.strength;
  const damage = Math.floor((Math.random() * (strengthDragon - dmgMin) + dmgMin));
  return `Dragon damage: ${damage}`;
};

const dmgWarriorCalculator = () => {
  const dgmMin = warrior.strength;
  const dmgMax = warrior.weaponDmg * dgmMin;
  const damage = Math.floor((Math.random() * (dmgMax - dgmMin) + dgmMin ));
  return `Warrior damage: ${damage}`;
};

const dmgMageCalculator = () => {
  const dmgMin = mage.intelligence;
  const dmgMax = dmgMin * 2;
  const damage = Math.floor((Math.random() * (dmgMax - dmgMin) + dmgMin));
  return `Mage damage: ${damage}`;
};


console.log(dmgDragonCalculator(dragon));
console.log(dmgWarriorCalculator(warrior));
console.log(dmgMageCalculator(mage));



