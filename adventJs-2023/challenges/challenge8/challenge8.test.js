import { test, describe, expect, expectTypeOf } from 'vitest'
import { organizeGifts } from './challenge8'

describe('Sorting the warehouse', () => {
  test('Test 1', () => {
    expectTypeOf(organizeGifts).returns.toEqualTypeOf('')
  })

  test('Test 2', () => {
    expect(organizeGifts('76a11b')).toEqual('[a]{a}{a}(aaaaaa){b}(b)')
  })

  test('Test 3', () => {
    expect(organizeGifts('20a')).toEqual('{a}{a}')
  })

  test('Test 4', () => {
    expect(organizeGifts('70b120a4c')).toEqual('[b]{b}{b}[a][a]{a}{a}(cccc)')
  })

  test('Test 5', () => {
    expect(organizeGifts('9c')).toEqual('(ccccccccc)')
  })

  test('Test 6', () => {
    expect(organizeGifts('19d51e')).toEqual('{d}(ddddddddd)[e](e)')
  })
})
