import { type ReactNode, createContext, useContext, useState, useReducer } from "react";

type Timer = {
    id: number;
    name: string;
    duration: number;
};

type TimerContextType = {
    isRunning: boolean;
    timers: Timer[];
};

export type TimerContextValue = TimerContextType & {
    addTimer: (timer: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;

};

export const TimerContext = createContext<TimerContextValue | null>(null);

type TimerContextProviderProps = {
    children: ReactNode;
};

const initialState: TimerContextType = {
    isRunning: false,
    timers: [],
};

type Action = {
    type: 'ADD_TIMER' | 'START_TIMER' | 'STOP_TIMER';
    payload?: any;
};

const timerReducer = (state: TimerContextType, action: Action): TimerContextType => {
    switch (action.type) {
        case "ADD_TIMER":
            return {
                ...state,
                timers: [...state.timers, action.payload],
            };
        case "START_TIMER":
            return {
                ...state,
                isRunning: true,
            };
        case "STOP_TIMER":
            return {
                ...state,
                isRunning: false,
            };
        default:
            return state;
    }
};

const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
    const [timerState, dispatch] = useReducer(timerReducer, initialState);

    const addTimer = (timer: Timer) => {
        dispatch({ type: "ADD_TIMER", payload: timer });
    };

    const startTimer = () => {
        dispatch({ type: "START_TIMER" });
    };

    const stopTimer = () => {
        dispatch({ type: "STOP_TIMER" });
    };

    const value: TimerContextValue = {
        isRunning: false,
        timers: [],
        addTimer,
        startTimer,
        stopTimer,
    };

    return (<TimerContext.Provider value={value}>{children}</TimerContext.Provider>);
};

export const useTimerContext = () => {
    const timerContext = useContext(TimerContext);

    if (timerContext == null) {
        throw new Error("useTimerContext must be used within a TimerContextProvider");
    }

    return timerContext;
};

export default TimerContextProvider
