export interface IBanner {
  id: number;
  title: string;
  imgUrl: string;
}


export interface IMass {
  id: number;
  day: number;
  order?: string;
  displayOrder: number
  date?: Date;
  massRepetationType?: number;
  name: string;
  type: number;
  startTime: Date;
  endTime: Date;
  place: string;
  isActive: boolean;
}

export interface IMasses {
  banner: IBanner;
  mass: IMass[];
}

export interface ICraeteMass {
  id: number;
  massEventId: number;
  secId: number;
  day: number;
  order: number;
  date: Date;
  name: string;
  type: number;
  startTime: Date;
  endTime: Date;
  place: string;
  isActive: boolean;
}
export interface IMassGroup{
    [x: string]: any;
    events: any[];
}
