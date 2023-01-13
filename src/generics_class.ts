class Example<T> {
	private _value: T;
	public get value(): T {
		return this._value;
	}
	public set value(value: T) {
		this._value = value;
	}

	constructor(value: T) {
		this._value = value;
	}
}

const example = new Example("vontade");
example.value = "garra";
console.log(example.value);

const example2 = new Example(123);
example2.value = 568;
console.log(example2.value);

const example3 = new Example(true);
example3.value = false;
console.log(example3.value);
