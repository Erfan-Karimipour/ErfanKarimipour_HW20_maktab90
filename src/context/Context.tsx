import React, { ReactNode, createContext, useContext, useState } from 'react'

let Context = createContext({});
    
    export function Providers ({children}: {children: ReactNode}){

    let [step, setStep] = useState<number>(0);

    let [questions, setQuestions] = useState([])

    let [answers, setAnswers] = useState(0);

    return (
        <Context.Provider value={{step, setStep, questions, setQuestions, answers, setAnswers}}>
            {children}
        </Context.Provider>
    )
};

export const useForm = () => {
    return useContext(Context);
}

