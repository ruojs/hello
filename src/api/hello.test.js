const assert = require('assert');
const ENDPOINT = '/hello';

describe(ENDPOINT, () => {
  describe('get', () => {
    it('should return domains', async () => {
      const {body} = await api.get(ENDPOINT)
        .query({
          name: 'ruo',
        })
        .expect(200);
      assert.equal(body, 'hello ruo!')
    });
  });
});
