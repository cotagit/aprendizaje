<template>
  <div id="app" class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <div class="row">
      <div class="col-md-12">
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- el evento add-persona definido en FormularioPersona devuelve la data del formulario y se asocia al método agregarPersona de este módulo -->
        <formulario-persona @add-persona="agregarPersona" />
        <!-- los datos se transfieren al componente tabla-personas bindeándolos como un atributo html -->
        <tabla-personas 
          v-bind:personas="personas" 
          @delete-persona="eliminarPersona" 
          @actualizar-persona="actualizarPersona"
        />
      </div>
    </div>
  </div>
</template>

<script>

  import HelloWorld from './components/HelloWorld.vue'
  import TablaPersonas from '@/components/TablaPersonas.vue'
  import FormularioPersona from '@/components/FormularioPersona.vue'

  export default {
    name: 'App',
    components: {
      TablaPersonas,
      FormularioPersona,
      HelloWorld
    },

    data() {
      return {

        personas: [
          {
            id: 1,
            nombre: 'Jon',
            apellido: 'Nieve',
            email: 'jon@email.com',
          },
          {
            id: 2,
            nombre: 'Tyrion',
            apellido: 'Lannister',
            email: 'tyrion@email.com',
          },
          {
            id: 3,
            nombre: 'Daenerys',
            apellido: 'Targaryen',
            email: 'daenerys@email.com',
          },
        ],

      }
    },

    methods: {

      agregarPersona(persona) {
        this.personas = [...this.personas, persona];
      }, // agregarPersona

      eliminarPersona(id) {
        this.personas = this.personas.filter(
          persona => persona.id !== id
        );
      }, // eliminarPersona

      actualizarPersona(id, personaActualizada) {
        this.personas = this.personas.map(persona =>
          persona.id === id ? personaActualizada : persona
        )
      } // actualizarPersona
      
    }, // methods

  } // export default

</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>
