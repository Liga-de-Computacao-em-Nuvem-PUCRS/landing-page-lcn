import { createFileRoute } from '@tanstack/react-router';
import CertificacoesPage from '@/pages/CertificacoesPage';

export const Route = createFileRoute('/certificacoes/')({
  component: CertificacoesPage,
});
