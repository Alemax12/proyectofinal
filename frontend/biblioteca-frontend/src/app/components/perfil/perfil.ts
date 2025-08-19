import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html'
})
export class PerfilComponent implements OnInit {
  usuario: any = null;
  errorMsg: string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getPerfil().subscribe({
      next: (data) => this.usuario = data,
      error: (err) => this.errorMsg = 'No se pudo cargar la información del perfil'
    });
  }
}
