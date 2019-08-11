#!/bin/bash

echo -e '\e[32m'
echo '|-----------------------------------------------------|'
echo "|------------Installing VueJs Zing Default------------|"
echo '|-----------------------------------------------------|'
echo -e '\e[33m'
echo -e '\e[94m|-------------------Installing .ENV-------------------|\e[0m'

YOURDIR="$PWD"

#Set Questions
QUESTION[0]="What is your environment? (DEV/PROD)"
QUESTION[${#QUESTION[@]}]="What will be your home page? (1=landing/2=sales/3=form/4=socialmedia)"
QUESTION[${#QUESTION[@]}]="What is your twitter?"
QUESTION[${#QUESTION[@]}]="Is this projects use other components? (t=True,f=false)"
QUESTION[${#QUESTION[@]}]="What is your what is the directory name used below? (You may leave it blank)"
QUESTION[${#QUESTION[@]}]="What is your database for data.zing.land?"
QUESTION[${#QUESTION[@]}]="What is your application name?"
QUESTION[${#QUESTION[@]}]="What is your preferred bootstrap style? (default, cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse, sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, yeti)"
QUESTION[${#QUESTION[@]}]="What is your dark mode bootstrap style? (default, cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux, materia, minty, pulse, sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, yeti)"

#Set Answers
for ((i=0; i<=6; i++)); do
  echo -e "\e[36mC${QUESTION[${i}]}\e[0m"
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
if [ "${ANSWER[4]}" == 4 ]; then
	echo "MIX_HOME=socialmedia" >> ${YOURDIR}/.env
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
echo "MIX_DARKCSSSTYLE=${ANSWER[7]}" >> ${YOURDIR}/.env


echo '\e[94m|--------------------End .ENV Build-------------------|'
echo '|--------------------Installing NPM-------------------|\e[0m'
npm install
echo '\e[94m|--------------------End NPM Build--------------------|'
echo '|------------------Compiling Vue App------------------|\e[0m'
npm run dev
echo '|------------------End Vue App Build------------------|\e[0m'

echo -e '\e[32m'
echo '|-----------------------------------------------------|'
echo "|----------End Installing VueJs Zing Default----------|"
echo '|-----------------------------------------------------|'
echo -e '\e[0m'