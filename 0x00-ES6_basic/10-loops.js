export default function appendToEachArrayValue(array, appendstring) {
	const a = [];
	for (const value of array) {
		a.push(appenstring + value);
	}

	return a;
}
