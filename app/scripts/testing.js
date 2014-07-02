// Setup
var log = function (text) { $('#logme').append(text + '<br /><br />'); }

// Person Constructor
var Person = function (options) {
  var options = options || {};
  this.name = options.name;
  this.age = options.age;
  this.location = options.location;
  this.drive = function(car, altered_state) {
  car.condition = altered_state;
  }
};

// Person Prototype
Person.prototype.info = function () {
  var str = this.name + ' is currently ' + this.age + ' years old!';
  log(str);
};


// Person Instances
var personA = new Person({
  name: 'Tim',
  age: 30,
  location: 'Atlanta'
});

var personB = new Person({
  name: 'Taylor',
  age: 27,
  location: 'ATV'
});


// Car Constructor
var Car = function (options) {
  var options = options || {};
  this.make = options.make;
  this.color = options.color;
  this.condition = options.condition || 'New';
};


// Car Instances
var accord = new Car({
  make: 'Honda',
  color: 'Black'
});

accord.owner = personB;

var jeep = new Car({
  make: 'Dodge',
  color: 'Army Green',
  condition: 'Beat to Hell'
});

jeep.owner = personA;