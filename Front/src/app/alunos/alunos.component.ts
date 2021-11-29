import { AlunoService } from './aluno.service';
import { Aluno } from './../models/Aluno';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  public alunos: Aluno[];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb:FormBuilder,
     private modalService: BsModalService,
     private alunoService: AlunoService) {
    this.criarForm();
  }

  ngOnInit() {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (erro: any) => {
        console.error(erro);
      }
    )
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome:['', Validators.required],
    });
  }

  salvarAluno(aluno: Aluno) {
    this.alunoService.put(aluno.id, aluno).subscribe(
      (retorno: Aluno) => {
        console.log(retorno);
        this.carregarAlunos()
      },
      (erro: any) => {
        console.log(erro);
      }
    );
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }


  alunoNovo() {
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);
  }

  voltar() {
    this.alunoSelecionado = null;
  }


}
