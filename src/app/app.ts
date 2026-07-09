import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EpiList } from './epi-list/epi-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // protected readonly title = signal('Aula de Angular Turma 2026.1');
  titulo = "Sistema de controle de EPI's";
  subtitulo = "Gestão de Segurança do Trabalho";
  descricao = "Aplicação para controle, monitoramento e conformidade de Equipamentos de Proteção Individual (EPI's).";
}
