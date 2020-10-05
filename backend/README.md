# Running Flask in Development

1. `CD` into this directory
2. Install dependencies (`pipenv install --python 3.8 $(cat requirements.txt)`)
3. Create your DB user and DB
4. Run migrations, if you have any.
5. To seed the database, run:
  * `pipenv run python database.py`
6. To run the backend:
   * `pipenv run flask run`

### Navigation
* [Back to root README](../README.md)


# Flask React Project

## Getting started

1. Clone this repository
2. Create a **.env** file based on the example with proper settings for your development environment
3. Follow instructions in the [`starter_app/README.md`](./starter_app/README.md) to setup your development Back-End.
4. Follow instructions in the [`client/README.md`](./client/README.md) to set up your development Front-End.

  ## Deploying to Heroku

  ### Prepping Your Heroku Project

5. Create a new project on your Heroku Dashboard.
6. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".
7. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) if you haven't already.
8. Add any Config Vars to your heroku app, either on the Heroku CLI, or on the heroku-app dashboard's Settings tab.

  ### Prepping Your React App:

9. Run `npm run build` in your React app root folder.

  - This will build the static files for your React app.
  - The `postbuild` script from your `package.json` will _automatically_ move them into the `/static` directory in your flask files.

    ### Prepping your Flask App:

10. Enter your pipenv: `pipenv shell`
11. Update your requirements.txt with all of the packages installed in the environemt: `pip freeze > requirements.txt`

  ### Pushing your container

12. Login to heroku: `$ heroku login`
13. Login to the heroku container registry: `$ heroku container:login`
14. CD into `starter_app` and push your `Dockerfile` to heroku (this will build the Flask Dockerfile, and push): `$ heroku container:push web -a {NAME_OF_HEROKU_APP}`
15. Release your docker container to heroku: `$ heroku container:release web -a {NAME_OF_HEROKU_APP}`
16. Set up your database: `heroku run -a {NAME_OF_HEROKU_APP} {your_migration_script_here}`
17. Profit.
