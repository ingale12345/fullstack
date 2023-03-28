const assert = require('assert');
const app = require('../../src/app');

describe('\'rentals\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/rentals');

    assert.ok(service, 'Registered the service');
  });
});
