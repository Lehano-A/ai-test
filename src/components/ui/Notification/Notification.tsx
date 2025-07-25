import { Slide, Snackbar, type SlideProps } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useTheme } from 'styled-components'
import { closeNotification } from '../../../redux/reducers/slices/components/notification/notification.slice'
import { useAppSelector } from '../../../redux/store'

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction='down' />
}

function Notification() {
  const { isOpen, message, status } = useAppSelector((state) => state.notification)

  const dispatch = useDispatch()

  const theme = useTheme()

  return (
    <Snackbar
      key={Math.random()}
      open={isOpen}
      color='lime'
      slots={{ transition: SlideTransition }}
      message={message}
      onClose={() => dispatch(closeNotification())}
      autoHideDuration={8000}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      sx={{
        '.MuiSnackbarContent-message': { display: 'flex', flexDirection: 'column' },

        '.MuiPaper-root': { fontFamily: 'inherit', backgroundColor: theme.palette[status] },
      }}
    />
  )
}

export default Notification
