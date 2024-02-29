import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name = 'John Doe';
  bio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget lacus eget nunc tincidunt laoreet.';
  profileImage = 'profile.jpg';
  skills = ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'];
  experienceList = [
    {
      title: 'Software Engineer',
      company: 'ABC Company',
      duration: '2020 - Present'
    },
    {
      title: 'Web Developer',
      company: 'XYZ Company',
      duration: '2018 - 2020'
    }
  ];
  educationList = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of California, Berkeley',
      duration: '2014 - 2018'
    },
    {
      degree: 'Associate of Arts in Web Development',
      institution: 'Community College',
      duration: '2012 - 2014'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}