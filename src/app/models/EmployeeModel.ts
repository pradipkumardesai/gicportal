
export class EmployeeModel {

    public UserGuid: string;
    public EmployeeId: number;
    public Name: string;
    public EmailId: string;
    public SupervisorIntId: number;
    public Designation: string
    public Role: string
    public Summary: string
    public DateOfBirth: string
    public DeskNo: string
    public Extension: string
    public JoiningDate: string
    public About: string
    public Team: number
    public Imagedata: string
    public IsAdmin: boolean

    constructor()
    {
      
    }
    // constructor(
    //     UserGuid: string,
    //     EmployeeId: number,
    //     Name: string,
    //     EmailId: string,
    //     SupervisorIntId: number,
    //     Designation: string,
    //     Role: string,
    //     Summary: string,
    //     DateOfBirth: string,
    //     DeskNo: string,
    //     Extension: string,
    //     JoiningDate: string,
    //     About: string,
    //     Team: number,
    //     Imagedata: string,
    //     IsAdmin: boolean
    //   ) {
    //     this.UserGuid = UserGuid;
    //     this.EmployeeId = EmployeeId;
    //     this.Name = Name;
    //     this.EmailId= EmailId;
    //     this.SupervisorIntId= SupervisorIntId;
    //     this.Designation= Designation;
    //     this.Role= Role;
    //     this.Summary= Summary;
    //     this.DateOfBirth= DateOfBirth;
    //     this.DeskNo= DeskNo;
    //     this.Extension=Extension;
    //     this.JoiningDate= JoiningDate;
    //     this.About= About
    //     this.Team= Team
    //     this.Imagedata= Imagedata
    //     this.IsAdmin= IsAdmin
    //   }


}