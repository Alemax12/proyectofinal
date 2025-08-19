import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibrosService, Libro } from '../../services/libros.service';

declare var bootstrap: any;

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css']
})
export class LibrosComponent implements OnInit {
  @ViewChild('libroModal', { static: true }) modalRef!: ElementRef;

  libros: Libro[] = [];
  libroForm: Partial<Libro> = {};
  editMode: boolean = false;
  modalInstance: any;

  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
    this.modalInstance = new bootstrap.Modal(this.modalRef.nativeElement);
  }

  cargarLibros() {
    this.librosService.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: (err) => console.error(err)
    });
  }

  prepararAgregar() {
    this.editMode = false;
    this.libroForm = {};
    this.modalInstance.show();
  }

  prepararEditar(libro: Libro) {
    this.editMode = true;
    this.libroForm = { ...libro };
    this.modalInstance.show();
  }

  guardar() {
    if (this.editMode && this.libroForm._id) {
      this.librosService.actualizarLibro(this.libroForm._id, this.libroForm).subscribe({
        next: (actualizado) => {
          const index = this.libros.findIndex(l => l._id === actualizado._id);
          if (index > -1) this.libros[index] = actualizado;
          this.modalInstance.hide();
        }
      });
    } else {
      this.librosService.crearLibro(this.libroForm as Libro).subscribe({
        next: (nuevo) => {
          this.libros.push(nuevo);
          this.modalInstance.hide();
        }
      });
    }
  }

  eliminarLibro(id: string) {
    this.librosService.eliminarLibro(id).subscribe({
      next: () => this.libros = this.libros.filter(l => l._id !== id)
    });
  }
}
