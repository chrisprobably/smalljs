Object.prototype.subclass = function(mixin) {
	var obj = new SmallJsBaseObject();
	for (var p in this) {
		obj[p] = this[p];
	}
	for (var p in mixin) {
		obj[p] = mixin[p];
	}
	return obj;
};

SmallJsBaseObject = function() {
	this.new = function(params) {
		for (var p in params) {
			this[p] = params[p];
		}
		if (this.initialize instanceof Function) {
			this.initialize(params);
		}
		return this;
	};
};

Dictionary = Object.subclass({
	initialize: function() {
		this._map = {};
	},
	at: function(key) {
		this.key = key;
		return this;
	},
	put: function(value) {
		this._map[this.key] = value;
		return value;
	},
	get: function(key) {
		return this._map[key];
	},
	do: function(fn) {
		for (var p in this._map) {
			if (this._map.hasOwnProperty(p)) {
				fn(p, this._map[p]);
			}
		}
		return this;
	},
	removeKey: function(key) {
		delete this._map[key];
	},
	includesKey: function(key) {
		for (var p in this._map) {
			if (this._map.hasOwnProperty(p) && p === key) {
				return true;
			}
		}
		return false;
	},
	size: function() {
		var size = 0;
		for (var p in this._map) {
			if (this._map.hasOwnProperty(p)) {
				size++;
			}
		}
		return size;
	}
});

Number.prototype.to = function(number) {
	this.start = this.valueOf();
	this.end = number;
	return this;
};

Number.prototype.do = function(fn) {
	var stepBy = this.stepBy || 1;
	if (this.start > this.end) {
		for (var i = this.start; i >= this.end; i -= stepBy) {
			fn(i);
		}
	} else {
		for (var i = this.start; i <= this.end; i += stepBy) {
			fn(i);
		}
	}
};

Number.prototype.by = function(number) {
	this.stepBy = number;
	return this;
};

from = function(number) {
	return new Number(number);
};