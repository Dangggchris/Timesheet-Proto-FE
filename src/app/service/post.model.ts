export class TimeSheet {

    public id: number;
    public uid: number;
    public date: Date;
    public projectId: number;
    public hours: number;
    public notes: Text;

    constructor(id: number, uid: number, date: Date, projectId: number, hours: number, notes: Text) {
        this.id = id;
        this.uid = uid;
        this.date = date;
        this.projectId = projectId;
        this.hours = hours;
        this.notes = notes;
    }
}