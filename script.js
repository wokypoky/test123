let question = prompt('Какой проект отобразить?', 'галлерея форма');


let yes = document.querySelector('.yes');
if (question === 'галлерея') {
    yes.innerHTML = 'yes';
    var forma = document.querySelector('.forma');
    forma.classList.add('hidden');
} else if (question === 'форма') {
    yes.innerHTML = 'not';
    var gallery = document.querySelector('.gallery');
    gallery.classList.add('hidden');
}

var srcPictures = [
    '3.png',
    '567.png',
    'lolo.png',
];
var pictures = document.querySelectorAll('.littlePicture');
var bigPicture = document.querySelector('.bigPicture');
var enterImg = function(picture, link) {
picture.addEventListener('click', function() {
    bigPicture.src = link;
});
};
for (var i = 0; i < pictures.length; i++) {
    enterImg(pictures[i], srcPictures[i]);
}




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
var removeMessage = function(button, element) {
    button.addEventListener('click', function() {
    element.remove();
    });
};

var messages = listMessages.children;

var emptyMessage = listMessages.querySelector('.emptymessage');

console.log(messages.length);


// Обработчик на отправку формы
form.addEventListener('submit', function(evt){

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
    if (textNewMessage.textContent >= 1 || textNewMessage.textContent < 1) {
        textNewMessage.textContent = 'Ошибка!(введено число)';
    }
    if (Number(amountNewMessage.textContent) < 0 ) {
        amountNewMessage.textContent = 'Ошибка!(отр. ч.)';
        amountNewMessage.classList.add('littleclass');
    }
    listMessages.appendChild(newMessage);
    input2.value = '';
    input1.value = '';
});