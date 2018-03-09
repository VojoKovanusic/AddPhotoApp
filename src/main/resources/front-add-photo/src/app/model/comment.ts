import { Photo } from "./photo";

export class Comment {
    public commentId: number;
    public photo: Photo;
    public UserName: string;
    public content: string;
    public photoId: number;
}