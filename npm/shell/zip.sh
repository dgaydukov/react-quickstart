#!/bin/sh
cd ../
zip -r react-quickstart.zip react-quickstart -x react-quickstart/.idea/**\* react-quickstart/.git/**\* react-quickstart/node_modules/**\*
echo "Success on zip creating!"
