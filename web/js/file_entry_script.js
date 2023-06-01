document.getElementById('research_date').valueAsDate = new Date();

async function serializeForm(formNode) {
    let formData = new FormData(formNode);
    let values = Object.fromEntries(formData.entries());

    const formToCHeck = document.querySelector('form')

    let modal_title = document.getElementById('modal_title')
    let modal_text = document.getElementById('modal_body_text')

    if (formToCHeck.checkValidity()){
        modal_title.innerHTML = 'Успешно!'
        modal_text.innerHTML = 'Файл с данными успешно сохранен!'

        document.getElementById('research_date').valueAsDate = new Date();
        await eel.fill_document(values);
    }else {
        modal_title.innerHTML = 'Ошибка!'
        modal_text.innerHTML = 'Одно или несколько обязательных полей формы остались не заполнены!'
    }

    location.href = '#openModal'
}

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


function handleFormSubmit(event) {
    event.preventDefault()
    serializeForm(applicantForm)
}


const applicantForm = document.getElementById('form')
applicantForm.addEventListener('submit', handleFormSubmit)


const btn_close = document.getElementById('close_modal')
btn_close.onclick = () => {
    location.href = '#close'
    location.reload()
}