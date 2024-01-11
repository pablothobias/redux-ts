import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/types.ts';

export default function Timer({ name, duration }: TimerProps) {
  return (
    <Container as="article">
      <h2>{name} - {`${duration}s`}</h2>
    </Container>
  );
}