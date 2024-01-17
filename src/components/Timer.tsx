import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/types.ts';
import { useEffect, useRef, useState } from 'react';
import { useTimerContext } from '../store/timer-context.tsx';

export default function Timer({ name, duration }: TimerProps) {
  const ONE_MILLISECOND = 1000;
  const DURATION_IN_MILLISECONDS = duration * ONE_MILLISECOND;

  const { isRunning } = useTimerContext();

  const timerRef = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState<number>(DURATION_IN_MILLISECONDS);

  const formattedRemainingTime = (remainingTime / ONE_MILLISECOND).toFixed(0);

  if (remainingTime <= 0 && timerRef.current) {
    clearInterval(timerRef.current);
  }

  useEffect(() => {
    if (isRunning) {
      const timer: number = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 1000;
        });
      }, 1000);

      timerRef.current = timer;
    }

    return () => clearInterval(timerRef.current!);
  }, [isRunning]);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={DURATION_IN_MILLISECONDS} value={remainingTime}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}