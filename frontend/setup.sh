#!/bin/bash

install_npm() {
 if brew ls --versions myformula > /dev/null; then
   echo 'npm is already installed, skipping'
  else
   echo 'installing npm'
   brew install npm
  fi
}

install_react() {
  npm install --save react react-dom
}

install_bootstrap() {
  npm install --save react-bootstrap
}

main() {
  brew_output=$(brew 2> /dev/null)
  if [ $? -ne 1 ]; then
    echo 'brew required to install packages!'
    exit 1
  fi

  install_npm
  install_react
  install_bootstrap

}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main "$@"
fi

