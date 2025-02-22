import { crearUsuario } from "../js/HookUsuarios.js";

class FormularioAgregarUsuario extends HTMLElement
{
  constructor()
  {
    super();

    this.form = '';
  }

  connectedCallback()
  {
    this.render();

    this.form = document.getElementById("form-agregar-usuario");

    document.getElementById("btn-agregar-usuario").addEventListener("click", (e) => crearUsuario(e, this.form));
  }

  render()
  {
    this.innerHTML = `
      <!-- Ventana Modal Formulario Agregar Usuario -->
      <form id="form-agregar-usuario">
        <div class="modal fade" id="add-user" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="modal-add-user">Agregar Usuario</h5>
              </div>
              <div class="modal-body">
                <!-- Form -->
                <div class="mb-3">
                  <input type="text" class="form-control" id="name-form-add" placeholder="Nombre(s)">
                </div>
                <div class="mb-3">
                  <input type="text" class="form-control" id="lastname-form-add" placeholder="Apellido(s)">
                </div>
                <div class="mb-3">
                  <input type="email" class="form-control" id="email-form-add" placeholder="Correo Institucional">
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="password-form-add" placeholder="Contraseña">
                </div>
                <div class="mb-3">
                  <input type="password" class="form-control" id="confirm-pass-form-add" placeholder="Confirmar Contraseña">
                </div>

                <!-- Check Form -->
                <h6>Roles</h6>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="admin-check-add">
                  <label class="form-check-label" for="admin-check">Administrador</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="mod-check-add">
                  <label class="form-check-label" for="mod-check">Moderador</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="tech-check-add">
                  <label class="form-check-label" for="tech-check">Asesor Técnico</label>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" id="btn-agregar-usuario" class="btn btn-agregar" data-bs-dismiss="modal">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    `;
  }
}

customElements.define("cc-formulario-agregar-usuario", FormularioAgregarUsuario);