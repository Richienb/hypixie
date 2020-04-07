/** An error thrown by the API. */
declare class HypixelError extends Error {
	message: string
}

declare const hypixie: {
	HypixelError: typeof HypixelError

	/**
	A simplified interface for the Hypixel api.
	@param endpoint The [API endpoint](https://github.com/HypixelDev/PublicAPI/tree/master/Documentation/methods) to call.
	@param options The options to pass to the API.
	@example
	```
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
	*/
	(endpoint: string, options: { key: string } & Record<string, string | number | boolean>): Promise<object>
}

export = hypixie
