let question = prompt('Какой проект отобразить?', 'галлерея форма персонаж');


let yes = document.querySelector('.yes');
if (question === 'галлерея') {
    yes.innerHTML = 'галлерея';
    var forma = document.querySelector('.forma');
    forma.classList.add('hidden');
} else if (question === 'форма') {
    forma = document.querySelector('.forma');
    yes.innerHTML = 'форма';
    var gallery = document.querySelector('.gallery');
    gallery.classList.add('hidden');
    forma.classList.add('top');
} else if (question === 'персонаж') {
    var coolCharacter = document.querySelector('.coolcharacter');
    yes.innerHTML = 'персонаж';
    var gallery = document.querySelector('.gallery');
    gallery.classList.add('hidden');
    var forma = document.querySelector('.forma');
    forma.classList.add('hidden');
}
var srcPictures = [
    '3.png',
    '567.png',
    'lolo.png',
];
var pictures = document.querySelectorAll('.littlePicture');
var bigPicture = document.querySelector('.bigPicture');
var enterImg = function (picture, link) {
    picture.addEventListener('click', function () {
        bigPicture.src = link;
    });
};
for (var i = 0; i < pictures.length; i++) {
    enterImg(pictures[i], srcPictures[i]);
}


// Форма для создания сообщений

// Список всех сообщений
var listMessages = document.querySelector('.listMessages');

// Форма и поля текстов для ввода(названия и числа)
var form = document.querySelector('.form');
var input1 = form.querySelector('.message-input1');
var input2 = form.querySelector('.message-input2');

// Целое сообщение в темплате в документ-фрагменте
var templateMessage = document.querySelector('#template').content;
var newTemplateMessage = templateMessage.querySelector('.message');

// Кнопка отправки сообщения
var messageButton = form.querySelector('.message-button');

// Кнопка удаления
var removeMessage = function (button, element) {
    button.addEventListener('click', function () {
        element.remove();
    });
};

var messages = listMessages.children;

var emptyMessage = listMessages.querySelector('.emptymessage');

console.log(messages.length);


// Обработчик на отправку формы
form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var newMessage = newTemplateMessage.cloneNode(true);

    var textNewMessage = newMessage.querySelector('.message-text');
    textNewMessage.textContent = input1.value;

    var numberNewMessage = newMessage.querySelector('.message-number');
    numberNewMessage.textContent = i - 2;
    i++;

    var amountNewMessage = newMessage.querySelector('.message-amount');
    amountNewMessage.textContent = input2.value;

    var deleteButton = newMessage.querySelector('.button-remove');
    removeMessage(deleteButton, newMessage);

    if (isNaN(textNewMessage.textContent) === false) {
        textNewMessage.textContent = 'Ошибка!(введено число)';
    }

    if (Number(amountNewMessage.textContent) < 0) {
        amountNewMessage.textContent = 'Ошибка!(отр. ч.)';
        amountNewMessage.classList.add('littleclass');
    }

    listMessages.appendChild(newMessage);

    input2.value = '';
    input1.value = '';
});

// Секундомер
let timer = document.querySelector('.timer');
let stime = 0;

function goTime() {
    timer.innerHTML = stime;
    stime++;
}

// Обновить таймер?
let reloadTimer = document.querySelector('#reloadbutton');
reloadTimer.addEventListener('click', function (evt) {
    stime = 0;
});
setInterval(goTime, 1000);

// Создание и вывод свойств объекта с помощью for (let ... in obj) {}

let characterSizeScroll = document.querySelector('.charactersizescroll');
let characterSizeName = document.querySelector('.sizecharacter');


let characterIntelectScroll = document.querySelector('.characterintelectscroll');
let characterIntelectName = document.querySelector('.intelectcharacter');

let characterPowerScroll = document.querySelector('.characterpowerscroll');
let characterPowerName = document.querySelector('.powercharacter');

let character = document.querySelector('.character');

let intelectpoints = document.querySelectorAll('.intelect');

let powerpoints = document.querySelectorAll('.power');
characterSizeScroll.oninput = function () {
    if (this.value == 1) {
        characterSizeName.innerHTML = 'Размер: малыш';
        character.classList.remove('characterbig');
        character.classList.remove('characteraverage');
        character.classList.add('charactersmall');

        intelectpoints[0].classList.add('smallintelect');
        intelectpoints[0].classList.add('a1');
        intelectpoints[1].classList.add('smallintelect');
        intelectpoints[1].classList.add('a2');
        intelectpoints[2].classList.add('smallintelect');
        intelectpoints[2].classList.add('a3');

        powerpoints[0].classList.add('smallintelect');
        powerpoints[0].classList.add('p1');
        powerpoints[1].classList.add('smallintelect');
        powerpoints[1].classList.add('p2');
        powerpoints[2].classList.add('smallintelect');
        powerpoints[2].classList.add('p3');

        intelectpoints[0].classList.remove('bigintelect');
        intelectpoints[1].classList.remove('bigintelect');
        intelectpoints[2].classList.remove('bigintelect');
        intelectpoints[0].classList.remove('b1');
        intelectpoints[1].classList.remove('b2');
        intelectpoints[2].classList.remove('b3');

        powerpoints[0].classList.remove('bigintelect');
        powerpoints[0].classList.remove('pb1');
        powerpoints[1].classList.remove('bigintelect');
        powerpoints[1].classList.remove('pb2');
        powerpoints[2].classList.remove('bigintelect');
        powerpoints[2].classList.remove('pb3');
    } else if (this.value == 2) {
        character.classList.remove('charactersmall');
        character.classList.remove('characterbig');
        intelectpoints[0].classList.remove('smallintelect');
        intelectpoints[0].classList.remove('a1');
        intelectpoints[1].classList.remove('smallintelect');
        intelectpoints[1].classList.remove('a2');
        intelectpoints[2].classList.remove('smallintelect');
        intelectpoints[2].classList.remove('a3');
        intelectpoints[0].classList.remove('bigintelect');
        intelectpoints[1].classList.remove('bigintelect');
        intelectpoints[2].classList.remove('bigintelect');
        intelectpoints[0].classList.remove('b1');
        intelectpoints[1].classList.remove('b2');
        intelectpoints[2].classList.remove('b3');

        powerpoints[0].classList.remove('smallintelect');
        powerpoints[0].classList.remove('p1');
        powerpoints[1].classList.remove('smallintelect');
        powerpoints[1].classList.remove('p2');
        powerpoints[2].classList.remove('smallintelect');
        powerpoints[2].classList.remove('p3');
        powerpoints[0].classList.remove('bigintelect');
        powerpoints[0].classList.remove('pb1');
        powerpoints[1].classList.remove('bigintelect');
        powerpoints[1].classList.remove('pb2');
        powerpoints[2].classList.remove('bigintelect');
        powerpoints[2].classList.remove('pb3');
        characterSizeName.innerHTML = 'Размер: средний';
    } else if (this.value == 3) {
        character.classList.add('characterbig');
        characterSizeName.innerHTML = 'Размер: гигант';

        intelectpoints[0].classList.remove('smallintelect');
        intelectpoints[0].classList.remove('a1');
        intelectpoints[1].classList.remove('smallintelect');
        intelectpoints[1].classList.remove('a2');
        intelectpoints[2].classList.remove('smallintelect');
        intelectpoints[2].classList.remove('a3');

        powerpoints[0].classList.remove('smallintelect');
        powerpoints[0].classList.remove('p1');
        powerpoints[1].classList.remove('smallintelect');
        powerpoints[1].classList.remove('p2');
        powerpoints[2].classList.remove('smallintelect');
        powerpoints[2].classList.remove('p3');

        intelectpoints[0].classList.add('bigintelect');
        intelectpoints[1].classList.add('bigintelect');
        intelectpoints[2].classList.add('bigintelect');
        intelectpoints[0].classList.add('b1');
        intelectpoints[1].classList.add('b2');

        intelectpoints[2].classList.add('b3');
        powerpoints[0].classList.add('bigintelect');
        powerpoints[0].classList.add('pb1');
        powerpoints[1].classList.add('bigintelect');
        powerpoints[1].classList.add('pb2');
        powerpoints[2].classList.add('bigintelect');
        powerpoints[2].classList.add('pb3');
    }
};

characterIntelectScroll.oninput =  function () {
    if (this.value == 1) {
        characterIntelectName.innerHTML = 'Интеллект: тупийца';
        intelectpoints[0].classList.remove('hidden');
        intelectpoints[1].classList.add('hidden');
        intelectpoints[2].classList.add('hidden');
    } else if (this.value == 2) {
        characterIntelectName.innerHTML = 'Интеллект: средний';
        intelectpoints[0].classList.remove('hidden');
        intelectpoints[1].classList.remove('hidden');
        intelectpoints[2].classList.add('hidden');
    } else if (this.value == 3) {
        characterIntelectName.innerHTML = 'Интеллект: гений';
        intelectpoints[0].classList.remove('hidden');
        intelectpoints[1].classList.remove('hidden');
        intelectpoints[2].classList.remove('hidden');
    }
};
characterPowerScroll.oninput = function () {
    if (this.value == 1) {
        characterPowerName.innerHTML = 'Сила: слабак';
        powerpoints[0].classList.remove('hidden');
        powerpoints[1].classList.add('hidden');
        powerpoints[2].classList.add('hidden');
    } else if (this.value == 2) {
        characterPowerName.innerHTML = 'Сила: средний';
        powerpoints[0].classList.remove('hidden');
        powerpoints[1].classList.remove('hidden');
        powerpoints[2].classList.add('hidden');
    } else if (this.value == 3) {
        characterPowerName.innerHTML = 'Сила: силач';
        powerpoints[0].classList.remove('hidden');
        powerpoints[1].classList.remove('hidden');
        powerpoints[2].classList.remove('hidden');
    }
};
var characteristicOfCharacter = {
    name: '123',
    old: '5',
};
characteristicOfCharacter['возраст'] = 15;
for (let key in characteristicOfCharacter) {
    console.log(key + ' - ' + characteristicOfCharacter[key]);
}