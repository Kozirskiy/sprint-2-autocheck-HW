import { pureAddUserCallback } from '../HW3'
import { UserType } from '../HW3'
import React from 'react'

let users: UserType[] = []

const mockSetUsers: React.Dispatch<React.SetStateAction<UserType[]>> = (action) => {
    if (typeof action === 'function') {
        users = (action as (prevState: UserType[]) => UserType[])(users)
    } else {
        users = action
    }
}

beforeEach(() => {
    users = []
})

test('name 1', () => {
    pureAddUserCallback('name', mockSetUsers, users)
    expect(users.length).toBe(1)
    expect(users[0].name).toBe('name')
    expect(!!users[0]._id).toBe(true)
})
