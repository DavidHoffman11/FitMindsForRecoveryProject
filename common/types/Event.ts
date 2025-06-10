export type Event = {
    id: number,
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean,
    description: string,
    link?: string,
    date: Date
};