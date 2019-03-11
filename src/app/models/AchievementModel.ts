
export class AchievementModel {

    public AchievementGuid: string;
    public Title: string;
    public EmployeeName: string;
    public Comment: string;
    public Imagedata: string

    constructor(
        AchievementGuid: string,
        Title: string,
        EmployeeName: string,
        Comment: string,
        Imagedata: string
      ) {
        this.AchievementGuid = AchievementGuid;
        this.Title = Title;
        this.EmployeeName= EmployeeName;
        this.Comment= Comment;
        this.Imagedata= Imagedata;
      }


}