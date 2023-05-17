import React, { ReactNode, createContext, useContext, useState } from 'react'

let Context = createContext({});


// function setState(state, action){
    
    //     switch (action.type){
        //         case 'nextPage':
        //             return {
//                 ...state,
//                 step: state.step ++
//             }
//             break;
//         case 'previousPage':
//             return {
    //                 ...state,
    //                 step: state.step --
    //             }
    //             break;
    //     }
    // }
    
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

