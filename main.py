import datetime
import os.path
import eel

from docxtpl import DocxTemplate


CONFIG_FILE_PATH = os.path.normpath('path_to_save.txt')


@eel.expose
def fill_document(context: dict):
    doc_template = get_document_version(context)
    doc = DocxTemplate(os.path.normpath(doc_template))

    today = datetime.date.today()

    research_date = datetime.datetime.strptime(context['research_date'], '%Y-%m-%d')
    context['research_date'] = datetime.date.strftime(research_date, '%d.%m.%Y')

    born = datetime.datetime.strptime(context['patient_birthdate'], '%Y-%m-%d')
    
    context['patient_birthdate'] = datetime.date.strftime(born, '%d.%m.%Y')
    patient_age = today.year - born.year - ((today.month, today.day) < (born.month, born.day))
    context['patient_age'] = f'{patient_age} {get_ending(str(patient_age))}'

    for research in ('leukocytes', 'epithelium', 'gr_stick', 'dipococci_gr', 'coccobacillary_flora', 'cocci_gr',
                     'lactobacillus'):

        if research in context.keys() and context[research].lower() != "нет":
            context[research] += ' в поле зрения'

    doc.render(context)

    path_to_save = context["patient"] if context["patient"].endswith('.') else context["patient"] + '.'
    doc.save(os.path.normpath(get_path_to_save() + '/' + path_to_save + 'docx'))


def get_document_version(context: dict) -> str:
    if len(context.keys()) == 7:
        return 'document_templates/first.docx'

    return 'document_templates/second_virgin.docx' if context['is_virgin'] == 'true' \
        else 'document_templates/second_not_virgin.docx'


def load_main_page() -> str:
    if os.stat(CONFIG_FILE_PATH).st_size:
        return 'first_page.html'
    
    return 'registration_page.html'


def get_ending(number: str) -> str:
    last_number = int(number[-1])
    if last_number == 1:
        return 'год'
    elif last_number in range(2, 5):
        return 'года'

    return 'лет'


@eel.expose
def registrate_path_to_save(path: str):
    with open(CONFIG_FILE_PATH, "w", encoding='utf8') as f:
        f.write(path.replace('\"', ""))
    

def get_path_to_save():
    with open(CONFIG_FILE_PATH, "r", encoding='utf8') as f:
        return f.read()
    

if __name__ == '__main__':
    eel.init('web')
    eel.start(load_main_page(), mode="chrome", size=(1920, 1080))

