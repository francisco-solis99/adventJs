import { expect, test, describe, expectTypeOf } from 'vitest'
import { findFirstRepeated } from './challenge1'

describe('Find the first gift repeated', () => {
  test('Test 1', () => {
    expectTypeOf(findFirstRepeated).returns.toEqualTypeOf(-1)
  })

  test('Test 2', () => {
    expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
  })

  test('Test 3', () => {
    expect(findFirstRepeated([2, 2])).toBe(2)
  })

  test('Test 4', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1)
  })

  test('Test 5', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBe(-1)
  })

  test('Test 6', () => {
    expect(findFirstRepeated([])).toBe(-1)
  })

  test('Test 7', () => {
    expect(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7])).toBe(1)
  })

  test('Test 8', () => {
    expect(findFirstRepeated([10, 20, 30])).toBe(-1)
  })

  test('Test 9', () => {
    expect(findFirstRepeated([5, 1, 2, 3, 2, 5, 1])).toBe(2)
  })
})
