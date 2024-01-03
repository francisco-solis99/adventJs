import { test, describe, expect, expectTypeOf } from 'vitest'
import { checkIsValidCopy } from './challenge12'

describe('It is a valid copy?', () => {
  test('Test 1', () => {
    expectTypeOf(checkIsValidCopy).returns.toEqualTypeOf(true)
  })
  test('Test 2', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toEqual(true)
  })
  test('Test 3', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toEqual(false)
  })
  test('Test 4', () => {
    expect(checkIsValidCopy('Santa Claus', ' Santa Claus ')).toEqual(false)
  })
  test('Test 5', () => {
    expect(checkIsValidCopy('Santa Claus', '###:. c:+##')).toEqual(true)
  })
  test('Test 6', () => {
    expect(checkIsValidCopy('Santa Claus', 'sant##claus+')).toEqual(false)
  })
  test('Test 8', () => {
    expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toEqual(false)
  })
  test('Test 9', () => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toEqual(false)
  })
  test('Test 10', () => {
    expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toEqual(false)
  })
  test('Test 11', () => {
    expect(checkIsValidCopy('3 #egalos', '3 .+:# #:')).toEqual(true)
  })
  test('Test 12', () => {
    expect(checkIsValidCopy('3 regalos', '3        ')).toEqual(true)
  })
  test('Test 13', () => {
    expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toEqual(true)
  })
  test('Test 14', () => {
    expect(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')).toEqual(false)
  })
})
