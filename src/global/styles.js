import { StyleSheet, css } from 'aphrodite/no-important'

export const palette = {
  primary: '#82B1FF',
  secondary: '#d6e5ff',
  accent: '#FFC107'
}

export const transitions = {
  "easing": {
    "easeInOut": "cubic-bezier(0.4, 0.0, 0.2, 1)",
    "easeOut": "cubic-bezier(0.0, 0.0, 0.2, 1)",
    "easeIn": "cubic-bezier(0.4, 0.0, 1, 1)",
    "sharp": "cubic-bezier(0.4, 0.0, 0.6, 1)"
  },
  "duration": {
    "shortest": 150,
    "shorter": 200,
    "short": 250,
    "standard": 300,
    "complex": 375,
    "enteringScreen": 225,
    "leavingScreen": 195
  }
}

export const globalStyles = StyleSheet.create({
  bodyText: {
    fontFamily: ['Lato', "sans-serif"],
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  caption: {
    fontFamily: ['Lato', "sans-serif"],
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  input: {
    padding: '8px 0',
    fontSize: 16,
    border: '0 none',
    borderBottom: 'rgba(0, 0, 0, 0.3) solid 2px',
    ':focus': {
      outline: 'none',
    },
    '::placeholder': {
      color: 'rgba(0,0,0,0.1)'
    }
  }
})


export const shadows = [
  "none",
  "0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)",
  "0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)",
  "0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)",
  "0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)",
  "0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
  "0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)",
  "0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
  "0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)",
  "0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)",
  "0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)",
  "0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)",
  "0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
]
