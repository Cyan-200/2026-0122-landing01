/**
 * Get the correct asset path with base URL prefix
 * Handles both development (/) and production (/repo-name/) environments
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL
  // Remove leading slash from path if base already ends with /
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${base}${cleanPath}`
}
