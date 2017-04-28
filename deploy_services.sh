#!/bin/bash

if [ "$1" == "--help" ]; then
  echo "Usage: ./deploy_services.sh [TAGS]"
  echo "TAGS - either: counter-panda OR gify-panda OR counter-panda,gify-panda"
  exit 0
fi

# setup default tags to run all roles in playbook
[[ ! $1 ]] && TAGS="nodejs,counter-panda,gify-panda" || TAGS="nodejs,$1"

ansible-playbook base.yml --tags $TAGS
