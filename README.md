# hypixie [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/hypixie/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/hypixie)

A simplified interface for the Hypixel api.

[![NPM Badge](https://nodei.co/npm/hypixie.png)](https://npmjs.com/package/hypixie)

## Install

```sh
npm install hypixie
```

## Usage

```js
const hypixie = require("hypixie");

(async () => {
	const { displayname } = await hypixie("player", {
		uuid: "56da43a4-088d-4a76-82b6-dd431535015e",
		key: "some api key"
	});

	console.log(displayname);
	//=> "Richienb"
})();
```

## API

### hypixie(endpoint, options)

#### endpoint

Type: `string`

The [API endpoint](https://github.com/HypixelDev/PublicAPI/tree/master/Documentation/methods) to call.

#### options

Type: `object`

The options to pass to the API.

### hypixie.HypixelError

Exposed for instanceof checks. This type of error is thrown when the API returns an error.
