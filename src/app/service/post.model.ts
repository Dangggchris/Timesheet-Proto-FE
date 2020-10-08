export interface TimeSheet {
    id: number;
    uid: number;
    date: Date;
    projectId: number;
    hours: number;
    notes: Text;
}