/* ОТНОСИТСЯ К ВЕРСТКЕ: цвет бэкграунда верхнего меню при скролле вниз */
const headerBackgroundColorValue = "rgba(30, 30, 30, 0.75)"

/* ОТНОСИТСЯ К ВЕРСТКЕ: размытие элементов под бэкграундом верхнего меню при скролле вниз */
const headerBackdropFilterValue = "blur(0.15vw)"

/* Вытаскиваем верхнее меню из DOM дерева */
const header = document.getElementsByClassName("header")

/* Получаем высоту меню и делим её на 2 */
const headerHeight = header[0].clientHeight / 2

/* Функция меняет цвет бэкграунда меню */
const headerBackgroundColor = value => {
    header[0].style.backgroundColor = value
}

/* Функция меняет размытие элементов под бэкграундом меню */
const headerBackdropFilter = value => {
    header[0].style.backdropFilter = value
}

/*
    Объявляем переменную состояния бэкграунда меню
    false - бэкграунд отсутсвует
    true  - бэкграунд присутствует
*/
let isHeaderHaveBackground

/* Срабатывает при любом скролле по вертикали */
document.addEventListener("scroll", () => {

    /* 
        Если проскроллили половину высоты верхнего меню
        Меняем состояние бэкграунда меню на true
        То есть добавляем бэкграунд и размываем элементы под ним

        Если же половину высоты меню не проскроллили
        Меняем состояние бэкграунда меню на false
        То есть делаем бэкграунд прозрачным и убираем размытие элементов под ним
    */
    window.scrollY > headerHeight
        ? isHeaderHaveBackground = true
        : isHeaderHaveBackground = false

    if (isHeaderHaveBackground) {
        headerBackgroundColor(headerBackgroundColorValue)
        headerBackdropFilter(headerBackdropFilterValue)
    } else {
        headerBackgroundColor("transparent")
        headerBackdropFilter("none")
    }

})