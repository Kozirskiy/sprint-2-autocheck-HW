import type {AppStoreType} from "../../hw10/bll/store";
import {useSelector} from "react-redux";

const initState: ThemeStateType = {
    themeId: 1,
}

export type ThemeStateType = {
    themeId: number
}
export type ChangeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}




type ThemeActionType = ChangeThemeIdActionType

export const themeReducer = (state:ThemeStateType = initState, action: ThemeActionType): ThemeStateType => {
    switch (action.type) {

        // 🖍️
            case 'SET_THEME_ID':
                return {
                    ...state,
                    themeId: action.id
                }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id})
