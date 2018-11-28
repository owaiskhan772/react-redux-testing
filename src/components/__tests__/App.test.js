import React from 'react'
import { shallow } from 'enzyme' // func: shallow renders *just* the given component and none of its children   

import App from 'components/App'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

let wrapper;
beforeEach(() => { // func: beforeEach is called before every single test in current test page
    wrapper = shallow(<App />)
})

it('shows a comment box', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
    expect(wrapper.find(CommentList).length).toEqual(1)
})