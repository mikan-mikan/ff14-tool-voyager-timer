import type { Timer } from "./TimerTypes";

export interface CalendarInputProps {
  id: number;
  absoluteTime: string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
