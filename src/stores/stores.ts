import { deepMap } from 'nanostores'

type ButtonStoreState = {
  [key: string]: unknown
}

export const buttonStore = deepMap<ButtonStoreState>({})
