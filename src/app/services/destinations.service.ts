import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Destination } from "../models/destinations.model";

@Injectable() export class DestinationService {

    constructor(private http: HttpClient){}

    create(City:string,Country:string, Description:string, Review:number, Image:string, Categories:string[]){
        return this.http.post<Destination>(environment.API_URL + "/destinations",{
            city: City,
            country: Country,
            description: Description,
            review: Review,
            imageURL:Image,
            categories: Categories
        })
    }

    getAll(){
        return this.http.get<Destination[]>(environment.API_URL + "/destinations");
    }

    getByID(id:string){
        return this.http.get<Destination[]>(environment.API_URL + "/destination/?id=" + id);
    }

    remove(id:string){
        return this.http.delete<Destination>(environment.API_URL + "/destination/?id=" + id)
    }

    update(id:string, City:string,Country:string, Description:string, Review:number){
        return this.http.put<Destination>(environment.API_URL + "/destination/?id="+ id, {
            city: City,
            country: Country,
            description: Description,
            review: Review
        })
    }
}
