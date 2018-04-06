import { User } from "./user";
import { Comment } from "./comment";
export class Photo {
    
    public photoId: number;
    public photoName: string;
    public title: string;
    public description: string;
    public imageName: string;
    public user: User;
    public likedByUserList: User[];
    public likes: number;
    public commentList: Comment[];
    public created: Date;
    public longitude:number;
    public latitude:number;
    setImageName(name:string){
        this.imageName=name;
    }
}