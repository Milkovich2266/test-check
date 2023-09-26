import capitalize from '../src/capitalize.js';

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
}

if (capitalize('text') !== 'Text') {
    throw new Error('Функция работает неверно!');
}

console.log('Тесты пройдены!');