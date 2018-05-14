import { User } from "./user";
import { Comment } from "./comment";
import { Point } from "@agm/core/services/google-maps-types";
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
    public _points: Point[]=[];
     
    setImageName(name:string){
        this.imageName=name;
    }
  
    setPoints(points: any){
        this._points=points;
    }
}