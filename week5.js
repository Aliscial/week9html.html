
// var p = document.createElement('P');
// p.textContent = 'Figure out what breed is best suited for your living situation.  ';
// console.log(p);

// var a = document.querySelector('a');


// var li = document.querySelector('li');
// var a = li.firstElementChild;

// var li = document.querySelector('li');

// li.parentElement.removeChild(li);


// li.insertBefore(p, a)

class player {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }
  describe() {
    return '${this.name} plays ${this.position},';
  }
}
class Pets {
  constructor(name) {
    this.name = name;
    this.players = [];
  }
  addPlayer(player) {
    if (player instanceof player) {
      this.player.push(player);
    } else {
      throw new Error(`You can only add an instance of player. Arguement is not a player: ${player}`);
    }
  }
  describe() {
    return `${this.name} has ${this.players.length} players,`
  }
}


class Menus {
  constructor() {
    this.pets = [];
    this.selectedpets = null;
  }
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createpets();
          break;
        case '2':
          this.deletepets();
          break;
        case '3':
          this.displaypets();
          break;
        default:
          selection = 0;
  
      }
      selection = this.showMainMenuOptions();
    }
    alert('Goodbye!');
  };
  showMainMenuOptions() {
    return prompt(`
    0) exit
    1)create new Dog
    2) Delete Dogs
    3) Display All Dogs
    `);
  }
  displaypets(){
    let petsString = '';
    for (let i = 0; i < this.pets.length; i++) {
      console.log(this.pets)
      petsString += i + ')' + this.pets[i].name + '\n';

    }
    alert(petsString);
  }

  createpets(){
    let name = prompt('Enter name for new pets');
    this.pets.push(new Dog(name));



  }

  
  deletepets(){
    let index = prompt('Enter the index of the pets you wish to delete:');
    if (index > -1 && index < this.pets.length) {
       this.pets.splice(index,1);
      // let description = 'Pets Name:' + this.selectedpets.name + `\n`;
      // for (let i = 0; i < this.selectedpets.players.length; i++) {
      //   description += 'Pets Name'; '+ this.selectedPets.name' + `\n`;

      //   for (let i = 0; i < this.selectedpets.players.length; i++) {
      //     description += i + ')' + this.selectedpets.players[i].name +
      //       '-' + this.selectedpets.players[i].position + '\n';
      //   } 

      //   let selection = this.showpetsMenuoptions(description);
      //   switch (selection) {
      //     case '1':
      //       this.createPlayer();
      //       break;
      //     case '2':
      //       this.deletePlayer();
      //   }

      // }
    }
  }
}  



// showpetsMenuOptions(petsInfo){
//   return prompt(`
//   0) back
//   1) create player
//   2) view pets
//   3) delete pets
//   4) display all pets
//   `);
// }
// showPetsMenuOptions(teamInfo) {
//   return prompt(`
//   0) back
//   1) create player
//   2) delete player
//   .....................
//   ${teamInfo}

//   `);


// }







class Dog {

  constructor(name) {
    this.name = name;
  
  }
}






let menus = new Menus()
menus.start()