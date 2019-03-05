export interface IPostDataModel {
   EmployeeId: number;
   Name: string;
   EMailId: string;
   Designation: string;
   SupervisorIntId: string;
   Team: string;
   Summary: string;
   DateOfBirth: Date;
   JoiningDate: Date;
   DeskNo:string;
   ExtNo:string;
   About:string;
   Photo:string;
}

export class PostDataModel {//implements IPostDataModel {

    public EmployeeId: number;
    public Name: string;
    public EMailId: string;
    public Designation: string;
    public SupervisorIntId: string;
    public Team: string;
    public Summary: string;
    public DateOfBirth: Date;
    public JoiningDate: Date;
    public DeskNo:string;
    public ExtNo:string;
    public About:string;
    public Photo:string;
    
    constructor(
        EmployeeId: number,
        Name: string,
        EMailId: string,
         Designation: string,
         SupervisorIntId: string,
         Team: string,
         Summary: string,
         DateOfBirth: Date,
         JoiningDate: Date,
         DeskNo:string,
         ExtNo:string,
         About:string,
         Photo:string
      ) {
        this.EmployeeId = EmployeeId;
        this.Name = Name;
        this.EMailId = EMailId;
        this.Designation= Designation;
        this.SupervisorIntId= SupervisorIntId;
        this.Team= Team;
        this.Summary= Summary;
        this.DateOfBirth= DateOfBirth;
        this.JoiningDate= JoiningDate;
        this.DeskNo= DeskNo;
        this.ExtNo= ExtNo;
        this.About= About;
        this.Photo= Photo;
      }


    //constructor(obj?: IPostDataModel) {
    //    if (obj != null) {
    //        Object.assign(this, obj);
    //    }
    //}
}