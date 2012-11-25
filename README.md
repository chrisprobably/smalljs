smalljs
=======

Smalltalk-like class semantics, collections and loops for JavaScript

Classes:
--------

Define and instantiate a class:

    Person = Object.subclass();
    var somebody = Person.new();

Give it a constructor:

    Person = Object.subclass({
        initialize: function() {
            console.log('A new person created!);
        }
    });
    var somebody = Person.new(); // prints 'A new person created!'

Pass some arguments to your constructor:

    Person = Object.subclass({
		initialize: function() {
			console.log('Hello ' + this.firstName + ' ' + this.lastName);
		}
	});
    var person = Person.new({firstName: 'Keith', lastName: 'Fellows'}); // prints 'Hello Keith Fellows'

Loops:
------

Basic do loop:

    from(3).to(6).do(function(n) {
        console.log(n);
    });

prints:

    3
    4
    5
    6

Step by whatever number you like:

    from(1).to(9).by(2).do(function(n) {
        console.log(n);
    });

prints:

    1
    3
    5
    7
    9

Count backwards:

    from(3).to(0).do(function(n) {
        console.log(n);
        if (n == 0) {
            console.log('Lift Off!');
        }
    });

prints:

    3
    2
    1
    0
    Lift Off!


