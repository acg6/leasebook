import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/services/books/book.service';

@Component({
  selector: 'app-publicar-libro',
  templateUrl: './publicar-libro.component.html',
  styleUrls: ['./publicar-libro.component.css'],
  providers: [ BookService ]
})
export class PublicarLibroComponent implements OnInit {


  TOKEN: String;

  constructor(private service: BookService) {
   }

  ngOnInit() {
    this.TOKEN = JSON.parse(localStorage.get('USER_TOKEN'))
  }
 
  public register(form: NgForm):void {
    
    form.value.token = this.TOKEN;
    if (this.fieldsVal(form)) {
        this.service.register(form.value).subscribe(
          res => {
            form.reset();
            console.log(res);
          }
        );
    } else {
      form.reset();
    }
  }
  private fieldsVal(form: NgForm): boolean{
    var res= false;
    if (form.value.name !== '' && form.value.description !== '' && form.value.synopsis !== '' &&
      form.value.publication_date !== '' && form.value.editorial !== '' && form.value.add_photo !== '' 
      && form.value.autor !== ''
      && form.value.genre !== '') res = true;
    return res;
  }

}
