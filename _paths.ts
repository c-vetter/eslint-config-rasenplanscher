import { resolve } from 'path'

export const trimTs = (fp:string) => fp.replace(/.ts$/g, '')

export type PathBuilder = (...s:string[]) => string

export const root:PathBuilder = (...s) => resolve(__dirname, ...s)
export const src:PathBuilder = (...s) => root('src', ...s)

export const rulesConfigurations:PathBuilder = (...s) => src('rules-configurations', ...s)
export const rulesDefinitions:PathBuilder = (...s) => src('.rules-definitions', ...s)
