tododjango
==========

This is a library to test integration between Django, Django-Rest-Api and Ember.js 

Installation
------------

Clone a copy of this repository

    git clone git@github.com:joyinsky/tododjango.git

Create a virtualenv. 

If you use virtualenvwrapper.

    mkvirtualenv todo
    workon todo

If you don't.

    virtualenv todo
    source todo/bin/activate

Switch to the repository folder

    cd tododjango

Install the dependencies

    pip install -r requirements.txt

Create the database

    python manage.py syncdb

Run the Todo App

    python manage.py runserver


Usage
-----

Open your browser on http://localhost:8000/

You will see the TODO MVC App with a Django Backend.

Routes
------

Url      | Description
---------|-------------
/        | TODO MVC Main App
/api     | Api Explorer
/admin   | Django Standard Admin
