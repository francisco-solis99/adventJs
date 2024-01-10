import { test, describe, expect, expectTypeOf } from 'vitest'
import { findBalancedSegment } from './challenge21'

describe('Binary message', () => {
  test('Test 1', () => {
    expectTypeOf(findBalancedSegment).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    const expected = [
      2,
      5
    ]
    expect(received).toEqual(expected)
  })

  test('Test 3', () => {
    const received = findBalancedSegment([1, 1, 0])
    const expected = [
      1,
      2
    ]
    expect(received).toEqual(expected)
  })

  test('Test 4', () => {
    const received = findBalancedSegment([1, 1, 1])
    const expected = []
    expect(received).toEqual(expected)
  })

  test('Test 5', () => {
    const received = findBalancedSegment([1, 0, 1])
    const expected = [
      0,
      1
    ]
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const received = findBalancedSegment([1, 0, 1, 0])
    const expected = [
      0,
      3
    ]
    expect(received).toEqual(expected)
  })

  test('Test 7', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 0, 1])
    const expected = [
      1,
      4
    ]
    expect(received).toEqual(expected)
  })

  test('Test 8', () => {
    const received = findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    const expected = [
      0,
      7
    ]
    expect(received).toEqual(expected)
  })

  test('Test 6', () => {
    const received = findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    const expected = [
      5,
      10
    ]
    expect(received).toEqual(expected)
  })
})
