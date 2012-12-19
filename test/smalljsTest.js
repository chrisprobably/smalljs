var assert = require("assert");
require("../small.min");

describe('Dictionary', function(){
	it('should allow putting and getting of data', function(){
		var apples = Dictionary.new();
		apples.at('Bobs Farm').put('Cooking Apples');
		apples.at('Crazy Mikes Farm').put('Cider Apples');
		assert.equal('Cooking Apples', apples.get('Bobs Farm'));
		assert.equal('Cider Apples', apples.get('Crazy Mikes Farm'));
	})	
	it('should count the number of items', function(){
		var apples = Dictionary.new();
		assert.equal(0, apples.size());
		apples.at('Bobs Farm').put('Cooking Apples');
		apples.at('Crazy Mikes Farm').put('Cider Apples');
		assert.equal(2, apples.size());
	})
	it('should allow checking for the existence of a key', function(){
		var apples = Dictionary.new();
		apples.at('Bobs Farm').put('Cooking Apples');
		assert.ok(apples.includesKey('Bobs Farm'));
	})	
	it('should allow removal of items', function(){
		var apples = Dictionary.new();
		apples.at('Bobs Farm').put('Cooking Apples');
		assert.ok(apples.includesKey('Bobs Farm'));
		apples.removeKey('Bobs Farm');
		assert.equal(false, apples.includesKey('Bobs Farm'));
	})
	it('should be possible to loop over the contents', function(){
		var appleTypes = [];
		var apples = Dictionary.new();
		apples.at('Crisp').put('Golden Delicious');
		apples.at('Sharp').put('Granny Smith');
		apples.do(function(key, value) {
			appleTypes.push(key + ': ' + value);
		});
		assert.deepEqual(['Crisp: Golden Delicious', 'Sharp: Granny Smith'], appleTypes);
	})	
})

describe('Object', function(){
	describe('#subclass()', function(){
		it('should inherit methods from superclass', function(){
			var Superclass = Object.subclass({
				doSomething: function() {
					return 'Superclass';
				}
			});
			var Subclass = Superclass.subclass();
			var superclassInstance = Superclass.new();
			var subclassInstance = Subclass.new();
			assert.equal('Superclass', superclassInstance.doSomething());
			assert.equal('Superclass', subclassInstance.doSomething());
		})		
		it('should be able to override methods from superclass', function(){
			var Superclass = Object.subclass({
				doSomething: function() {
					return 'Superclass';
				}
			});
			var Subclass = Superclass.subclass({
				doSomething: function() {
					return 'Subclass';
				}				
			});
			var superclassInstance = Superclass.new();
			var subclassInstance = Subclass.new();
			assert.equal('Superclass', superclassInstance.doSomething());
			assert.equal('Subclass', subclassInstance.doSomething());
		})
	})	
	describe('#new()', function(){
		it('should call initialize method on instantiation', function(){
			var Person = Object.subclass({
				initialize: function() {
					this.name = this.firstName + ' ' + this.lastName;
				}
			});
			var person = Person.new({firstName: 'Keith', lastName: 'Fellows'});
			assert.equal('Keith Fellows', person.name);
		})		
	})
})
describe('loop block', function() {
	it('should iterate from a number, to a number', function() {
		var numbers = [];
		from(3).to(6).do(function(n) {
			numbers.push(n);
		});
		assert.deepEqual([3,4,5,6], numbers);
	})
	it('should be able to increment by any number', function() {
		var oddNumbers = [];
		from(1).to(9).by(2).do(function(n) {
			oddNumbers.push(n);
		});
		assert.deepEqual([1,3,5,7,9], oddNumbers);
	})
	it('should be able to loop backwards', function() {
		var numbers = [];
		from(3).to(0).do(function(n) {
			numbers.push(n);
		});
		assert.deepEqual([3,2,1,0], numbers);
	})
})
