import { deepMap } from 'nanostores'

export type ButtonStoreState = {
  [key: string]: unknown
}

export const buttonStore = deepMap<ButtonStoreState>({})
