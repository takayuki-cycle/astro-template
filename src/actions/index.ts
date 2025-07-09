// 相対パスでのインポートを許可するために、以下のeslint-disableを追加
/* eslint-disable no-restricted-imports */
import { users } from './users'

export const server = {
  users
}
