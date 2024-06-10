import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import * as Papa from 'papaparse';
import { DataInterface, DataModel } from "../../model/list.model";

@Injectable({
    providedIn: 'root'
})
export class DataUtils {

    constructor(private http: HttpClient){}

    private transformDataCsv(csvData: string): DataInterface[] {
        const data: DataInterface[] = [];
        let linesinit = csvData.split('\n');
        let lines: string[] = [];        

        for (let line of linesinit) {
            if (line && line.trim()) {
                lines.push(line)
            }
        }

        console.log(lines)

        const contentTitles = new Set<string>();

        for (let i = 1; i < lines.length; i++) {
            const values = (lines[i]).split(',');
            let contentTitle = values[0];
            contentTitle = contentTitle.trim();

            if (!contentTitles.has(contentTitle)) {
                let listData: DataModel[] = [];

                for (let j = i; j < lines.length; j++) {
                    let innerValues = (lines[j]).split(',');
                    if (innerValues[0].trim() === contentTitle) {
                        listData.push({
                            Title: innerValues[1],
                            Url: innerValues[2],
                            IsVideo: innerValues[3]
                        });
                    } else {
                        i = j - 1;
                        break;
                    }
                }

                contentTitles.add(contentTitle);
                data.push({ ContentTitle: contentTitle, ListData: listData });
            }
        }


        // const rows = Papa.parse(csvData, {header: true}).data as any[];
        // const data: DataInterface[] = [];

        // console.log(csvData)

        // rows.forEach(row => {
        //     const {ContentTitle,title,url,flagvideo} = row;
        //     let dataInterface = data.find(d => d.ContentTitle === ContentTitle);

        //      console.log(row)

        //     if (!dataInterface) {
        //         dataInterface = {
        //             ContentTitle,
        //             ListData: []
        //         };
        //         data.push(dataInterface);
        //     }

        //     dataInterface.ListData.push({
        //         Title: title,
        //         Url: url,
        //         IsVideo: flagvideo.toUpperCase()
        //     });
        // })

        return data
    }

    fetchData(): Observable<DataInterface[]> {
        return this.http.get(
            'assets/data.txt', 
            { responseType: 'text'}).pipe(
                map(csvData => this.transformDataCsv(csvData))
        );
    }

}


