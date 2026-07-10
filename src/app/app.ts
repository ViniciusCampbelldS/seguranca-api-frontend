import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from "./epi/epi-detalhe/epi-detalhe";

@Component({
  selector: 'app-root',
  imports: [EpiList, EpiDetalhe],
  // old imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('Aula de Angular Turma 2026.1');
  titulo = "Sistema de controle de EPI's";
  subtitulo = "Gestão de Segurança do Trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade de Equipamentos de Proteção Individual (EPI's).";
}