import { Component } from '@angular/core';
import { SimpleService } from './services/simple.service';
import { ParamService } from './services/param.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private simpleService: SimpleService,
    private paramService: ParamService) { }

  invokeService(): void {
    console.log('SimpleService returned', this.simpleService.getValue());
    console.log('ParamService returned', this.paramService.getValue());
  }
}
