import { ReactNode } from "react";

export type Timer = {
    id: number;
    name: string;
    duration: number;
};

export type TimerContextType = {
    isRunning: boolean;
    timers: Timer[];
};
export type TimerContextValue = TimerContextType & {
    addTimer: (timer: Timer) => void;
    startTimer: () => void;
    stopTimer: () => void;
};

export type TimerContextProviderProps = {
    children: ReactNode;
};

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
};

type StartTimerAction = {
    type: 'START_TIMER';
};

type StopTimerAction = {
    type: 'STOP_TIMER';
};



export type Action = AddTimerAction | StartTimerAction | StopTimerAction ;