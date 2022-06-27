import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { tasks } from 'src/app/data/tasks';

const API_URL = '/data.json';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient, private db: AngularFirestore) {}
  getTasks() {
    // return this.http.get(API_URL);
    return this.db.collection('todos').snapshotChanges();
  }

  getTask(id: number) {
    // return tasks.find((task) => task.id == id);
  }
  addTask(task: any) {
    task.createAt = new Date();
    this.db.collection('todos').add(task);
  }
}
