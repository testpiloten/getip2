/**
 * Extracts all request headers as a plain object
 *
 * This is useful for debugging purposes. The Headers object is opaque
 * and cannot be directly stringified, so we use Object.fromEntries
 * to convert it to a plain JavaScript object.
 *
 * @param request - The incoming Request object
 * @returns An object containing all request headers
 */
export function getAllHeaders(request: Request): Record<string, string> {
	return Object.fromEntries(request.headers);
}
