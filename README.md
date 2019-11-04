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

// Get a rule
csp.get('script-src');

// Add new rule
csp.append('style-src', "'self'");

// If there is already a rule, add a new value to the existing rule
csp.append('style-src', "'unsafe-inline'");

// Delete a rule
csp.delete('script-src');

// Delete a value in a rule
csp.delete('script-src', "'self'");

// Get a new csp
csp.generate();
```

## License

MIT © [Harvey Zack](https://sleepy.im/)
