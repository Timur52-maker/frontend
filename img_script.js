document.addEventListener('DOMContentLoaded', function() {
    const myPhoto = document.getElementById('my_photo');

    // Массив изображений для замены
    const images = [
        "./photka1.jpg",
        "./IMG_FINISH.jpg"
    ];

    let currentIndex = 0;

    // Увеличение изображения при наведении
    myPhoto.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });

    // Возврат к исходному размеру при уходе курсора
    myPhoto.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });

    // Обработчик клика для вращения и замены изображения
    myPhoto.addEventListener('click', function() {
        // Вращение изображения
        myPhoto.style.transition = 'transform 0.5s ease'; // Плавный переход для вращения
        myPhoto.style.transform = 'rotate(360deg)';

        // Задержка перед заменой изображения
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
            myPhoto.src = images[currentIndex]; // Замена изображения

            // Сброс трансформации после замены изображения
            myPhoto.style.transform = 'rotate(0deg)';
        }, 500); // Время задержки должно совпадать с временем анимации вращения
    });

    // Обработчик двойного клика для отображения сообщения
    myPhoto.addEventListener('dblclick', function() {
        alert("Сообщение о двойном клике!");
    });
});