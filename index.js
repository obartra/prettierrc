#! /usr/bin/env node

const rc = require('rc');
const { join } = require('path');
const _ = require('lodash');
const { exec } = require('child_process');
const defaults = require('./defaults.json');

const config = rc('prettier', _.cloneDeep(defaults));
const cliOptions = _(config)
  .omit(['_', 'configs', 'config', 'rcVerbose'])
  .pickBy((value, key) => defaults[key] !== value)
  .mapKeys((value, key) => `--${_.kebabCase(key)}`)
  .map((value, key) => _.isBoolean(value) ? key : `${key} ${value}`)
  .join(' ');

const prettierPath = join(__dirname, 'node_modules/.bin', 'prettier');
const cmd = `${prettierPath} ${cliOptions}`;

if (config.rcVerbose) {
  console.log(`Executing: ${cmd}`);
}

exec(cmd, (error, stdout, stderr) => {
  if (error || stderr) {
    console.error(error || stderr);
  } else if (stdout) {
    console.log(stdout);
  }
});
