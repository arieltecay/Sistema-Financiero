import React, { createContext, useState } from 'react'

export const SaldoContext = createContext();

export const SaldoProvider = ({ children }) => {
    const [total, setTotal] = useState('')

    const addTotal = e => {
        setTotal(e)
    }
    return (
        <SaldoContext.Provider value={{ total, addTotal }}>
            {children}
        </SaldoContext.Provider>
    )
}