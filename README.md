smalljs
=======

Smalltalk-like class semantics, collections and loops for JavaScript

Examples:

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
