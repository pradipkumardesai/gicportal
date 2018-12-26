export class OpenPosition {
  public jobCode: string;
  public position: string;
  public skills: string;
  public exp: string;
  public responsibleStaff: Array<string>;

  constructor(
    jobCode: string,
    position: string,
    skills: string,
    exp: string,
    responsibleStaff: Array<string>
  ) {
    this.jobCode = jobCode;
    this.position = position;
    this.skills = skills;
    this.exp = exp;
    this.responsibleStaff = responsibleStaff;
  }
}
