import { Component, OnInit } from '@angular/core';
import { education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  education: education[] = [];

  constructor(public educationService: EducationService) { }

  ngOnInit(): void {
    this.educationService.listEducation().subscribe(data => {this.education = data});
  }

}
