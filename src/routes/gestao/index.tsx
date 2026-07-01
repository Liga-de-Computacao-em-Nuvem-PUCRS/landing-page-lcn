import { createFileRoute } from '@tanstack/react-router';
import GestaoPage from '@/pages/GestaoPage';

export const Route = createFileRoute('/gestao/')({
  component: GestaoPage,
});
