import { Injectable } from '@nestjs/common'
import puppeteer from 'puppeteer'
import * as fs from 'fs'
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { resolve } from 'path';

@Injectable()
export class PdfService {
    constructor(@InjectQueue('testQueue') private audioQueue: Queue) { }

    // async testQueue(res) {
    //     await this.audioQueue.add('test1', {
    //         text: msg
    //     })
    // }

    async get(link: string) {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(link, { waitUntil: 'networkidle0' });
        // await page.goto('https://youtube.com', { waitUntil: 'networkidle0' });
        // await page.goto('https://facebook.com', { waitUntil: 'networkidle0' });
        const pdf = await page.pdf({ format: 'A4' });
        await browser.close();
        return pdf
    }

 

// @taofile()
    createPDF(url):Promise<Buffer> {
       return this.saveFile(url) as unknown as Promise<Buffer>;
    }


    saveFile(url){
       return new Promise((resolve,reject)=>{
            const fileName=`${url.replace(/\./g,'').replace('https://','')}.pdf`;            
            fs.readFile(fileName, (err, data) => {
                if (!err) {
                    console.log(data);
                    
                    resolve(data)
                } else {
                    this.get('https://'+url).then(pdf => {
                        fs.writeFile(fileName, pdf, () => { })
                        resolve(pdf)
                    })
                }
            });
        })
    }


}