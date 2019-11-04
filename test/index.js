const assert = require('assert');
const CSP = require('../');

const csp = new CSP(
  `default-src 'self' data:; style-src 'self' 'unsafe-inline' ; img-src 'self' data: blob: ; script-src 'self' 'unsafe-inline' 'unsafe-eval' ; object-src 'self'; connect-src 'self' data:; frame-ancestors 'self'`,
);

csp.append('script-src', '*.test.com');
assert.deepStrictEqual(csp.get('script-src'), ["'self'", "'unsafe-inline'", "'unsafe-eval'", '*.test.com']);

csp.append('worker-src', '*.test.com');
assert.deepStrictEqual(csp.get('worker-src'), ['*.test.com']);

assert.deepStrictEqual(csp.get('default-src'), ["'self'", 'data:']);
csp.delete('default-src');
assert.deepStrictEqual(csp.get('default-src'), undefined);

assert.deepStrictEqual(csp.get('style-src'), ["'self'", "'unsafe-inline'"]);
csp.delete('style-src', "'unsafe-inline'");
assert.deepStrictEqual(csp.get('style-src'), ["'self'"]);

assert.deepStrictEqual(
  csp.generate(),
  "style-src 'self'; img-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.test.com; object-src 'self'; connect-src 'self' data:; frame-ancestors 'self'; worker-src *.test.com;",
);
