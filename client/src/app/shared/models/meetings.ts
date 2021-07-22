import { DaysEnum } from "../enums/days-enum";

export interface ICreateMeeting {
  id?: number,
  name: string,
  grade: string,
  day: DaysEnum,
  startTime: Date,
  endTime: Date,
  place: string,
  isActive: boolean,
  displayOrder: number
}
