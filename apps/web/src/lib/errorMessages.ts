/** Известные тексты ошибок API (NestJS exceptions — на английском) → русский. */
const KNOWN_MESSAGES: Record<string, string> = {
  "Email already registered": "Такой email уже зарегистрирован",
  "Invalid birth date": "Проверьте дату рождения",
  "Invalid email or password": "Неверный email или пароль",
  "Account is blocked": "Аккаунт заблокирован. Обратитесь к администратору",
  "Invalid or expired token": "Ссылка недействительна или устарела. Запросите новую",
};

/**
 * Превращает ответ API (data.message — строка или массив строк class-validator) в русский
 * текст для пользователя. Незнакомые/непереведённые сообщения (в том числе на английском)
 * не показываются как есть — вместо них используется fallback, чтобы в интерфейсе никогда
 * не всплывал необработанный текст ошибки не на русском.
 */
export function translateApiError(message: unknown, fallback: string): string {
  if (typeof message === "string") return KNOWN_MESSAGES[message] ?? fallback;
  return fallback;
}
