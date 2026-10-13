console.log("===== ЗАДАНИЕ 166 =====");

let attendance = [1, 1, 0, 1, 0, 1, 1, 1, 0, 1];

let present = 0;
let absent = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === 1) {
        present++;
    } else {
        absent++;
    }
}

console.log("Присутствуют:", present);
console.log("Отсутствуют:", absent);
console.log("Посещаемость:", present / attendance.length * 100 + "%");

console.log("===== ЗАДАНИЕ 167 =====");

for (let i = 50; i >= 1; i--) {
    console.log(i);
}

console.log("Числа, кратные 5:");

for (let i = 50; i >= 1; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

console.log("===== ЗАДАНИЕ 168 =====");

let equipment = [180000, 250000, 95000, 420000, 160000, 310000];

let total = 0;

for (let price of equipment) {
    total += price;
}

console.log("Общая стоимость:", total, "₸");
console.log("Максимальная цена:", Math.max(...equipment), "₸");
console.log("Минимальная цена:", Math.min(...equipment), "₸");
console.log("Средняя стоимость:", total / equipment.length, "₸");

console.log(
    "Дороже 200000 ₸:",
    equipment.filter(price => price > 200000)
);

console.log("===== ЗАДАНИЕ 169 =====");

let numbers = [];
let sum = 0;

for (let i = 1; i <= 80; i++) {
    if (i % 4 === 0) {
        numbers.push(i);
        sum += i;
    }
}

console.log("Числа:", numbers);
console.log("Количество:", numbers.length);
console.log("Сумма:", sum);

console.log("===== ЗАДАНИЕ 170 =====");

let words = ["computer", "AI", "programming", "web", "algorithm"];

for (let word of words) {
    console.log(`${word}: ${word.length} символов`);
}

let shortest = words.reduce((a, b) =>
    a.length <= b.length ? a : b
);

let longest = words.reduce((a, b) =>
    a.length >= b.length ? a : b
);

let totalLength = 0;

for (let word of words) {
    totalLength += word.length;
}

console.log("Самое короткое слово:", shortest);
console.log("Самое длинное слово:", longest);
console.log("Средняя длина:", totalLength / words.length);

console.log("===== ЗАДАНИЕ 171 =====");

let quantities = [12, 5, 8, 20, 3, 15, 7];

let quantityTotal = quantities.reduce((sum, n) => sum + n, 0);
let belowTen = quantities.filter(n => n < 10);

console.log("Общее количество:", quantityTotal);
console.log("Минимальный остаток:", Math.min(...quantities));
console.log("Максимальный остаток:", Math.max(...quantities));
console.log("Остатки менее 10:", belowTen);
console.log("Количество таких позиций:", belowTen.length);

console.log("===== ЗАДАНИЕ 172 =====");

let cubes = [];

for (let i = 1; i <= 10; i++) {
    cubes.push(i ** 3);
}

console.log("Массив кубов:", cubes);

console.log("===== ЗАДАНИЕ 173 =====");

let products = [
    "Ноутбук",
    "Монитор",
    "Клавиатура",
    "Мышь",
    "Принтер"
];

let search = "Принтер";

console.log(
    products.includes(search)
        ? "Товар найден"
        : "Товар отсутствует"
);

let found = products.some(product =>
    product.toLowerCase() === search.toLowerCase()
);

console.log("Поиск без учёта регистра:", found);
console.log("===== УРОВЕНЬ B ЗАВЕРШЁН =====");