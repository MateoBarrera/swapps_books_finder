#!/bin/bash
# build_files.sh
pip install -r requirements.txt

python3 manage.py collectstatic --no-input --clear