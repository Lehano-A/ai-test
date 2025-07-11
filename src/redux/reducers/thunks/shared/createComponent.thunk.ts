import { createAsyncThunk, type Dispatch } from '@reduxjs/toolkit'
import { uiSlice } from '../../slices/ui/ui.slice'
import type { Forms, OtherComponents } from '../../slices/ui/ui.types'

export const createComponentThunk = <T, Args>(
  componentName: Forms | OtherComponents,
  apiCall: (args: Args) => Promise<T>,
  successHandler: (data: T, dispatch: Dispatch) => void,
) => {
  return createAsyncThunk(`${componentName}/fetch`, async (args: Args, { dispatch }) => {
    dispatch(uiSlice.actions.setLoading({ componentName, status: true }))
    try {
      const res = await apiCall(args)
      successHandler(res, dispatch)
      return res
    } finally {
      dispatch(uiSlice.actions.setLoading({ componentName, status: false }))
    }
  })
}
