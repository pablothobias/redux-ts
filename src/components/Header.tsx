import { useTimerContext } from '../store';

import Button from './UI/Button.tsx';

export default function Header() {

  const { stopTimer, isRunning } = useTimerContext();

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={stopTimer}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
