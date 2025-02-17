# Register-form
# Geelong Medical Clinic Registration Form

## Project Description

This project is a web-based registration form for Geelong Medical Clinic. The form collects patient information and includes client-side validation to ensure data integrity and enhance user experience. The collected data is stored in a MySQL database.

## Technologies Used

- **HTML**: Structured the form and content.
- **CSS**: Styled the form and error messages.
- **JavaScript**: Implemented client-side validation.
- **MySQL**: Used as the backend database to store patient information.

## Features

- **HTML**:
  - Structured the form with input fields for first name, last name, address, zip code, city, state, email, phone number, and medicare number.
  - Included labels and placeholders for better user guidance.

- **CSS**:
  - Applied styles to highlight errors using red borders and error messages.
  - Ensured a responsive design using viewport settings.

- **JavaScript**:
  - Implemented client-side validation to ensure required fields are filled and do not contain special characters.
  - Used regular expressions to check for special characters in the first name and last name fields.
  - Added event handlers to clear error messages when the user focuses on the input fields.

- **MySQL**:
  - Designed a database schema to store patient information.
  - Used SQL queries to insert and retrieve data from the database.
  - Ensured data integrity and security by validating and sanitizing user inputs before storing them in the database.
