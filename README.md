# proxyshop

> Allows you to easily work with a huge number of high-quality, residential proxies using [proxy.shop](https://proxy.shop/)

- These proxies can be very useful when you require clean, residential ips for your application.
- perfect fit for automation, bots, crawlers, credential stuffers (wait, what?)

Refer to the [API Docs](https://proxy.shop/proxy/apidoc) for full API documentation. Some of the abstractions they use, like sub-accounts, I find to be clunky and hard to manage out of the box. This package provides some useful functions to work with your proxies in a more intuitive fashion.


[![NPM](https://img.shields.io/npm/v/proxyshop.svg)](https://www.npmjs.com/package/proxyshop) [![Build Status](https://travis-ci.com/nicoandmee/proxyshop.svg?branch=master)](https://travis-ci.com/nicoandmee//proxyshop) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Install

```bash
npm install --save proxyshop
```


```js
const proxyshop = require('proxyshop');

const client = new proxyshop({
  key: '...', // Your API Key goes here
});

// get a new proxy from TX
const proxy = await client.getProxy('TX');

// provide http proxy URI to your bot
const bot = new PlayBot({ proxy });
await bot.init();
await bot.goto('http://whoer.net');


// add a new sub-account (which represents a distinct proxy handle)
const sid = await client.addProxy('username', 'password');

// you can persist the sid somewhere if you want
await redis.set('sid:', sid);

// then later, you can update/refresh the proxy
await client.updateProxy(sid, 'CA');


```
## TODO
- Add tests


## References

Please see API documentation for full usage details: [API](https://github.com/nicoandmee/proxyshop/blob/master/api.md).
