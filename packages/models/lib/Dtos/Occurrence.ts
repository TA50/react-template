export enum Result {
  Correct = "Correct",
  Fail = "Fail",
}

export interface Occurrence {
  result: Result;
  occurredAt: Date;
  cardId: string;
}
