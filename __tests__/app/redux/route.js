import { types, routes, initialState, reducer } from '../../../app/redux/route'

describe('reducer', () => {
  it('has a blank initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('sets the destination to outside', () => {
    const state = initialState
    const action = { type: types.PUSH, payload: routes.outside }
    const nextState = reducer(state, action)
    expect(nextState).toEqual({
      destination: routes.outside,
    })
  })
})
