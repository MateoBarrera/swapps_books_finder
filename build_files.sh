#!/bin/bash
# Salir inmediatamente si un comando falla
set -e


# build_files.sh
pip install -r requirements.txt
python manage.py collectstatic --no-input --clear