import { test, describe, expect, expectTypeOf } from 'vitest'
import { optimizeIntervals } from './challenge17'

describe('Optimizing the rental', () => {
  test('Test 1', () => {
    expectTypeOf(optimizeIntervals).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    const received = optimizeIntervals([[2, 7], [3, 4], [5, 8]])
    const expected = [
      [
        2,
        8
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 3', () => {
    const received = optimizeIntervals([[3, 4], [5, 8], [2, 7]])
    const expected = [
      [
        2,
        8
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 4', () => {
    const received = optimizeIntervals([[1, 3], [2, 6], [8, 10]])
    const expected = [
      [
        1,
        6
      ],
      [
        8,
        10
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 5', () => {
    const received = optimizeIntervals([[1, 2], [3, 4], [5, 6]])
    const expected = [
      [
        1,
        2
      ],
      [
        3,
        4
      ],
      [
        5,
        6
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const received = optimizeIntervals([[5, 7], [6, 8]])
    const expected = [
      [
        5,
        8
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 7', () => {
    const received = optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])
    const expected = [
      [
        1,
        5
      ],
      [
        6,
        10
      ],
      [
        11,
        15
      ],
      [
        16,
        20
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 8', () => {
    const received = optimizeIntervals([[1, 15], [8, 12], [4, 7]])
    const expected = [
      [
        1,
        15
      ]
    ]
    expect(received).toEqual(expected)
  })
})
