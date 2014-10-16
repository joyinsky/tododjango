#!/bin/bash

NAME="mango"                                      # Name of the application
DJANGODIR=.                     # Django project directory
#SOCKFILE=/tmp/gunicorn.sock    # we will communicte using this unix socket
ADDRESS=0.0.0.0:9500            # we will communicte using this port
USER=mango                                                # the user to run as
GROUP=mango                                               # the group to run as
NUM_WORKERS=3                                           # how many worker processes should Gunicorn spawn
DJANGO_SETTINGS_MODULE=mango.settings                 # which settings file should Django use
DJANGO_WSGI_MODULE=mango.wsgi                         # WSGI module name

echo "Starting $NAME as `whoami`"

# Activate the virtual environment
cd $DJANGODIR
#source ../bin/activate
export DJANGO_SETTINGS_MODULE=$DJANGO_SETTINGS_MODULE
export PYTHONPATH=$DJANGODIR:$PYTHONPATH

# Create the run directory if it doesn't exist
# RUNDIR=$(dirname $SOCKFILE)
# test -d $RUNDIR || mkdir -p $RUNDIR

# Start your Django Unicorn
# Programs meant to be run under supervisor should not daemonize themselves (do not use --daemon)
 gunicorn ${DJANGO_WSGI_MODULE}:application \
  --name $NAME \
  --workers $NUM_WORKERS \
  # --user=$USER --group=$GROUP \
  --log-level=debug \
  --bind=$ADDRESS
  # --bind=unix:$SOCKFILE