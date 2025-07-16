import { translations } from '../i18n';

export function useTranslation() {
  // No futuro, pode-se adicionar suporte a múltiplos idiomas
  const t = translations.ptBR;
  return { t };
} 