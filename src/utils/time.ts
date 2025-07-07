// src/utils/time.ts
/**
 * ミリ秒を日・時・分・秒に分解
 * @param {number} ms
 * @returns {{days: number, hours: number, minutes: number, seconds: number}}
 */
export const MS_PER_DAY = 86400000;
export const MS_PER_HOUR = 3600000;
export const MS_PER_MINUTE = 60000;
export const MS_PER_SECOND = 1000;

export interface TimeParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function millisecondsToTimeParts(ms: number): TimeParts {
  const days = Math.floor(ms / MS_PER_DAY);
  const hours = Math.floor((ms % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((ms % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((ms % MS_PER_MINUTE) / MS_PER_SECOND);
  return { days, hours, minutes, seconds };
}

/**
 * Dateオブジェクトをdatetime-local用の文字列(YYYY-MM-DDTHH:MM)に変換
 * @param {Date} date
 * @returns {string}
 */
export function formatDateTimeLocal(date: Date): string {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}
