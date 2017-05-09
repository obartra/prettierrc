#! /usr/bin/env node

const rc = require('rc');
const _ = require('lodash');
const { exec } = require('child_process');
const defaults = require('./defaults.json');

const config = rc('prettier', _.cloneDeep(defaults));
const cliOptions = _(config)
  .omit(['_', 'configs', 'config'])
  .pickBy((value, key) => defaults[key] !== value)
  .mapKeys((value, key) => `--${_.kebabCase(key)}`)
  .map((value, key) => _.isBoolean(value) ? key : `${key} ${value}`)
  .concat(process.argv.slice(2))
  .compact()
  .join(' ');
