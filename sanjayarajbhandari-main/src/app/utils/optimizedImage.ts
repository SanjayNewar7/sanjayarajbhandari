export function optimizedImage(source: string) {
  const normalizedSource = source.startsWith('assets/images/') ? `/${source}` : source;
  if (
    !normalizedSource.startsWith('/assets/images/') ||
    normalizedSource.includes('/optimized/') ||
    normalizedSource.includes('custom_makeup_boxes_manufacturer') ||
    /\.(svg|webp|gif)$/i.test(normalizedSource)
  ) return normalizedSource;

  return normalizedSource
    .replace('/assets/images/', '/assets/images/optimized/site/')
    .replace(/\.(png|jpe?g)$/i, '.webp');
}
