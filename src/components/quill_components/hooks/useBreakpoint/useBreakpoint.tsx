import { cleanup, renderHook } from 'test-utils'
import { setMedia } from 'mock-match-media'
import { useBreakpoint } from '.'
import 'mock-match-media/jest-setup'

describe('useBreakpoint', () => {
  beforeEach(() => {
    cleanup()
  })
  it('Should have isXS as true with screen width less than 640px', () => {
    setMedia({
      width: '639px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(true)
    expect(result.current.isSm).toBe(false)
    expect(result.current.isLg).toBe(false)
    expect(result.current.isMd).toBe(false)
    expect(result.current.isXl).toBe(false)
    expect(result.current.isXXl).toBe(false)
  })
  it('Should have isSm as true with screen width is bigger than 640px', () => {
    setMedia({
      width: '641px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(false)
    expect(result.current.isSm).toBe(true)
    expect(result.current.isLg).toBe(false)
    expect(result.current.isMd).toBe(false)
    expect(result.current.isXl).toBe(false)
    expect(result.current.isXXl).toBe(false)
  })

  it('Should have isMd as true with screen width bigger than 768px', () => {
    setMedia({
      width: '800px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(false)
    expect(result.current.isSm).toBe(true)
    expect(result.current.isMd).toBe(true)
    expect(result.current.isLg).toBe(false)
    expect(result.current.isXl).toBe(false)
    expect(result.current.isXXl).toBe(false)
  })

  it('Should have isLg as true with screen width bigger than 1024px', () => {
    setMedia({
      width: '1100px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(false)
    expect(result.current.isSm).toBe(true)
    expect(result.current.isMd).toBe(true)
    expect(result.current.isLg).toBe(true)
    expect(result.current.isXl).toBe(false)
    expect(result.current.isXXl).toBe(false)
  })

  it('Should have isXl as true with screen width bigger than 1280px', () => {
    setMedia({
      width: '1300px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(false)
    expect(result.current.isSm).toBe(true)
    expect(result.current.isMd).toBe(true)
    expect(result.current.isLg).toBe(true)
    expect(result.current.isXl).toBe(true)
    expect(result.current.isXXl).toBe(false)
  })

  it('Should have isXXl as true with screen width bigger than 1440px', () => {
    setMedia({
      width: '1550px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isXs).toBe(false)
    expect(result.current.isSm).toBe(true)
    expect(result.current.isMd).toBe(true)
    expect(result.current.isLg).toBe(true)
    expect(result.current.isXl).toBe(true)
    expect(result.current.isXXl).toBe(true)
  })

  it('Should have isMobile as true with screen width less than 768px', () => {
    setMedia({
      width: '767px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isMobile).toBe(true)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(false)
  })

  it('Should have isTablet as true with screen width between 768px and 1024px', () => {
    setMedia({
      width: '800px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(true)
    expect(result.current.isDesktop).toBe(false)
  })

  it('Should have isDesktop as true with screen width bigger than 1024px', () => {
    setMedia({
      width: '1100px',
    })
    const { result } = renderHook(() => useBreakpoint())

    expect(result.current.isMobile).toBe(false)
    expect(result.current.isTablet).toBe(false)
    expect(result.current.isDesktop).toBe(true)
  })
})
