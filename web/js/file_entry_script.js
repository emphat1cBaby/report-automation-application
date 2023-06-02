document.getElementById('research_date').valueAsDate = new Date();


// функция сбора данных из формы, проверки их правильности и
async function serializeForm(formNode) {
    // получение данных из формы
    let formData = new FormData(formNode);
    let values = Object.fromEntries(formData.entries());

    // блок формы
    const formToCHeck = document.querySelector('form')

    // блоки модального окна
    let modal_title = document.getElementById('modal_title')
    let modal_text = document.getElementById('modal_body_text')

    // проверка валидности данных
    if (formToCHeck.checkValidity()){
        modal_title.innerHTML = 'Успешно!'
        modal_text.innerHTML = 'Файл с данными успешно сохранен!'

        document.getElementById('research_date').valueAsDate = new Date();
        // заполнение шаблона полученными данными
        await eel.fill_document(values);
    }else {
        modal_title.innerHTML = 'Ошибка!'
        modal_text.innerHTML = 'Одно или несколько обязательных полей формы остались не заполнены!'
    }
    // открытие модального окна
    location.href = '#openModal'
}

// функция отключения блока cytological_examination, при virgin === True
function is_virgin_changed(){
    let cytological_examination = document.getElementById('cytological-examination')

    let formData = new FormData(applicantForm);
    let values = Object.fromEntries(formData.entries());

    if(values['is_virgin'] === 'false'){
        cytological_examination.style.display = 'block'
    }else {
        cytological_examination.style.display = 'none'
    }
}

// функция подтверждения формы
function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}

// назначение функции подтверждения форме
const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)


// назначение команды закрытия модального окна
const btn_close = document.getElementById('close_modal')
btn_close.onclick = () => {
    location.href = '#close'
    location.reload()
}