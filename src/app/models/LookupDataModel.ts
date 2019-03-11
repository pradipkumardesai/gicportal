
export class LookupDataModel {

    public Teams: Array<TeamModel>;
    public Supervisor:  Array<SupervisorModel>;
    
    constructor(
        Teams: Array<TeamModel>,
        Supervisor: Array<SupervisorModel>
        
      ) {
        this.Teams = Teams;
        this.Supervisor = Supervisor;
      }
}
class TeamModel {

    public TeamIntId: number;
    public Team: string;
    
    constructor(
        TeamIntId: number,
        Team: string        
      ) {
        this.TeamIntId = TeamIntId;
        this.Team = Team;
      }
}

class SupervisorModel {

    public SupervisorIntId: number;
    public SupervisorName: string;
    
    constructor(
        SupervisorIntId: number,
        SupervisorName: string        
      ) {
        this.SupervisorIntId = SupervisorIntId;
        this.SupervisorName = SupervisorName;
      }


}