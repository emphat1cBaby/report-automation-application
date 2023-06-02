# Report Automation Application
The Report Automation Application is a powerful tool that automates the process of creating reports, saving time and reducing errors. It provides a user-friendly interface and a range of features to streamline the report generation process.

##Features

- **Interface**: Data is collected using a nice interface consisting of html forms.
- **Dynamic Data**: Insert dynamic content into reports using placeholders.
- **Configuration Options**: Configure the directory for saving reports in the application settings.
- **Export Formats**: Create reports in Word and PDF formats according to different user preferences and requirements.
- **Error Handling**: Correctly detect errors and handle them by providing informative messages and troubleshooting options.

## Installation
To install and run the Report automation application, follow these steps:

1. Clone repository: git clone https://github.com/yourusername/report-automation-app.git
2. Go to the project directory: cd report-automation-application
3. Install dependencies: pip install -r requirement.txt
4. Run the application: python main.py

If necessary, you can compile into an exe file using the pyinstaller library [(documentation)](https://pyinstaller.org/en/stable/)

## Usage
Once the application is launched, follow these steps to generate reports:

1. Specify the path to the directory where the reports will be stored (in the future it can be changed in the application settings)
2. Select the desired version of the report from the presented
3. Fill out the form with the data of the analysis results
4. Click the Done button to start the report creation process.

The report with the completed data will appear in the directory you specified

## Authors
Dmitriy Smirnov - https://t.me/emphaticBaby

## Stack
- Library eel - a tool for creating web interfaces using Python. It provides integration between Python code and the web interface, allowing you to create full-fledged desktop applications using web technologies.
- HTML, CSS, JS
