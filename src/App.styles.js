import { StyleSheet, css } from 'aphrodite/no-important'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    filter: 'contrast(1)',
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
  topBar: {
    display: 'flex',
    padding: 16,
    justifyContent: 'space-between',
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
  rightContent: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarButton: {
    width: 36,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 24,
    display:' inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  dialogForm: {
    display: 'flex',
    'flexDirection': 'column',
  },
  dialogInput: {
    marginBottom: 4,
  }
})

export default styles
