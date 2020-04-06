import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animals';

  animals = [{
    nom: "chien",
    img: "https://static.actu.fr/uploads/2019/04/chein-puppy-jonathan-kriz-flickr-854x678.jpg",
    desc: "Le chien est un canidé"
  },{
    nom: "chat",
    img: "https://assets.afcdn.com/story/20150511/661351_w980h638c1cx1858cy867.jpg",
    desc: "Le chat est un félin"
  },{
    nom: "cheval",
    img: "https://i.skyrock.net/0989/74540989/pics/2920279085_1_3.jpg",
    desc: "Le cheval est un équidé"
  }];


  animalSelected = this.animals[0];
  affiche(animal){
    this.animalSelected =  animal;
  }

}
