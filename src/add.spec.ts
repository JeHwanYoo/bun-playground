import { it, expect } from 'bun:test'
import { add } from './add.ts'

it('add 1 + 1', () => {
  expect(add(1, 1)).toBe(2)
})
