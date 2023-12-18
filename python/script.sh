#!/usr/bin/bash
python3 more.py *.png | tr -d '\n' | unzip *.zip
cd flag
cp ../more.py
cp ../script.sh
