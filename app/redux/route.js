export const types = {
  PUSH: 'PUSH',
}

export const routes = {
  outside: 'outside',
  interview: 'interview',
}

export const actionCreators = {
  push: (destination) => {
    return {type: types.PUSH, payload: destination}
  },
}

export const initialState = {}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.PUSH: {
      return {
        ...state,
        destination: payload,
      }
    }
    default: {
      return state
    }
  }
}
