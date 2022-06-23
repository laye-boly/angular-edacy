import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/app/data/tasks';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title = 'TODO';
  taskTitle = '';
  taskStatus = '';
  tasks: any;

  statusSelected = null;

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
        console.log('data');
        console.log(data);
      },
      (error) => console.log(error)
    );
  }

  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks.splice(taskIndex, 1);
  }

  addTask() {
    const lastIndex = tasks.length - 1;
    const id = tasks[lastIndex].id + 1;
    // this.taskService
    //   .getTasks()
    //   .push({ title: this.taskTitle, id, status: this.taskStatus });
    // this.taskTitle = '';
  }

  filterTask() {
    if (this.statusSelected === null) {
      return this.taskService.getTasks();
    }
    // return this.taskService
    //   .getTasks()
    //   .filter((task) => this.statusSelected === task.status);
  }
}
