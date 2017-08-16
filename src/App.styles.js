import { StyleSheet } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    filter: 'contrast(.3)',
  },
  container: {
    background: 'linear-gradient(#d6e5ff, #82B1FF)',
    height: 'calc(100vh - 40px)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'all .4s cubic-bezier(0.0, 0.0, 0.2, 1)',
  },
  disabled: {
    pointerEvents: 'none',
  },
  chatButton: {
    position: 'fixed',
    bottom: 30,
    right: 30,
  },
  primaryButton: {
    position: 'fixed',
    bottom: 50,
    right: 50,
  },
  usersStatus: {
    position: 'fixed',
    bottom: 50,
    left: 50,
  },
  dialogForm: {
    display: 'flex',
    flexDirection: 'column',
  },
  dialogInput: {
    marginBottom: 4,
  },
  chatBox: {
    position: 'fixed',
    bottom: 80,
    left: 40,
    zIndex: 3,
  },
})

export default styles
