import { test, describe, expect, expectTypeOf } from 'vitest'
import { compile } from './challenge22'

describe('Programming language', () => {
  test('Test 1', () => {
    expectTypeOf(compile).returns.toEqualTypeOf()
  })

  test('Test 2', () => {
    expect(compile('++*-')).toEqual(3)
  })

  test('Test 3', () => {
    expect(compile('++¿+?')).toEqual(3)
  })

  test('Test 4', () => {
    expect(compile('-+¿+?')).toEqual(0)
  })

  test('Test 5', () => {
    expect(compile('++*¿-?')).toEqual(3)
  })

  test('Test 5', () => {
    expect(compile('++%++<')).toEqual(6)
  })

  test('Test 6', () => {
    expect(compile('++%++<')).toEqual(6)
  })

  test('Test 7', () => {
    expect(compile('++%++<++¿*?')).toEqual(16)
  })

  test('Test 8', () => {
    expect(compile('++¿+?¿+?¿+?')).toEqual(5)
  })

  test('Test 9', () => {
    expect(compile('--¿+++?')).toEqual(-2)
  })

  test('Test 10', () => {
    expect(compile('--¿+++?+++¿--?')).toEqual(-1)
  })

  test('Test 11', () => {
    expect(compile('<%+¿++%++<?')).toEqual(7)
  })

  test('Test 12', () => {
    expect(compile('<<<<<<+<<<<<+%')).toEqual(2)
  })
})
