export type TimerMethod = "relative" | "absolute";

export interface Timer {
  id: number;
  method: TimerMethod;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  absoluteTime: string;
}

export interface TimerFormProps {
  timer: Timer;
  onUpdate: (field: keyof Timer, value: string) => void;
}

export interface RemainingTimeInputProps {
  id: number;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  onUpdate: (field: keyof Timer, value: string) => void;
}

export interface CalendarInputProps {
  id: number;
  absoluteTime: string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
