import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
/*
Se importa el método createApp y para crear la aplicación se ejecuta el método createApp(App). 
Se importa el código principal de la aplicación, localizado en el archivo App.vue.
Para incluirla o montarla y que se renderice en un elemento HTML de la página, 
que en este caso es el div #app, se usa el método mount('#app')

En el archivo App.vue se importan los componentes reutilizables que conforman la aplicación: HelloWord.vue y TablaPersonas.vue, etc

  Los archivos Vue se dividen en tres secciones: 

  1- la sección template,  el código HTML de la aplicación. (en realidad, código vue) 
  2 - la sección script,  el código JavaScript. 
  3 - la sección style, el código CSS
  
  Las 3 secciones se incluyen en un mismo módulo, para que sea reutilizable en sí mismo, sin necesidad de componer varios archivos
  
  Se incluye la sentencia export default en la sección script para que se pueda importar en otros módulos 

  -------------------------------------------------------------------------- LA SECCION TEMPLATE
  
  AGREGAR UN EVENT LISTENER A UN FORMULARIO

  <form @submit.prevent="nombreFuncion">
  
  onSubmit se ejecuta al hacer clic en el botón de envío. 
  Para ello usaremos al atributo @submit, que es la forma corta del atributo v-on:submit, siendo ambos equivalentes.
  Para evitar que se refresque la página al enviar el formulario el evento @submit cuenta con el modificador prevent, 
  que es equivalente a ejecutar el método event.preventDefault() en el interior de la función asociada al evento submit.

  La función que escucha el evento (nombreFuncion) se incluye en la sección script del módulo, en el objeto "methods".
  Esta función de escucha contiene el método $emit 
  que envía el nombre del evento que definamos y los datos que deseemos al componente en el que se ha renderizado el componente actual.
  
  Envía el evento add-persona y el objeto this.persona a App.vue
    
  enviarFormulario() {
    this.$emit('add-persona', this.persona);
  },    

  VALORES DE LOS CAMPOS DEL FORMULARIO

  el atributo v-model vincula el valor de los campos con sus respectivas variables de estado, definidas en el data 

  <label>Nombre</label>
  <input v-model="persona.nombre" type="text" />

  CONTENIDO DE UNA TABLA POR ITERACION

  el atributo v-for permite recorrer los datos de una propiedad, por ej. la propiedad personas (un array)

  <tbody>
    <tr v-for="persona in personas" :key="persona.id">
      <td>{{ persona.nombre}}</td>
      <td>{{ persona.apellido }}</td>
      <td>{{ persona.email}}</td>
    </tr>
  </tbody>

  -------------------------------------------------------------------------- LA SECCION SCRIPT

  <script>

  MODULOS IMPORTADOS. SE PUEDE USAR EL CARÁCTER @ PARA REFERENCIAR AL DIRECTORIO src
  LOS NOMBRES DE ARCHIVOS SE ESCRIBEN EN FORMATO PascalCase
  import ArchivoImportado1 from './components/ArchivoImportado1.vue'  
  import ArchivoImportado2 from '@/components/ArchivoImportado2.vue'  
  import ArchivoImportadoN from '@/components/ArchivoImportadoN.vue' 

  export default {

    NOMBRE CON QUE SE MENCIONARÁ ESTE MÓDULO EN OTROS EN LOS QUE SE IMPORTE
    EL NOMBRE DEL MODULO SE ESCRIBE EN FORMATO kebab-case

    name: 'nombre-del-modulo', 

    EL OBJETO components REFERENCIA LOS MODULOS IMPORTADOS

    components: {
        ArchivoImportado1, 
        ArchivoImportado2,
        ArchivoImportadoN
    },

    EL MÉTODO data EQUIVALE AL ESTADO DE LOS COMPONENETES EN React
    INICIALIZA LOS VALORES DE LOS ELEMENTOS DEL DOM MENCIONADOS EN LA SECCIÓN TEMPLATE
    ESTOS VALORES SE ACTUALIZAN EN EL CICLO DE VIDA DE ESTE DOM

    data() {  
        return {
            personas: [...],
            otro: 'lolo'
        }
    },

    EL OBJETO props CONTIENE LAS PROPIEDADES QUE VA A RECIBIR EL COMPONENTE
    EN PARES nombre:tipo

    props: {
        personas: Array,
        otro: String
    },

    LOS LOS NOMBRES DE LOS METODOS Y VARIABLES SE ESCRIBEN EN FORMATO camelCase

    methods: {

      FUNCIÓN QUE RESPONDE AL LISTENER -EN EL FORMULARIO- (<form @submit.prevent="enviarFormulario">)
      enviarFormulario() {
          this.$emit('add-persona', this.persona);
      },
      FUNCIÓN QUE RESPONDE AL LISTENER -EN EL CONTENEDOR DEL FORMULARIO- <formulario-persona @add-persona="agregarPersona" />)
      agregarPersona(persona) {
        this.personas = [...this.personas, persona];
      }
      

    },

    LAS PROPIEDADES COMPUTADAS SON FUNCIONES QUE SE EJECUTAN AUTOMÁTICAMENTE CUANDO SE MODIFICA EL ESTADO DE ALGUNA PROPIEDAD
    SE INCLUYEN DEBAJO DE LOS MÉTODOS

    computed: {

      nombreInvalido() {
        return this.persona.nombre.length < 1;
      }, // nombreInvalido

    }, // computed

    }
*/