import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input() title: string = "Whatever you want";
  @Input() content: string = "Some content goes here";
  isTechRelated: boolean = true;

  toggleIsTechRelated() {
    this.isTechRelated = !this.isTechRelated;
  }
}
