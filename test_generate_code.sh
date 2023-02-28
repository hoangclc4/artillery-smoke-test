#!/bin/bash

$(npm bin)/artillery run --config config.yaml scenarios/generate_code.yaml
# https://linuxhint.com/bash_read_command/#:~:text=Read%20is%20a%20bash%20builtin,taking%20input%20from%20standard%20input.
read -n 1 -s -r -p "Press any key to continue"
