import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule,RouterOutlet,ChildComponent]
})
export class AppComponent {
  // name = "Rupali"
  name = signal('angular16-app');
  obj = signal([{
    firstName: 'Rupali',
    lastName: 'Patil',
    age: 30
  }])
  fullName = computed(() => '${this.obj().firstName} + " " + ${this.obj().lastName}');
  changeName() {
    // this.name = "Abha";
    this.name.set(`${this.name()}-${Math.random()}`);
  }
  updateName() {
    this.name.update((n) => `${n}-${Math.random()}`);
  }
  updateObject() {
    this.obj.mutate((obj) => {
      obj[0].firstName = 'Abha';
    })
  }

}
