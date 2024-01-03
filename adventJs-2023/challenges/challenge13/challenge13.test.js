import { test, describe, expect, expectTypeOf } from 'vitest'
import { calculateTime } from './challenge13'

describe('challenge13', () => {
  test('Test 1', () => {
    expectTypeOf(calculateTime).returns.toEqualTypeOf('')
  })
  test('Test 2', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toEqual('-02:20:00')
  })
  test('Test 3', () => {
    expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toEqual('-00:30:00')
  })
  test('Test 4', () => {
    expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toEqual('00:30:00')
  })
  test('Test 5', () => {
    expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toEqual('-05:29:00')
  })
  test('Test 6', () => {
    expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toEqual('00:00:00')
  })
  test('Test 7', () => {
    expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toEqual('05:02:01')
  })
  test('Test 7', () => {
    expect(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])).toEqual('-00:00:01')
  })
})
