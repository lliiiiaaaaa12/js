console.log("===== ЗАДАНИЕ 160 =====");
console.log("JavaScript Practice 160-180");

console.log("===== ЗАДАНИЕ 161 =====");

let age = 19;

if (age >= 16 && age <= 25) {
    console.log("Регистрация разрешена");
} else {
    console.log("Возраст не соответствует требованиям");
}

[15, 16, 25, 26].forEach(age => {
    console.log(
        `Возраст ${age}:`,
        age >= 16 && age <= 25
            ? "Регистрация разрешена"
            : "Возраст не соответствует требованиям"
    );
});

console.log("===== ЗАДАНИЕ 162 =====");

let totalComputers = 24;
let occupiedComputers = 18;

if (
    occupiedComputers < 0 ||
    occupiedComputers > totalComputers
) {
    console.log("Ошибка: некорректное количество компьютеров");
} else {
    let freeComputers = totalComputers - occupiedComputers;

    console.log("Свободных компьютеров:", freeComputers);

    if (freeComputers > 5) {
        console.log("Места есть");
    } else if (freeComputers >= 1) {
        console.log("Мест осталось мало");
    } else {
        console.log("Кабинет заполнен");
    }
}

console.log("===== ЗАДАНИЕ 163 =====");

function checkScore(score) {
    if (score < 0 || score > 100) {
        return "Некорректный балл";
    } else if (score <= 39) {
        return "Начальный";
    } else if (score <= 59) {
        return "Базовый";
    } else if (score <= 79) {
        return "Средний";
    } else {
        return "Продвинутый";
    }
}

let score = 76;

console.log("Результат:", checkScore(score));

[39, 40, 79, 80, 101].forEach(value => {
    console.log(value, "баллов:", checkScore(value));
});

console.log("===== ЗАДАНИЕ 164 =====");

function checkDelivery(isPaid, inStock) {
    if (!isPaid) {
        return "Ожидается оплата";
    } else if (!inStock) {
        return "Товар отсутствует";
    } else {
        return "Заказ отправлен";
    }
}

console.log(checkDelivery(true, true));
console.log(checkDelivery(false, true));
console.log(checkDelivery(true, false));
console.log(checkDelivery(false, false));

console.log("===== ЗАДАНИЕ 165 =====");

function checkTest(timeSpent, score) {
    if (timeSpent > 30) {
        return "Превышено время";
    } else if (score < 50) {
        return "Тест не сдан";
    } else {
        return "Тест успешно завершён";
    }
}

let timeSpent = 25;
let testScore = 80;

console.log(checkTest(timeSpent, testScore));
console.log("===== УРОВЕНЬ A ЗАВЕРШЁН =====");