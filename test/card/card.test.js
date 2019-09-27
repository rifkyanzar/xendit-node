process.env.NODE_ENV = 'test';

const dotenv = require('dotenv');
const Xendit = require('../../src/xendit');
const tokenTest = require('./token.test');
const chargeTest = require('./charge.test');
const authTest = require('./authentication.test');

dotenv.config();

const x = new Xendit({
  publicKey: process.env.PUBLIC_KEY,
  secretKey: process.env.SECRET_KEY,
  xenditURL: process.env.XENDIT_URL,
});

describe('Card Service', function() {
  tokenTest(x);
  chargeTest(x);
  authTest(x);
});
