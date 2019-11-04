# csp-generator

> Content Security Policy Generator

## Install

Install with `npm`

```bash
$ npm install csp-generator
```

Or install with `yarn`

```bash
$ yarn add csp-generator
```

```js
import CSP from 'csp-generator';
```

Or umd builds are also available

```html
<script src="path/to/csp-generator.js"></script>
```

Will expose the global variable to `window.CSP`.

## Usage

```js
const csp = new CSP("script-src 'self' 'unsafe-inline'");

// Get a policy
csp.get('script-src');

// Add new policy
csp.append('style-src', "'self'");

// If there is already a policy, add a new value to the existing policy
csp.append('style-src', "'unsafe-inline'");

// Delete a policy
csp.delete('style-src');

// Delete a value in a policy
csp.delete('style-src', "'self'");

// Get a new csp
csp.generate();
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
