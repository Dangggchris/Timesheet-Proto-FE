export class TimeSheet {

    public uid: string;
    public date: string;
    public projectId: number;
    public hours: number;

    constructor(uid: string, date: string, projectId: number, hours: number) {

        this.uid = uid;
        this.date = date;
        this.projectId = projectId;
        this.hours = hours;

    }
}