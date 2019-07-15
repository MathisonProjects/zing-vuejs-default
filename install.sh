#!/bin/bash

YOURDIR="$PWD"

#Set Questions
QUESTION[0]="What is your environment? (DEV/PROD)"
QUESTION[1]="What will be your home page? (1=landing/2=sales/3=form)"
QUESTION[2]="What is your twitter?"
QUESTION[3]="Is this projects use other components? (t=True,f=false)"
QUESTION[4]="What is your what is the directory name used below? (You may leave it blank)"
QUESTION[5]="What is your database for data.zing.land?"
QUESTION[6]="What is your application name?"
QUESTION[7]="What is your preferred bootstrap style? (default, cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse, sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, yeti)"

#Set Answers
for ((i=0; i<=6; i++)); do
  echo "${QUESTION[${i}]}"
  read ANSWER[${i}]
done

#Create .env

echo > ${YOURDIR}/.env

echo "MIX_ENV=${ANSWER[0]}" >> ${YOURDIR}/.env
echo "MIX_TWITTER=${ANSWER[2]}" >> ${YOURDIR}/.env
echo "MIX_DB=${ANSWER[5]}" >> ${YOURDIR}/.env
echo "MIX_APP_NAME=${ANSWER[6]}" >> ${YOURDIR}/.env


if [ "${ANSWER[1]}" == 1 ]; then
	echo "MIX_HOME=landing" >> ${YOURDIR}/.env
fi
if [ "${ANSWER[1]}" == 2 ]; then
	echo "MIX_HOME=sales" >> ${YOURDIR}/.env
fi
if [ "${ANSWER[1]}" == 3 ]; then
	echo "MIX_HOME=form" >> ${YOURDIR}/.env
fi

if [ "${ANSWER[3]}" == "t" ]; then
	echo "MIX_CUSTOM=true" >> ${YOURDIR}/.env
	echo "MIX_FOLDER=${ANSWER[4]}" >> ${YOURDIR}/.env
fi
if [ "${ANSWER[3]}" == "f" ]; then
	echo "MIX_CUSTOM=false" >> ${YOURDIR}/.env
	echo "MIX_FOLDER=false" >> ${YOURDIR}/.env
fi
echo "MIX_CSSSTYLE=${ANSWER[7]}" >> ${YOURDIR}/.env

npm install
npm run dev