
export class Projects {

    public project_id: number;
    public timesheet: {};
    public project_name: string;

    constructor(project_name, timesheet, project_id) {
        this.project_id = project_id;
        this.project_name = project_name;
        this.timesheet = timesheet
    }
}


// export interface Projects {

//     timesheet: {};
//     project_name: string;
// }