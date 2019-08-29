const tape = require('tape');
const supertest = require('supertest');

const app = require('../src/app');

tape('testing the home page route', (t) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('content-type', /html/)
    .end((err, res) => {
      if (err) {
        t.error(err);
        t.end();
      } else {
        t.ok(res.text.includes('<header>', 'the home page should have a nav bar'));
        t.end();
      }
    });
});
