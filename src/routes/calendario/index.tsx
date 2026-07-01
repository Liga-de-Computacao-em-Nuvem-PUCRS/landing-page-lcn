import { createFileRoute } from '@tanstack/react-router';
import CalendarioPage from '@/pages/CalendarioPage';

export const Route = createFileRoute('/calendario/')({
  component: CalendarioPage,
});
