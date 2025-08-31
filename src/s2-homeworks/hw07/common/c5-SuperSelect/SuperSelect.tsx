import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'

import s from './SuperSelect.module.css'
import {selectOptions} from "@testing-library/user-event/dist/select-options";

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {

        // вызываем стандартный onChange, если он есть
        onChange?.(e)
        onChangeOption?.(Number(e.currentTarget.value)) // зберігаємо id як число
        // // если передан onChangeOption, то ищем выбранное значение
        // if (onChangeOption) {
        //     const selectedId = e.currentTarget.value
        //     const selectedOption = options?.find(o => String(o.id) === selectedId)
        //     if (selectedOption) {
        //         onChangeOption(selectedOption)
        //     }
        // }

    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')
    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
