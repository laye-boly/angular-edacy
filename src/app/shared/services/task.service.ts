import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tasks } from 'src/app/data/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get('http://localhost/data.json');
  }

  getTask(id: number) {
    return tasks.find((task) => task.id == id);
  }
}
