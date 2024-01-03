import { test, describe, expect, expectTypeOf } from 'vitest'
import { drawClock } from './challenge18'

describe('The digital clock', () => {
  test('Test 1', () => {
    expectTypeOf(drawClock).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    const expected = [
      [
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ]
    ]
    const received = drawClock('01:30')
    expect(received).toEqual(expected)
  })
  test('Test 3', () => {
    const expected = [
      [
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' '
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' '
      ],
      [
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ]
    ]
    const received = drawClock('23:45')
    expect(received).toEqual(expected)
  })

  test('Test 4', () => {
    const expected = [
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ]
    ]
    const received = drawClock('16:48')
    expect(received).toEqual(expected)
  })
  test('Test 5', () => {
    const expected = [
      [
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*'
      ]
    ]
    const received = drawClock('17:39')
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const expected = [
      [
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        ' ',
        ' ',
        ' ',
        ' ',
        ' ',
        '*'
      ],
      [
        '*',
        '*',
        '*',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*',
        '*',
        '*',
        ' ',
        ' ',
        ' ',
        '*'
      ]
    ]
    const received = drawClock('00:21')
    expect(received).toEqual(expected)
  })
})
