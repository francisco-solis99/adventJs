import { test, describe, expect, expectTypeOf } from 'vitest'
import { travelDistance } from './challenge25'

describe('Calculating distances', () => {
  test('Test 1', () => {
    expectTypeOf(travelDistance).returns.toEqualTypeOf()
  })

  test('Test 2', () => {
    const received = travelDistance(
      `.....1....
..S.......
..........
....3.....
......2...`)
    const expected = 12
    expect(received).toEqual(expected)
  })

  test('Test 3', () => {
    const received = travelDistance('..S.1...')
    const expected = 2
    expect(received).toEqual(expected)
  })

  test('Test 4', () => {
    const received = travelDistance(
      `.....2....
..S.......
..........
....1.....
......3...`
    )
    const expected = 13
    expect(received).toEqual(expected)
  })

  test('Test 5', () => {
    const received = travelDistance(
      `3....1....
..S.......
.........2
..........
......4...`
    )
    const expected = 31
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const received = travelDistance('S1')
    const expected = 1
    expect(received).toEqual(expected)
  })

  test('Test 7', () => {
    const received = travelDistance('1....S')
    const expected = 5
    expect(received).toEqual(expected)
  })

  test('Test 8', () => {
    const received = travelDistance('S12....3')
    const expected = 7
    expect(received).toEqual(expected)
  })
})
