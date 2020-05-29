
function BoardMember (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;

  // From what I read, I assumed arrow functions wouldn't work as methods or with "this" but these seem to do ok? Experimenting with it. 

 /*  this.veto = function() {
    return 'No, I must disagree';
  }; */

  this.veto = () => 'No, I must disagree';

 /*  this.approve = function () {
    return'You can do that!';
  }; */

  this.approve = () => 'You can do that!';

  this.doCharity = function () {
    return 'I like to help people.';
  };

  this.releasePressStatement = function () {
    return 'You will see great things from Scuber.';
  };

/*   this.sayHi = function () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
  }; */

  this.sayHi = () => `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;

}