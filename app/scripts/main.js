// Hey Iron Yard Hackers! Enjoy!

//          __  _ ___ __  _          
//   __  __/ /_(_) (_) /_(_)__  _____
//  / / / / __/ / / / __/ / _ \/ ___/
// / /_/ / /_/ / / / /_/ /  __(__  ) 
// \__,_/\__/_/_/_/\__/_/\___/____/  

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __                 
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  ) 
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/  
// 
// ANSWERS GO HERE
//different dog to pass into new instance of new, on bottom
var Dog = function (info) {
//define function and creating empty object for user define
  var info = info || {};
  this.color = info.color;
  this.status = info.status || 'alive';
  //terinary short hand for if statements, do not just make it false...only make it false if it's not defined by terinary conditions
  this.hungry = (info.hungry === undefined) ? true : info.hungry;
};

//new variable to pass into new instances
var Human = function (info) {
  var info = info || {};
//if not define will give it this string or can be a a true or false...just note true or false don't need '' quotes  
  this.cool = info.cool || 'lame';
/*pet is the call id locater to find its function and running it...in this case, it hunts down the variable status...which 
is already define on top as this.status = info.staus || 'alive'. it will replaces the value or mutatating it to the new condition as "happy"
from the previous as "alive"
*/
  this.pet = function(pet) {
  pet.status = 'happy';
  };
  this.feed = function(feed) {
  feed.hungry = "Now he's fat, thanks allot";  
  };
};
// END ANSWERS

//        __                
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  ) 
// \__,_/\____/\__, /____/  
//            /____/ 
//new instance for dog, which is defined as sadie, same example as person then new instance of new is PersonA, PersonB etc...       
var sadie = new Dog({
  color: "blue",
//the last conditions don't need a comma?
  hungry: false
});
//don't forget to always have ({objects paramenter}), you don't need ":" inside the object paramter, just add "," for each, except for the last one
var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();
//     __                                    
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  ) 
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/  
var mason = new Human();
var thach = new Human();
var julia = new Human({
  cool: true
});
//                     __           __  __    _                             __  
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<   
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|  
//
// Don't edit this section. Instead make these tests pass by writing 
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('alive');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie blue", function(){
  expect(sadie.color).toBe('blue');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe("Now he's fat, thanks allot");
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should not affect Atticus and Moonshine's owner properties when setting Julia as Sadie's owner ", function(){
  sadie.owner = julia;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe('lame');
});
