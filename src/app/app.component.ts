import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'db';

  constructor(private dbs: AngularFirestore) { }

  createcollection() {
    const tutorialsRef = this.dbs.collection('studentsbd');
    const tutorial = { name: "Harish", package: "2000", location: "chennai" };
    tutorialsRef.add({ ...tutorial });
  }

  deletecollection() {
    const tutorialsRef = this.dbs.collection('tutorials');
    tutorialsRef.doc('id').delete();
  }
}
