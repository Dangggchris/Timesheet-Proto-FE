export class TimeSheet {

    public user_id: string;
    public date: Date;
    public project_id: number;
    public hours: number;

    constructor(uid: string, date: Date, project_id: number, hours: number) {
        this.user_id = uid;
        this.date = date;
        this.project_id = project_id;
        this.hours = hours;
    }
}