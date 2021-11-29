import { LivroService } from './livro.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Livro } from './../models/Livro';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { template } from '@angular-devkit/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  public modalRef: BsModalRef;
  public livroForm: FormGroup;
  public titulo = 'Livros';
  public livroSelecionado: Livro;

  public livros: Livro[];

  voltar() {
    this.livroSelecionado = null;
  }

  constructor(private fb: FormBuilder,
              private modalService: BsModalService,
              private livroService: LivroService) {
                this.criarForm();
              }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.carregarLivros();
  }

  criarForm() {
    this.livroForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      autor:['', Validators.required],
    });
  }

  salvarLivro(livro: Livro) {
    this.livroService.put(livro.id, livro).subscribe(
      (retorno: Livro) => {
        console.log(retorno);
        this.carregarLivros()
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  livroSubmit() {
    this.salvarLivro(this.livroForm.value);
  }

  livroSelect(livro: Livro) {
    this.livroSelecionado = livro;
    this.livroForm.patchValue(livro);
  }

  carregarLivros() {
    this.livroService.getAll().subscribe(
      (livros: Livro[]) => {this.livros = livros}, (erro: any) => {console.log(erro)}
    )
  }

}
