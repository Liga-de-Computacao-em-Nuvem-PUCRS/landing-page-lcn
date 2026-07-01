import { createFileRoute } from '@tanstack/react-router';
import NewsPage from '@/pages/NewsPage';

export const Route = createFileRoute('/noticias/')({
  component: NewsPage,
});
