
export class AchievementModel {

    public AchievementGuid: string;
    public AchievementIntId: number;
    public Title: string;
    public EmployeeName: string;
    public Comment: string;
    public Imagedata: string

    constructor(
        AchievementGuid: string,
        AchievementIntId: number,
        Title: string,
        EmployeeName: string,
        Comment: string,
        Imagedata: string
      ) {
        this.AchievementGuid = AchievementGuid;
        this.AchievementIntId = AchievementIntId;
        this.Title = Title;
        this.EmployeeName= EmployeeName;
        this.Comment= Comment;
        this.Imagedata= Imagedata;
      }


}