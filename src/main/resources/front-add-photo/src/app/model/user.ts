import { Photo } from "./photo";

export class User{
    public userId:number;
    public firistName:string;
    public lastName:string;
    public userName:string;
    public password:string;
    public created:Date;
    public photoList :Photo[];
    public likedPhotoList :Photo[];
    constructor() { }
}