import { combineReducers } from '@reduxjs/toolkit'
import testSlice from './slices/components/test/test.slice'
import formSlice from './slices/form/form.slice'
import notificationSlice from './slices/components/notification/notification.slice'
import uiSlice from './slices/ui/ui.slice'
import resultProcessingSlice from './slices/components/resultProcessing/resultProcessing.slice'

const rootReducer = combineReducers({
  test: testSlice,
  form: formSlice,
  ui: uiSlice,
  notification: notificationSlice,
  resultProcessing: resultProcessingSlice,
})

export default rootReducer
