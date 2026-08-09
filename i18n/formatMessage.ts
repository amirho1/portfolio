/**
 * Replace named placeholders in a localized message.
 * @param message - A localized string containing named placeholders.
 * @param values - Placeholder values keyed by placeholder name.
 * @returns The formatted localized message.
 */
export function formatMessage(
  message: string,
  values: Readonly<Record<string, string | number>>,
): string {
  let formattedMessage = message;

  for (const [key, value] of Object.entries(values)) {
    formattedMessage = formattedMessage.replaceAll(`{${key}}`, String(value));
  }

  return formattedMessage;
}
