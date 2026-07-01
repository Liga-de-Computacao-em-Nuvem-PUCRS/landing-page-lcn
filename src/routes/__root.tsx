import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/Footer';

function RootComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-sans">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: 'var(--radius)',
            fontFamily: 'var(--font-sans)',
          },
        }}
      />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
});
