const applicantForm = document.getElementById('registration_form')
// функция сохранения пути к директории хранения отчетов.
applicantForm.onsubmit = async function(evt){
    const path_to_save = document.getElementById('path_to_save').value
    const formToCHeck = document.querySelector('form')

    if (formToCHeck.checkValidity()){
        location.href = '#openModal'
    }

    await eel.registrate_path_to_save(path_to_save);
}

// закрытие модального окна
const btn_close = document.getElementById('close_modal')
btn_close.onclick = () => {
    location.href = '#close'
}