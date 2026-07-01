import { useState } from 'react';
import type { Certification } from '@/types/cert.types';
import { PROVIDER_META } from '@/data/certifications';

/**
 * Badge oficial baixado em /public/badges/<provider>/<id>.png.
 * Se a imagem falhar, cai num badge estilizado (fallback) para não quebrar.
 */
export function CertBadge({ cert }: { cert: Certification }) {
  const [errored, setErrored] = useState(false);
  const meta = PROVIDER_META[cert.provider];

  if (errored) {
    return (
      <div
        className="flex size-16 shrink-0 flex-col items-center justify-center rounded-full text-center shadow-inner"
        style={{
          background: `radial-gradient(circle at 30% 25%, ${meta.color}22, ${meta.color}0d)`,
          border: `2px solid ${meta.color}55`,
        }}
        aria-label={`Badge ${cert.name}`}
      >
        <span
          className="font-mono text-[11px] font-bold"
          style={{ color: meta.color }}
        >
          {meta.short}
        </span>
        <span className="font-mono text-[9px] text-muted-foreground">
          {cert.code}
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/badges/${cert.provider}/${cert.id}.png`}
      alt={`Badge ${cert.name}`}
      loading="lazy"
      onError={() => setErrored(true)}
      className="size-16 shrink-0 object-contain drop-shadow-sm"
    />
  );
}
