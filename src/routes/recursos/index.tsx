import { createFileRoute } from '@tanstack/react-router';
import RecursosPage from '@/pages/RecursosPage';

export const Route = createFileRoute('/recursos/')({
  component: RecursosPage,
});
