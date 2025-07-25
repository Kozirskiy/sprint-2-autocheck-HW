import React from 'react'
import s2 from '../../s1-main/App.module.css'
import Stand from './Stand'

/*
* 1 - понять (и простить) SuperInputText
* 2 - в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx (строка 21)
* 3 - дописать onChangeCallback в SuperCheckbox.tsx чтоб оба чекбокса работали на стенде
* 4 - сделать стили в соответствии с дизайном
* */

const HW4 = () => {
    return (
        <div id={'hw4'} className={s2.container}>
            <div className={s2.hwTitle}>✅Hometask №4</div>
            {/*демонстрация возможностей компонент:*/}
            <div className={s2.hw}>
                <Stand/>
            </div>
            <hr style={{marginTop: '20px', marginBottom: '20px'}}/>
        </div>
    )
}

export default HW4
