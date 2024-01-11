import Timer from './Timer.tsx';

import { type Timer as TimerType } from '../store/types.ts';
import { useTimerContext } from '../store/timer-context.tsx';

export default function Timers() {
  const { timers } = useTimerContext();

  return (
    <ul>
      {timers?.map((timer: TimerType) => (
        <li key={timer.id}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
}
