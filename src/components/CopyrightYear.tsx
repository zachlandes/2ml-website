'use client';

import { useEffect, useState } from 'react';

interface CopyrightYearProps {
  /* Year baked into the static export, rendered until the client takes over */
  buildYear: number;
}

export default function CopyrightYear({ buildYear }: CopyrightYearProps) {
  const [year, setYear] = useState(buildYear);

  // The static export freezes the build year into the HTML, so an unrebuilt
  // site shows a stale copyright. Correct it to the visitor's year on mount,
  // after hydration has matched the server markup.
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
