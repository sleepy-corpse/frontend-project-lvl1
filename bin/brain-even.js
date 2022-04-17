#!/usr/bin/env node
import isEvenGame from '../games/even.js';
import greeting from '../src/cli.js';

isEvenGame(greeting());
