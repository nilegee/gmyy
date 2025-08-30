const emails = (import.meta.env.VITE_ALLOWED_EMAILS || '').split(',').map((e) => e.trim()).filter(Boolean);

export function isAllowedEmail(email: string): boolean {
  return emails.includes(email);
}

export const allowedEmails = emails;
