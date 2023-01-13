// function example<T>(value: T): T {
// 	return value;
// }

// console.log(example<string>("Deu certo!"));

// const test2 = <T>(value: T): T => {
// 	return value;
// };

// console.log(test2<number>(35));

function doubleGenerics<T, U>(value1: T, value2: U): any {
	if (typeof value1 === "string" && typeof value2 === "string") {
		return `${value1} ${value2}`;
	}
	if (typeof value1 === "number" && typeof value2 === "number") {
		return Number(value1) + Number(value2);
	}
	return "Os parâmetros precisam ser 'string' ou 'numeros' consecutivos";
}

console.log(doubleGenerics<string, string>("ok", "true"));
console.log(doubleGenerics<string, number>("ok", 123));
console.log(doubleGenerics<number, number>(12, 21));
