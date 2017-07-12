import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  emails = [
    {email: 'Bill@gates.com', important: true, subject: 'Job Offer', content: 'Want to pay million/year'},
    {email: 'Info@codingdojo.com', important: true, subject: 'Class schedule', content: 'no class today'},
    {email: 'John@Carmac.com', important: false, subject: 'Update Algo', content: 'New alogorithm for shadow volumes'},
    {email: 'Gabe@Newel.com', important: false, subject: 'HL3', content: 'Just Kidding'}
  ]
};

