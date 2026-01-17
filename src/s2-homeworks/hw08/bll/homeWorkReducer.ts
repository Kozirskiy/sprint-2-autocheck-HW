import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
                .sort((a, b) => {
                    return action.payload === 'up'
                        ? a.name.localeCompare(b.name) // A → Z
                        : b.name.localeCompare(a.name) // Z → A
                })

            return newState
        }
        case 'check': {

            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
