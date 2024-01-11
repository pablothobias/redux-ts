import { useTimerContext } from '../store';

import Button from './UI/Button.tsx';

export default function Header() {

  const { startTimer, stopTimer, isRunning } = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={isRunning ? stopTimer : startTimer}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
