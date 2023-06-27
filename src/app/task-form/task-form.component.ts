import { Component, EventEmitter, Output } from '@angular/core';
import { Taskrequest } from '../model/taskrequest';
import { TaskserviceService } from '../service/taskservice.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(private service:TaskserviceService){}

  public taskInputs: { value: string }[] = [];

  public addTaskInput(): void {
    this.taskInputs.push({ value: '' });
  }

  public removeTaskInput(index: number): void {
    this.taskInputs.splice(index, 1);
  }
task:Taskrequest=new Taskrequest();
  // public submitTasks(): void {
  //   const tasks = this.taskInputs.map(taskInput => taskInput.value);
  //   this.service.events=tasks;
  //   this.taskInputs = [];
  //   this.task.username=this.service.username;
  //   this.task.tasks=this.service.events;
  //   console.log(this.task.tasks);
  //   console.log(this.task.username);
  //   console.log(this.task);
  //   this.addT(this.task);
  // }
  // addT(task:Taskrequest){

  //   this.service.addTasks(task).subscribe(
  //     (task)=>{
  //       console.log(task);
  //     },
  //     (error)=>{
  //       console.log("there is an error",error);
  //     })

  // }
  public submitTasks(): void {
    const tasks = this.taskInputs.map(taskInput => taskInput.value);
    
    // Set the tasks and username in the task object
    this.task.username = this.service.username;
    this.task.tasks = tasks;
    
    console.log(this.task.tasks);
    console.log(this.task.username);
    console.log(this.task);
    
    // Call the addTasks method of the service to submit the tasks
    this.addT(this.task);
  }
  
  // Method to add tasks using the service
  addT(task: Taskrequest): void {
    this.service.addTasks(task).subscribe(
      (response) => {
        console.log(response);
        // Handle the success response here
      },
      (error) => {
        console.log("An error occurred:", error);
        // Handle the error here
      }
    );
  }

  selectedButton: number = 0;

  selectButton(buttonNumber: number): void 
  {
    this.selectedButton = buttonNumber;
  }
  
}


