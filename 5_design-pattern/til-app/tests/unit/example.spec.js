// --- 테스트 할 내용 ---
function sum(a, b) {
	return a + b;
}

sum(10, 20); // 30
// ---

describe('example.spec.js', () => {
	test('sum 함수 테스트', () => {
		const result = sum(10, 20);
		expect(result).toBe(30);
	});
});
