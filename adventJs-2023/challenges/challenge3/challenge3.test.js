import { test, describe, expect, expectTypeOf } from 'vitest'
import { findNaughtyStep } from './challenge3'

describe('The naughty elf', () => {
  test('Test 1', () => {
    expectTypeOf(findNaughtyStep).returns.toEqualTypeOf('')
  })

  test('Test 2', () => {
    expect(findNaughtyStep('abcd', 'abcde')).toBe('e')
  })

  test('Test 3', () => {
    expect(findNaughtyStep('abcde', 'abcd')).toBe('e')
  })

  test('Test 4', () => {
    expect(findNaughtyStep('xxxx', 'xxoxx')).toBe('o')
  })

  test('Test 5', () => {
    expect(findNaughtyStep('stepfor', 'stepor')).toBe('f')
  })

  test('Test 6', () => {
    expect(findNaughtyStep('iiiii', 'iiiii')).toBe('')
  })
})
