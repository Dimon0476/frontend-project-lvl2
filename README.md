### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dimon0476/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Dimon0476/frontend-project-lvl2/actions)

Difference Calculator is a cli utility which takes 2 configuration files and outputs the report showing difference between them.  
Possible file formats: json, yaml and ini

## Install ##

To install Difference Calculator the following soft is required:
* node version 14.0 or above
* npm version 6.0 or above
* make utility

Clone this repo and run:
```
make install
make link
```

## Usage ##

The report format can be specified with `-f` or `--format` option (see below), and defaults to recursive text.  

`-f, --format plain` - the report will be generated as plain text  

`-f, --format json` - the report will be generated as JSON
