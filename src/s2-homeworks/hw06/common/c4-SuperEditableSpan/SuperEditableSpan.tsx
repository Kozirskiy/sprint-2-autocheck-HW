import React, {
    DetailedHTMLProps,
    InputHTMLAttributes,
    HTMLAttributes,
    useState,
    type KeyboardEvent
} from 'react'
import s from './SuperEditableSpan.module.css'
import SuperInputText from '../../../hw04/common/c1-SuperInputText/SuperInputText'
import editIcon from './editIcon.svg'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = Omit<DefaultInputPropsType, 'type'> & {
    // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string

    spanProps?: DefaultSpanPropsType & { defaultText?: string }// пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = (
    {
        autoFocus,
        onBlur,
        onEnter,
        spanProps,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const {children, onDoubleClick, className, defaultText, ...restSpanProps} =
    spanProps || {}

    const onEnterCallback = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setEditMode(false)
            onEnter?.()
        }
    }
    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        onBlur?.(e)
    }
    const onDoubleClickCallBack = (
        e: React.MouseEvent<HTMLSpanElement, MouseEvent>
    ) => {
        setEditMode(true)

        onDoubleClick?.(e)
    }

    const spanClassName = s.span
        + (className ? ' ' + className : '')

    return (
        <>
            {editMode ? (
                <SuperInputText
                    autoFocus={autoFocus || true}
                    onBlur={onBlurCallback}
                    onEnter={() => {
                        setEditMode(false)
                        onEnter?.()
                    }}
                    className={s.input}
                    onChange={(e) => {
                        restProps.onChange?.(e)               // збережи стандартну поведінку (якщо передана)
                        restProps.onChangeText?.(e.target.value) // 👈 це твоя функція з HW6, яка оновлює value
                    }}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                />
            ) : (
                <div className={s.spanBlock}>
                    <img
                        src={editIcon}
                        className={s.pen}
                        alt={'edit'}
                    />
                    <span
                        onDoubleClick={onDoubleClickCallBack}
                        className={spanClassName}
                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}

                        {children || restProps.value || defaultText}
                    </span>
                </div>
            )}
        </>
    )
}

export default SuperEditableSpan
