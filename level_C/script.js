console.log("===== ЗАДАНИЕ 174 =====");

function calculateRentalCost(rate, hours) {
    if (
        !Number.isFinite(rate) ||
        !Number.isFinite(hours) ||
        rate < 0 ||
        hours < 0
    ) {
        return "Ошибка входных данных";
    }

    let cost = rate * hours;

    if (hours > 5) {
        cost *= 0.9;
    }

    return cost;
}

let hourlyRate = 1500;
let hours = 6;

console.log(
    "Стоимость аренды:",
    calculateRentalCost(hourlyRate, hours),
    "₸"
);

console.log("===== ЗАДАНИЕ 175 =====");

let project = {
    name: "AI Assistant",
    progress: 75,
    deadlinePassed: false
};

function checkProjectStatus(project) {
    if (project.progress === 100) {
        return "Проект завершён";
    } else if (project.deadlinePassed) {
        return "Проект просрочен";
    } else if (project.progress < 50) {
        return "Начальный этап";
    } else {
        return "Проект в разработке";
    }
}

console.log(project.name, checkProjectStatus(project));

console.log("===== ЗАДАНИЕ 176 =====");

function generateCertificate(name, course, score) {
    if (score < 70 || score > 100 || score < 0) {
        return "Сертификат не выдан";
    }

    return `
СЕРТИФИКАТ
Студент: ${name}
Курс: ${course}
Балл: ${score}
Курс успешно завершён!
    `;
}

console.log(
    generateCertificate("Алия", "JavaScript Basics", 95)
);

console.log("===== ЗАДАНИЕ 177 =====");

let teams = [
    { name: "Code Masters", points: 85 },
    { name: "AI Innovators", points: 98 },
    { name: "Digital Team", points: 91 },
    { name: "Web Creators", points: 79 }
];

function rankTeams(teams) {
    if (teams.length === 0) {
        console.log("Список команд пуст");
        return;
    }

    let sorted = [...teams].sort((a, b) => b.points - a.points);

    sorted.forEach((team, index) => {
        console.log(
            `${index + 1}. ${team.name} — ${team.points} баллов`
        );
    });

    let average = teams.reduce(
        (sum, team) => sum + team.points,
        0
    ) / teams.length;

    console.log("Победитель:", sorted[0].name);
    console.log("Средний балл:", average);
}

rankTeams(teams);

console.log("===== ЗАДАНИЕ 178 =====");

let models = [
    { name: "Robot Case", grams: 120 },
    { name: "Phone Stand", grams: 45 },
    { name: "Gear", grams: 30 }
];

function calculatePrintCost(grams, pricePerGram) {
    return grams * pricePerGram;
}

let totalGrams = 0;

for (let model of models) {
    totalGrams += model.grams;

    console.log(
        `${model.name}: ${calculatePrintCost(model.grams, 8)} ₸`
    );
}

let maxModel = models.reduce((a, b) =>
    a.grams > b.grams ? a : b
);

console.log("Общий расход:", totalGrams, "г");
console.log("Максимальный расход:", maxModel.name);
console.log(
    "Итоговая стоимость:",
    calculatePrintCost(totalGrams, 8),
    "₸"
);

console.log("===== ЗАДАНИЕ 179 =====");

let computers = [
    { id: 1, hours: 6, working: true },
    { id: 2, hours: 0, working: false },
    { id: 3, hours: 9, working: true },
    { id: 4, hours: 4, working: true }
];

let working = computers.filter(c => c.working);
let broken = computers.filter(c => !c.working);

let totalHours = computers.reduce(
    (sum, computer) => sum + computer.hours,
    0
);

let maxComputer = computers.reduce((a, b) =>
    a.hours > b.hours ? a : b
);

console.log("Исправных компьютеров:", working.length);
console.log("Неисправные ID:", broken.map(c => c.id));
console.log("Общее время работы:", totalHours, "ч");
console.log(
    "Максимальное время работы:",
    maxComputer.id,
    "компьютер —",
    maxComputer.hours,
    "ч"
);

console.log("===== ЗАДАНИЕ 180 =====");

let expenses = [
    { category: "Дизайн", amount: 50000 },
    { category: "Разработка", amount: 180000 },
    { category: "Тестирование", amount: 40000 },
    { category: "Хостинг", amount: 25000 }
];

function analyzeBudget(expenses) {
    if (expenses.length === 0) {
        console.log("Расходы отсутствуют");
        return;
    }

    let total = expenses.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    let mostExpensive = expenses.reduce((a, b) =>
        a.amount > b.amount ? a : b
    );

    console.log("Общий бюджет:", total, "₸");

    for (let item of expenses) {
        let percent = item.amount / total * 100;

        console.log(
            `${item.category}: ${item.amount} ₸ (${percent.toFixed(2)}%)`
        );
    }

    console.log(
        "Самая дорогая статья:",
        mostExpensive.category,
        mostExpensive.amount,
        "₸"
    );
}

analyzeBudget(expenses);

console.log("===== УРОВЕНЬ C ЗАВЕРШЁН =====");