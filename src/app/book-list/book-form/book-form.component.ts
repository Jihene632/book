import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private booksService: BooksService,
    private router: Router) { }
    
ngOnInit() {
this.initForm();
}

initForm() {
this.bookForm = this.formBuilder.group({
title: ['', Validators.required],
author: ['', Validators.required]

});
}

onSaveBook() {

const newBook = this.bookForm.value;

this.booksService.createNewBook(newBook);
this.router.navigate(['/books']);
}

}
