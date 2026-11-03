import type { MetadataRoute } from 'next';
import { sitePaths, siteUrl } from '@/lib/metadata';

// No lastModified: a build date would claim every page changed on every deploy
export default function sitemap(): MetadataRoute.Sitemap {
  return sitePaths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
