import { Component, OnInit } from '@angular/core';
import { Resolve, ActivatedRoute, Router } from '@angular/router'; // impoter le ActivatedRoute
import { tasks } from 'src/app/data/tasks';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todoId: number;
  queryId: string;
  task: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {} // L'injecter dans le composer

  ngOnInit(): void {
    // recupération du parametre du route nommé id dans le fichier de routing
    const routeParams = this.route.snapshot.paramMap;
    this.todoId = Number(routeParams.get('id'));
    // this.task = this.taskService.getTasks().find((task) => task.id == this.todoId);
    const queryParams = this.route.snapshot.queryParamMap; // pour les parametre query
    this.queryId = queryParams.get('id');
  }

  gotoProfile() {
    this.router.navigate(['/profile']);
  }
}
