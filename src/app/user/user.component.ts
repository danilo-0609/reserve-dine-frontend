import { Component, OnInit } from '@angular/core';
import { Router, RouterConfigOptions } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  
  constructor(private router : Router ){}

  ngOnInit(): void {
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

  isEditingName = false;
  userName = 'Juan Pérez';

  editName() {
    this.isEditingName = true;
  }

  saveName(newName: string) {
    this.userName = newName;
    this.isEditingName = false;
  }

}
