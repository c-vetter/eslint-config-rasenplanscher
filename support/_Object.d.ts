type IKey = 0
type IValue = 1

declare global {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface ObjectConstructor {
		fromEntries<
			V extends ReadonlyArray<
				readonly [PropertyKey, unknown]
			>,
		>(entries: V): {
			[K in V[number][IKey]]: V[number][IValue]
		}

		entries<O>(o: O): Array<[keyof O, O[keyof O]]>
	}
}
