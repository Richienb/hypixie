"use strict"

const ky = require("ky-universal")
const isUUID = require("is-uuid")

class HypixelError extends Error {
	constructor(message = "", ...args) {
		super(message, ...args)
		this.message = message
	}
}

module.exports = async (endpoint, options = {}) => {
	if (!isUUID.v4(options.key)) {
		throw new TypeError("`options.key` must be set to an API key!")
	}

	const request = await ky(endpoint, {
		prefixUrl: "https://api.hypixel.net",
		searchParams: options
	})
	const data = await request.json()

	if (!data.success) {
		throw new HypixelError(data.cause)
	}

	return Object.values(data)[1]
}

module.exports.HypixelError = HypixelError
