import { test, describe, expect, expectTypeOf } from 'vitest'
import { distributeGifts } from './challenge20'

describe('Distribute the weight', () => {
  test('Test 1', () => {
    expectTypeOf(distributeGifts).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    const received = distributeGifts([
      [4, 5, 1],
      [6, null, 3],
      [8, null, 4]
    ])
    const expected = [
      [
        5,
        3,
        3
      ],
      [
        6,
        5,
        3
      ],
      [
        7,
        6,
        4
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 3', () => {
    const received = distributeGifts([
      [2, null],
      [null, 3]
    ])
    const expected = [
      [
        2,
        3
      ],
      [
        3,
        3
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 4', () => {
    const received = distributeGifts([
      [2, 1, 1],
      [3, 4, null]
    ])
    const expected = [
      [
        2,
        2,
        1
      ],
      [
        3,
        3,
        3
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 5', () => {
    const received = distributeGifts([
      [null, 5],
      [3, null]
    ])
    const expected = [
      [
        4,
        5
      ],
      [
        3,
        4
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const received = distributeGifts([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])
    const expected = [
      [
        2,
        3,
        4
      ],
      [
        4,
        5,
        6
      ],
      [
        6,
        7,
        8
      ]
    ]
    expect(received).toEqual(expected)
  })

  test('Test 7', () => {
    const received = distributeGifts([
      [null, 1, null, 1, null],
      [1, null, 1, null, 1]
    ])
    const expected = [
      [
        1,
        1,
        1,
        1,
        1
      ],
      [
        1,
        1,
        1,
        1,
        1
      ]
    ]
    expect(received).toEqual(expected)
  })
})
