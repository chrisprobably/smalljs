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


