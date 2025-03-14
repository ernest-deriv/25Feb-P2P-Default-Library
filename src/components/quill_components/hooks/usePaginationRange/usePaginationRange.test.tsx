import { cleanup, renderHook } from 'test-utils'
import { usePaginationRange } from '.'

describe('usePaginationRange', () => {
  const mockProps: Parameters<typeof usePaginationRange>[0] = {
    currentPage: 1,
    totalPageCount: 8,
    variant: 'number',
  }
  afterEach(() => {
    cleanup()
  })

  it('should return the same number of bullets as the total number of pages', () => {
    const { result } = renderHook(() =>
      usePaginationRange({
        currentPage: 1,
        totalPageCount: 4,
        variant: 'bullet',
      }),
    )
    expect(result.current).toHaveLength(4)
  })

  it('should return the same number of bullets as the total number of pages even when greater than 6', () => {
    const { result } = renderHook(() =>
      usePaginationRange({ ...mockProps, variant: 'bullet' }),
    )
    expect(result.current).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should not return ellipses when page count is less than 6', () => {
    const { result } = renderHook(() =>
      usePaginationRange({ ...mockProps, totalPageCount: 4 }),
    )
    expect(result.current).toEqual([1, 2, 3, 4])
  })

  it('should return ellipses on right side when there are more than 6 pages', () => {
    const { result } = renderHook(() => usePaginationRange(mockProps))
    expect(result.current).toEqual([1, 2, 3, 4, 5, '...', 8])
  })

  it('should return ellipses on left side when current page is greater than 6', () => {
    const { result } = renderHook(() =>
      usePaginationRange({
        ...mockProps,
        currentPage: 6,
      }),
    )
    expect(result.current).toEqual([1, '...', 4, 5, 6, 7, 8])
  })

  it('should return ellipses on both sides when current page is greater than 6 and total page count is greater than 8', () => {
    const { result } = renderHook(() =>
      usePaginationRange({
        ...mockProps,
        currentPage: 4,
      }),
    )
    expect(result.current).toEqual([1, '...', 3, 4, 5, '...', 8])
  })
})
