import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';

interface IConfig {
  main: {
    'log-level': string
  }
  db: {
    user: string
    pass: string
    host: string
    port: number
    db: string
  }
  auth: {
    secret: string,
    salt: string
  }
}

function loadConfig() {
  console.log(__dirname)
  const file = readFileSync('./.config/default.yml', 'utf-8')
  return yaml.load(file) as IConfig;
}

export const config = loadConfig()
