import { shallow } from 'enzyme'
import React from 'react'
import Counter from './counterConnect-component'
import reducer, { INITIAL_STATE } from './counterConnect-reducer'
import { increment, decrement, reset } from './counterConnect-action'

const wrapper = shallow(<Counter />)

describe('Render element', () => {
  it('snapshot counter connect', () => {
    expect(wrapper.debug()).toMatchSnapshot()
  })
})

describe('Counter reducer', () => {
  it('NONE', () => {
    const state = reducer(undefined, {})
    expect(state).toStrictEqual(INITIAL_STATE)
  })

  it('INCREMENT', () => {
    const state = reducer(INITIAL_STATE, increment())
    expect(state.counter).toStrictEqual(1)
  })

  it('DECREMENT', () => {
    const state = reducer(INITIAL_STATE, decrement())
    expect(state.counter).toStrictEqual(-1)
  })

  it('RESET', () => {
    const state = reducer(INITIAL_STATE, reset())
    expect(state.counter).toStrictEqual(0)
  })

  it('DEFAULT', () => {
    const state = reducer(INITIAL_STATE, {})
    expect(state.counter).toStrictEqual(0)
  })
})
