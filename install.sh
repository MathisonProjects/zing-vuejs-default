#!/bin/bash

YOURDIR="$PWD"

echo "What is your environment? (DEV/PROD)"
read environment_mix_env

echo "What will be your home page? (1=landing/2=sales/3=form)"
read environment_mix_home

echo "What is your twitter?"
read environment_mix_twitter

echo > ${YOURDIR}/.env

echo "MIX_ENV=${environment_mix_env}" >> ${YOURDIR}/.env
if [ "$environment_mix_home" == 1 ]; then
	echo "MIX_HOME=landing" >> ${YOURDIR}/.env
fi
if [ "$environment_mix_home" == 2 ]; then
	echo "MIX_HOME=sales" >> ${YOURDIR}/.env
fi
if [ "$environment_mix_home" == 3 ]; then
	echo "MIX_HOME=form" >> ${YOURDIR}/.env
fi
echo "MIX_TWITTER=${environment_mix_twitter}" >> ${YOURDIR}/.env


npm run dev