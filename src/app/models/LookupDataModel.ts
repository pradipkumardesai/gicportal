
export class LookupDataModel {

  public Teams: Array<TeamModel>;
  public Supervisor: Array<SupervisorModel>;

  constructor() {
    // this.Teams = new Array<TeamModel>();
    // this.Supervisor = new Array<SupervisorModel>();
  }
}
class TeamModel {
  public TeamIntId: number;
  public Team: string;

  constructor() {
  }
}

class SupervisorModel {
  public SupervisorIntId: number;
  public SupervisorName: string;

  constructor() {
  }
}