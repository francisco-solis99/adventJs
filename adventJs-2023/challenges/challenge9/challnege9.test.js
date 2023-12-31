import { test, describe, expect, expectTypeOf } from 'vitest'
import { adjustLights } from './challenge9'

describe('Switching Lights', () => {
  test('Test 1', () => {
    expectTypeOf(adjustLights).returns.toEqualTypeOf(2)
  })

  test('Test 2', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toEqual(1)
  })

  test('Test 3', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toEqual(2)
  })

  test('Test 4', () => {
    expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toEqual(1)
  })

  test('Test 5', () => {
    expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toEqual(0)
  })

  test('Test 6', () => {
    expect(adjustLights(['🔴', '🔴', '🔴'])).toEqual(1)
  })
})
