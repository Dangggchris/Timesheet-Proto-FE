
export class Projects {

    public timesheet: {};
    public project_name: string;

    constructor(project_name: string, timsheet: {}) {
        this.project_name = project_name;
        this.timesheet = timsheet
    }
}