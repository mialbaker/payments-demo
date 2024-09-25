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
