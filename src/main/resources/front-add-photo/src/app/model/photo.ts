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
    
    setImageName(name:string){
        this.imageName=name;
    }
}