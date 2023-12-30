import { test, describe, expect, expectTypeOf } from 'vitest'
import { drawGift } from './challenge7'

describe('The 3D Boxes', () => {
  test('Test 1', () => {
    expectTypeOf(drawGift).returns.toEqualTypeOf('')
  })

  test('Test 2', () => {
    const expected = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    expect(drawGift(4, '+')).toEqual(expected)
  })

  test('Test #03', () => {
    const expected = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    expect(drawGift(5, '*')).toEqual(expected)
  })

  // Test: drawGift(1, "^")
  test('Test #04', () => {
    const expected = '#\n'
    expect(drawGift(1, '^')).toEqual(expected)
  })

  // Test: drawGift(2, "&")
  test('Test #05', () => {
    const expected = ` ##
###
##
`
    expect(drawGift(2, '&')).toEqual(expected)
  })

  // Test: drawGift(10, "%")
  test('Test #06', () => {
    const expected = `         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`
    expect(drawGift(10, '%')).toEqual(expected)
  })
})
