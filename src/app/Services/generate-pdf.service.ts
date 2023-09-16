import { Injectable, OnInit } from '@angular/core';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class GeneratePDFService implements OnInit {
  doc:any;
  constructor() { }
  ngOnInit(): void {
    this.doc=new jsPDF();
  }
  infoDOc(docName:string,username:string,emailUser:string,urlSite:string):void{
    // Add a title (LaTeX-like document name)
    this.doc.setFontSize(16); // Set font size
    this.doc.text(docName, 10, 10); // Replace 'Document Title' with your desired title

    // Add user data
    const userData = {
      userName: username, // Replace with the user's name
      userEmail: emailUser, // Replace with the user's email
      urlSite: urlSite, // Replace with the user's address
    };

    this.doc.setFontSize(12); // Set font size for user data
    let yPosition = 30; // Adjust the vertical position as needed

    // Loop through user data and add it to the PDF
    for (const [key, value] of Object.entries(userData)) {
      if(value){
        if(key=="urlSite"){
          this.doc.text(`generated by : ${value}`, 10, yPosition);
          yPosition += 10; // Increase the vertical position for the next line
        }else{
          this.doc.text(`${value}`, 10, yPosition);
          yPosition += 10; // Increase the vertical position for the next line
        } 
      }
    }

    this.doc.save('sample.pdf');
  }
}