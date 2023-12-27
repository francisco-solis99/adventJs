import { test, describe, expect, expectTypeOf } from 'vitest'
import { decode } from './challenge4'

describe('Turn the parentheses around', () => {
  test('Test 1', () => {
    expectTypeOf(decode).returns.toEqualTypeOf('')
  })

  test('Test 2', () => {
    expect(decode('hola (odnum)')).toBe('hola mundo')
  })

  test('Test 3', () => {
    expect(decode('(olleh) (dlrow)!')).toBe('hello world!')
  })

  test('Test 4', () => {
    expect(decode('sa(u(cla)atn)s')).toBe('santaclaus')
  })

  test('Test 5', () => {
    expect(decode('((nta)(sa))')).toBe('santa')
  })
})
