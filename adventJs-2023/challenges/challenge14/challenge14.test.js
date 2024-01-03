import { test, describe, expect, expectTypeOf } from 'vitest'
import { maxGifts } from './challenge14'

describe('Avoid the alarm', () => {
  test('Test 1', () => {
    expectTypeOf(maxGifts).returns.toEqualTypeOf(1)
  })
  test('Test 2', () => {
    expect(maxGifts([1, 2, 3, 1])).toEqual(4)
  })
  test('Test 3', () => {
    expect(maxGifts([2, 7, 9, 3, 1])).toEqual(12)
  })
  test('Test 4', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toEqual(1)
  })
  test('Test 5', () => {
    expect(maxGifts([100])).toEqual(100)
  })
  test('Test 6', () => {
    expect(maxGifts([1, 1, 1, 1])).toEqual(2)
  })
  test('Test 7', () => {
    expect(maxGifts([1, 1, 1, 1])).toEqual(2)
  })
  test('Test 8', () => {
    expect(maxGifts([99])).toEqual(99)
  })
})
