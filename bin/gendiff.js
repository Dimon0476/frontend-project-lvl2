#!/usr/bin/env node
import program from 'commander';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  //.arguments('<filepath1> <filepath2>')
  //.option('-f, --format [type]', 'output format', 'stylish')
  //.action((filepath1, filepath2) => {
  //  console.log(checkDiff(program.format, filepath1, filepath2));
  //});

program.parse(process.argv);
