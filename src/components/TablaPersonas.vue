<template>
    <div id="tabla-personas">
      <div v-if="!personas.length" class="alert alert-info" role="alert">
        No se han agregado personas
      </div>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <!--
            el atributo v-for permite recorrer los datos de una propiedad, que en nuestro caso es la propiedad personas
            -->
            <tr v-for="persona in personas" :key="persona.id">

              <td v-if="editando === persona.id">
                <input type="text" class="form-control" v-model="persona.nombre" />
              </td>
              <td v-else>
                {{ persona.nombre}}
              </td>

              <td v-if="editando === persona.id">
                <input type="text" class="form-control" v-model="persona.apellido" />
              </td>
              <td v-else>
                {{ persona.apellido}}
              </td>

              <td v-if="editando === persona.id">
                <input type="email" class="form-control" v-model="persona.email" />
              </td>
              <td v-else>
                {{ persona.email}}
              </td>

              <td v-if="editando === persona.id">
                <button class="btn btn-success" @click="guardarPersona(persona)">💾 Guardar</button>
                <button class="btn btn-secondary ml-2" @click="cancelarEdicion(persona)">❌ Cancelar</button>
              </td>
              <td v-else>
                <button class="btn btn-info" @click="editarPersona(persona)">✏️ Editar</button>
                <button class="btn btn-danger ml-2" @click="$emit('delete-persona', persona.id)">🗑️ Eliminar</button>
              </td>

            </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>

    export default {

      /* nombre para incluir este módulo en el template de otros módulos */
      name: 'tabla-personas',

      // variables de estado del módulo
      data() {
        return {
          editando: null,
        }
      }, // data

      /* propiedades recibidas por el componente */
      props: {
        personas: Array,
      }, // props


      methods: {

        editarPersona(persona) {
          this.personaEditada = Object.assign({}, persona);
          this.editando = persona.id;
        }, // editarPersona

        guardarPersona(persona) {
          if (!persona.nombre.length || !persona.apellido.length || !persona.email.length) {
            return;  
          }
          this.$emit('actualizar-persona', persona.id, persona);
          this.editando = null;
        }, // guardarPersona

        cancelarEdicion(persona) {
          Object.assign(persona, this.personaEditada);
          this.editando = null;
        } // canelarEdicion

      }, // methods

    } // export default

  </script>

  <style scoped></style>