import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    // ====== 1. START / STOP функції ======
    const start = () => {
        stop()
        const id = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const stop = () => {
        if (timerId) {
            clearInterval(timerId)
            setTimerId(undefined)
        }

    }

    // ====== 2. Hover події ======
    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)


// ====== 3. Форматування дати / часу ======
    const stringTime = date.toLocaleTimeString('en-GB') // 24-годинний формат
    const stringDate = date.toLocaleDateString('en-GB').replace(/\//g, '.') // dd.mm.yyyy

    const stringDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date)
    const stringMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)

    // ====== 4. Дизейбл кнопок ======
    const startDisabled = timerId !== undefined
    const stopDisabled = timerId === undefined

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    className={s.superBTN}
                    id={'hw9-button-start'}
                    disabled={startDisabled} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    className={s.superBTN}
                    id={'hw9-button-stop'}
                    disabled={stopDisabled} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
