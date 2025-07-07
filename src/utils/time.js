// src/utils/time.js

/**
 * ミリ秒を日・時・分・秒に分解
 * @param {number} ms
 * @returns {{days: number, hours: number, minutes: number, seconds: number}}
 */
export function millisecondsToTimeParts(ms) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

/**
 * Dateオブジェクトをdatetime-local用の文字列(YYYY-MM-DDTHH:MM)に変換
 * @param {Date} date
 * @returns {string}
 */
export function formatDateTimeLocal(date) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60000);
  return local.toISOString().slice(0, 16);
}
