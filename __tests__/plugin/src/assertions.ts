type Foo = 3

const foox: Foo = 3 as 3
const fooy = 3 as Foo
const fooz: Foo = 3

const fooa = <3>3
const foob = <Foo>3

const fooc = 3
const bar = fooc!

function foo (x: number): number {
	return x! // unnecessary non-null
}
