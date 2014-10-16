#!/bin/bash
NPM_DEPENDENCIES=requirements/npm-dependencies.txt
BOWER_LOCATION=..
X=`hash npm &> /dev/null`

if [ -s $X ]; then
    cat $NPM_DEPENDENCIES | xargs npm install -g
else
    echo >&2 "NPM not installed"
fi