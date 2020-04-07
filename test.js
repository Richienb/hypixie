const test = require("ava")
const hypixie = require(".")

test("main", async t => {
	if (!process.env.HYPIXEL_KEY) {
		console.warn("Set the HYPIXEL_KEY environment variable in order to test.")
		return t.pass()
	}

	const key = process.env.HYPIXEL_KEY

	const { displayname } = await hypixie("player", { uuid: "56da43a4-088d-4a76-82b6-dd431535015e", key })
	t.is(displayname, "Richienb")
})
