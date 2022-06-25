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
  taskStatus = 'all';
  tasks: any;

  statusSelected = null;

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
      },
      (error) => {
        console.log('error');
        console.log(
          'indication : vérifier si le serveur est démarré sinon se placer dans app/server et taper la commande python -m http.server'
        );
        console.log(error);
      }
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

  filterTask(status = 'all') {
    console.log('filter method works');
    this.taskService.getTasks().subscribe(
      (data) => {
        let tasks = [];
        if (status === 'all') {
          this.tasks = data;
        } else if (status === 'To Do') {
          console.log('to do');
          console.log(status);

          Object.entries(data).forEach((item) => {
            if (item[1].status === 'To Do') {
              tasks.push(item[1]);
            }
            this.tasks = tasks;
          });
        } else if (status === 'Done') {
          console.log('done');
          console.log(status);

          Object.entries(data).forEach((item) => {
            if (item[1].status === 'Done') {
              tasks.push(item[1]);
            }
            this.tasks = tasks;
          });
        } else {
          console.log('progess');
          console.log(status);

          Object.entries(data).forEach((item) => {
            if (item[1].status === 'In Progress') {
              tasks.push(item[1]);
            }
            this.tasks = tasks;
          });
        }
      },
      (error) => {
        console.log('error');
        console.log(
          'indication : vérifier si le serveur est démarré sinon se placer dans app/server et taper la commande python -m http.server'
        );
        console.log(error);
      }
    );

    // return this.taskService
    //   .getTasks()
    //   .filter((task) => this.statusSelected === task.status);
  }
}
