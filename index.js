

function BoardMember(name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  this.veto = function () {
    console.log("No, I must disagree");
    return "No, I must disagree";
  };

  this.approve = function () {
    console.log("You can do that!");
    return "You can do that!";
  };

  this.doCharity = function () {
    console.log("I like to help people.");
    return "I like to help people.";
  };

  this.releasePressStatement = function () {
    console.log("You will see great things from Scuber.");
    return "You will see great things from Scuber.";
  };

  this.sayHi = function () {
    console.log(`Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`);
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  };
}
