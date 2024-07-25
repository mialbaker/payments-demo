# Payments Demo Project

## Steps to Start Project

1. Create a Postgres database named `practice_data` with owner `practice_rw` and password `practice_rw`
2. Start up server by running `python3 manage.py runserver` in `~./paymentsdemo` folder
- `View server at http://127.0.0.1:8000/`
4. Start up client by running `npm start` in `~./paymentsdemo/client` folder
- `View client at http://127.0.0.1:3000/`

## Project Requirements:

- Create requirements.txt file with appropriate pip packages

- Create a basic Django application
	- Documentation can be found here https://docs.djangoproject.com/en/5.0/intro/

- Create a Postgres database named practice_data with owner practice_rw and password practice_rw

- Connect your Django project to your practice_data database

- Create a migration, model, and serializer for a table names "Payments" with five columns
	- paytype_id
	- amount
	- date
	- provider_id
	- employee_type_id

- Create API viewset for Payments using Django Viewsets
	- Documentation can be found here https://www.django-rest-framework.org/api-guide/viewsets/
	- API should allow normal CRUD operations for the table payments


Extra Credit:

- Create a create frontend page for Payments and request data from your Django view

- Display all payments \ Add option to add new payment with information fields \ Add ability to update existing payment information

- Install and configure Alembic and SQLAlchemy in your Django project
	- Documentation can be found here https://alembic.sqlalchemy.org/en/latest/tutorial.html

- All API requests from the front end should be done through the React / Redux Thunk pattern and mapped to the component state from the store

Added basic Django app w/ Postgres database and created migration, model, and serializer for Payments table


