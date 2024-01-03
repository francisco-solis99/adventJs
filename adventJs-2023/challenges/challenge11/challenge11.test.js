import { test, describe, expect, expectTypeOf } from 'vitest'
import { getIndexsForPalindrome } from './challenge11'
describe('The studious elves', () => {
  test('Test 1', () => {
    expectTypeOf(getIndexsForPalindrome).returns.toEqualTypeOf([])
  })
  test('Test 2', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([])
  })
  test('Test 3', () => {
    expect(getIndexsForPalindrome('abab')).toEqual([0, 1])
  })
  test('Test 4', () => {
    expect(getIndexsForPalindrome('abac')).toEqual(null)
  })
  test('Test 5', () => {
    expect(getIndexsForPalindrome('aaaaaaaa')).toEqual([])
  })
  test('Test 6', () => {
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3])
  })
  test('Test 7', () => {
    expect(getIndexsForPalindrome('caababa')).toEqual(null)
  })
  test('Test 8', () => {
    expect(getIndexsForPalindrome('rotavator')).toEqual([])
  })
  test('Test 9', () => {
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8])
  })
  test('Test 10', () => {
    expect(getIndexsForPalindrome('saippuakivikauppias')).toEqual([])
  })
})
