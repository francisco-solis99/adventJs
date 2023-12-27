import { test, describe, expect, expectTypeOf } from 'vitest'
import { cyberReindeer } from './challenge5'

describe('Santa\'s CyberTruck', () => {
  test('Test 1', () => {
    expectTypeOf(cyberReindeer).returns.toEqualTypeOf([])
  })

  test('Test 2', () => {
    expect(cyberReindeer('S..|...|..', 10)).toStrictEqual(
      [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..'
      ]
    )
  })

  test('Test 3', () => {
    expect(cyberReindeer('S.|.', 4)).toStrictEqual(
      [
        'S.|.',
        '.S|.',
        '.S|.',
        '.S|.'
      ]
    )
  })

  test('Test 4', () => {
    expect(cyberReindeer('S.|.|.', 7)).toStrictEqual(
      [
        'S.|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '..S.*.',
        '..*S*.'
      ]
    )
  })

  test('Test 5', () => {
    expect(cyberReindeer('S.|..', 6)).toStrictEqual(
      [
        'S.|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '..S..'
      ]
    )
  })

  test('Test 6', () => {
    expect(cyberReindeer('S.|.|.|......|.||.........', 8)).toStrictEqual(
      [
        'S.|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '..S.*.*......*.**.........',
        '..*S*.*......*.**.........',
        '..*.S.*......*.**.........'
      ]
    )
  })
})
