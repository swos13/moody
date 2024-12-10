export type Mood = {
  userId: number;
  type: "sad" | "angry" | "neutral" | "happy" | "excellent";
  note: string;
  date: Date;
};
