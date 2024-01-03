import { test, describe, expect, expectTypeOf } from 'vitest'
import { autonomousDrive } from './challenge15'
describe('Autonomous Robot', () => {
  test('Test 1', () => {
    expectTypeOf(autonomousDrive).returns.toEqualTypeOf([])
  })
  test('Test 2', () => {
    expect(autonomousDrive(['..!....'], ['R', 'L'])).toEqual(['..!....'])
  })

  test('Test #03', () => {
    const received = autonomousDrive(['!..', '***'], ['U', 'L'])
    const expected = [
      '!..',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #04', () => {
    const received = autonomousDrive([
      '..!....',
      '......*'
    ], ['R', 'D', 'L'])
    const expected = [
      '.......',
      '..!...*'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #05', () => {
    const received = autonomousDrive([
      '*..!..*',
      '*.....*'
    ], ['R', 'R', 'R', 'D', 'D'])
    const expected = [
      '*.....*',
      '*....!*'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #06', () => {
    const received = autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
      '***',
      '..!',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #07', () => {
    const received = autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    const expected = [
      '***',
      '*!*',
      '***'
    ]
    expect(received).toEqual(expected)
  })

  test('Test #08', () => {
    const received = autonomousDrive([
      '.**.*.*.',
      '.***....',
      '..!.....'
    ], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
      '.**.*.*.',
      '.***....',
      '.....!..'
    ]
    expect(received).toEqual(expected)
  })
})
