import { test, describe, expect, expectTypeOf } from 'vitest'
import { transformTree } from './challenge16'

describe('Friday deployment', () => {
  test('Test 1', () => {
    expectTypeOf(transformTree).returns.toEqualTypeOf({})
  })

  test('Test 2', () => {
    expect(transformTree([])).toEqual(null)
  })

  test('Test 3', () => {
    expect(transformTree([1])).toEqual({
      value: 1,
      left: null,
      right: null
    })
  })

  test('Test 4', () => {
    expect(transformTree([1, 2, 3])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    })
  })

  test('Test 5', () => {
    expect(transformTree([1, 2, 3, 4, 5])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: null,
        right: null
      }
    })
  })

  test('Test 6', () => {
    expect(transformTree([1, 2, 3, 4, 5, 6, 7])).toEqual({
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null
        },
        right: {
          value: 5,
          left: null,
          right: null
        }
      },
      right: {
        value: 3,
        left: {
          value: 6,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    })
  })

  test('Test 7', () => {
    expect(transformTree([17, 0, null, null, 1])).toEqual({
      value: 17,
      left: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      },
      right: null
    })
  })

  test('Test 8', () => {
    expect(transformTree([3, 1, 0, 8, 12, null, 1])).toEqual({
      value: 3,
      left: {
        value: 1,
        left: {
          value: 8,
          left: null,
          right: null
        },
        right: {
          value: 12,
          left: null,
          right: null
        }
      },
      right: {
        value: 0,
        left: null,
        right: {
          value: 1,
          left: null,
          right: null
        }
      }
    }
    )
  })

  test('Test 9', () => {
    expect(transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])).toEqual({
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null
          },
          right: {
            value: 11,
            left: null,
            right: null
          }
        }
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null
          }
        }
      }
    })
  })
})
