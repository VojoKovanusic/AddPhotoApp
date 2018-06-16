import { Photo } from "./photo";
import { Comment } from "./comment";
export class User{
    public userId:number;
    public firistName:string;
    public email:string;
    public userName:string;
    public test:number;
    public password:string;
    public created:Date;
    public photoList :Photo[];
    public likedPhotoList :Photo[];
    public commentList: Comment[];
    constructor() { }
    getUserName(){
        return this.userName;
    }
}