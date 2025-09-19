// Generate responsive image srcSet
export function generateSrcSet(src: string, widths: number[] = [400, 800, 1200, 1600]): string {
  const baseUrl = src.replace(/\.[^/.]+$/, ''); // Remove extension
  const extension = src.split('.').pop();
  
  return widths
    .map(width => `${baseUrl}-${width}w.${extension} ${width}w`)
    .join(', ');
}

// Generate responsive image sizes
export function generateSizes(defaultSize: string = '100vw'): string {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${defaultSize}`;
}

// Lazy load image with intersection observer
export function createLazyImage(src: string, alt: string, className?: string): string {
  return `
    <img 
      src="${src}" 
      alt="${alt}" 
      loading="lazy"
      class="${className || ''}"
      onload="this.style.opacity='1'"
      style="opacity: 0; transition: opacity 0.3s ease-in-out;"
    />
  `;
}

// Generate placeholder image
export function generatePlaceholder(width: number, height: number, text: string = 'Image'): string {
  const encodedText = encodeURIComponent(text);
  return `https://via.placeholder.com/${width}x${height}/f3f4f6/6b7280?text=${encodedText}`;
}

// Optimize image for web
export function optimizeImageUrl(src: string, width?: number, quality: number = 80): string {
  if (src.startsWith('http')) {
    // For external images, you might want to use a CDN or image optimization service
    return src;
  }
  
  // For local images, you can add optimization parameters
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  params.append('q', quality.toString());
  
  return `${src}?${params.toString()}`;
}


