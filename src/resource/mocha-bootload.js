'use strict';

const supertest = require('supertest');

before(() => {
  global.api = supertest(`http://localhost:8080`);
});
