import { test, describe, expect, expectTypeOf } from 'vitest'
import { maxDistance } from './challenge6'

describe('The reindeer on trial', () => {
  test('Test 1', () => {
    expectTypeOf(maxDistance).returns.toEqualTypeOf(1)
  })

  test('Test 2', () => {
    expect(maxDistance('>>*<')).toBe(2)
  })

  test('Test 3', () => {
    expect(maxDistance('<<<<<')).toBe(5)
  })

  test('Test 4', () => {
    expect(maxDistance('>***>')).toBe(5)
  })

  test('Test 5', () => {
    expect(maxDistance('**********')).toBe(10)
  })

  test('Test 6', () => {
    expect(maxDistance('<<**>>')).toBe(2)
  })
})
