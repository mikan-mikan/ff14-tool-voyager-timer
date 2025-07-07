import type { Timer } from "./TimerTypes";

export interface RemainingTimeInputProps {
  id: number;
  days: number | string;
  hours: number | string;
  minutes: number | string;
  onUpdate: (field: keyof Timer, value: string) => void;
}
