import test from "ava"
import envCrosser from "."

test("main", (t) => {
    t.is(envCrosser({ node: "NodeJS!" }), "NodeJS!")
    t.is(envCrosser({ fallback: "???" }), "???")
})
