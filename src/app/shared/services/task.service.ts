import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tasks } from 'src/app/data/tasks';

const API_URL = '/data.json';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getTasks() {
    return this.http.get(API_URL);
  }

  getTask(id: number) {
    return tasks.find((task) => task.id == id);
  }
}
