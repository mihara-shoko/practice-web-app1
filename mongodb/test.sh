#! /bin/bash

curl -v -X POST -H "Content-Type: application/json" -d '{"id": "3", "text": "test4", "sample": "sample"}' http://127.0.0.1:5005/items
