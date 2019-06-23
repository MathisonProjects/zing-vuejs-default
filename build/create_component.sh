#!/bin/bash

DIRECTORY=$(pwd)
COMPONENTNAME=$1
# helper, pages/site, stores
TYPEOFCREATE=$2
FULLCOMPONENT=${DIRECTORY}/${TYPEOFCREATE}/${COMPONENTNAME}

echo "---------------------------------------------------"
echo "|       Started running create_component.sh       |"
echo "---------------------------------------------------"
if [ "$TYPEOFCREATE" == "helper" ]; then
	echo "Your file will be created here:"
	echo ${FULLCOMPONENT}

	COPYDIR=${DIRECTORY}/defaults/helper.js
	cp ${COPYDIR} ${FULLCOMPONENT}
fi

if [ "$TYPEOFCREATE" == "pages/site" ]; then
	echo "Your file will be created here:"
	echo ${FULLCOMPONENT}

	COPYDIR=${DIRECTORY}/defaults/component.vue
	cp ${COPYDIR} ${FULLCOMPONENT}
fi

if [ "$TYPEOFCREATE" == "stores" ]; then
	echo "Your file will be created here:"
	echo ${FULLCOMPONENT}

	COPYDIR=${DIRECTORY}/defaults/store.js

	cp ${COPYDIR} ${FULLCOMPONENT}
fi

if [ "$TYPEOFCREATE" != "helper"  ] && [ "$TYPEOFCREATE" != "pages/site"  ] && [ "$TYPEOFCREATE" != "stores"  ]; then
	echo "Your second variable must be one of the following:"
	echo "helper"
	echo "pages/site"
	echo "stores"
fi
echo "---------------------------------------------------"
echo "|       Finished running create_component.sh      |"
echo "---------------------------------------------------"
