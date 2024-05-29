const arr = [];
const obj = {};

if (!arr.length) {
  console.log('масив порожній');
}

if (!Object.keys(obj).length) {
  console.log('об`єкт порожній');
}

// function name(params) {

// }

// name(name2);

// function name2(params) {

// }

// const arr2 = [1, 2, 3];

// const res = arr2.map(elem => {
//   console.log(elem);
//   return elem + 1;
// });
// console.log(res);

// const res = arr2.reduce((acc, elem) => {
//   console.log(acc);
//   return elem * acc;
// }, 1);

// console.log(res);

const fruit = { name: 'apple', price: 200 };

const fruitCopy = { ...fruit };

// Угруповання об'єктів за якістю
// Створіть масив об'єктів, що являють собою різних студентів. Кожен об'єкт повинен містити властивості ім'я, вік та курс. Використовуйте цикл for...of, щоб згрупувати студентів за курсами.
// Результатом буде об'єкт, де ключами будуть назви курсів, а значення – масиви об'єктів студентів, що належать до відповідного курсу.
// Очікуванний результат:
// const groupedStudents = {
//   Java: [
//     { name: "Алиса", age: 20, course: "Java" },
//     { name: "Карл", age: 21, course: "Java" },
//   ],
//   Python: [{ name: "Боб", age: 22, course: "Python" }],
//   JavaScript: [{ name: "Джон", age: 23, course: "JavaScript" }],
// };
const students = [
  { name: 'Алиса', age: 20, course: 'Java' },
  { name: 'Боб', age: 22, course: 'Python' },
  { name: 'Карл', age: 21, course: 'Java' },
  { name: 'Джон', age: 23, course: 'JavaScript' },
];
const courseStudent = {};

for (const student of students) {
  if (!courseStudent[student.course]) {
    courseStudent[student.course] = [];
  }
  courseStudent[student.course].push(student);
}
console.log(courseStudent);
