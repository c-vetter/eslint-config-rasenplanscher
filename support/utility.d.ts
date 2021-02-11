export type Mutable<R> = (
	R extends DeepReadonlyArray<infer T> ? Array<T> :
	R extends DeepReadonlyObject<infer T> ? T :
	R extends DeepReadonly<infer T> ? T :
	R extends Readonly<infer T> ? T :
	R
)

// https://stackoverflow.com/a/49670389

export type DeepReadonly<T> = (
	T extends (infer R)[] ? DeepReadonlyArray<R> :
	T extends Function ? T :
	T extends object ? DeepReadonlyObject<T> :
	T
)

type DeepReadonlyObject<T> = {
	readonly [P in keyof T]: DeepReadonly<T[P]>;
}

interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
