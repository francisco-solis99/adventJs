import { test, describe, expect, expectTypeOf } from 'vitest'
import { manufacture } from './challenge2'

describe('We start a factory', () => {
  test('Test 1', () => {
    expectTypeOf(manufacture).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    expect(manufacture(['tren', 'oso', 'pelota'], 'tronesa'))
      .toStrictEqual(
        [
          'tren',
          'oso'
        ]
      )
  })

  test('Test 3', () => {
    expect(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb')).toStrictEqual([])
  })

  test('Test 4', () => {
    expect(manufacture(['patineta', 'robot', 'libro'], 'nopor')).toStrictEqual([])
  })

  test('Test 5', () => {
    expect(manufacture([], 'letras')).toStrictEqual([])
  })

  test('Test 6', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toStrictEqual(['puzzle'])
  })
})
