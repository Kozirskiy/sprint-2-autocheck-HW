import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string)=> void
}

export const pureAddUser = (
    name: string,
    setError: React.Dispatch<SetStateAction<string>>,
    setName: React.Dispatch<SetStateAction<string>>,
    addUserCallback:(name: string) => void ) => {

    const trimmed = name.trim();

    if(trimmed) {
        addUserCallback(trimmed);
        setName('');
    } else {
        setError('Error! Enter your name')
    }
}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => {

    if(!name.trim()) setError('Error! Enter your name')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => {
    if(e.key === 'Enter') addUser()    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        if(error) setError('')
    }


    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length;
    const lastUserName = totalUsers ? users[totalUsers - 1].name : '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
