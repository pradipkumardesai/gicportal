export class Employee {
  public employeeName: string;
  public employeeImgPath: string;
  public employeeDesk: string;
  public employeeExt: string;
  public employeeEmail: string;
  public employeeProject: string;

  constructor(
    employeeName: string,
    employeeImgPath: string,
    employeeDesk: string,
    employeeExt: string,
    employeeEmail: string,
    employeeProject: string
  ) {
    this.employeeName = employeeName;
    this.employeeImgPath = employeeImgPath;
    this.employeeDesk = employeeDesk;
    this.employeeExt = employeeExt;
    this.employeeEmail = employeeEmail;
    this.employeeProject = employeeProject;
  }
}
