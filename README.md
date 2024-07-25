# Payments Demo Project

## Steps to Start Project

1. Create a python3 virtual env
- `python3 -m venv myenv`
- activate virtual env `source myenv/bin/activate`
2. Install dependencies with `pip3 install -r requirements.txt`
3. Have Postgres installed and running, create a database with name/user/password from our `.env` file:
   ```
	...
	DB_NAME = practice_data
	DB_USER = practice_rw
	DB_PASSWORD = practice_rw
	DB_HOST = localhost
	DB_PORT = 5432
   ```
4. Start up server by running `python3 manage.py runserver` in `~./payments-demo` folder
- `View server at http://127.0.0.1:8000/`
5. In `~./payments-demo/client` folder, run `rm package-lock.json` to delete package lock json and allow installation of new dependency versions
6. Run `npm install` to install dependencies in `~./payments-demo/client` folder
7. Start up client by running `npm start` in `~./payments-demo/client` folder
- `View client at http://127.0.0.1:3000/`

## Example client side webpage
<img width="1440" alt="Screen Shot 2024-07-25 at 1 18 02 PM" src="https://github.com/user-attachments/assets/221fe36e-b228-431a-98a1-acc61a209fd7">

## Example server side webpage
<img width="1440" alt="Screen Shot 2024-07-25 at 1 19 18 PM" src="https://github.com/user-attachments/assets/bc3676b0-dcdd-4280-8d18-e70f8a24dfb5">

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
