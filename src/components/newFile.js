/* __placeholder__ */
export default (await import('vue')).defineComponent({
name: 'formulario-persona',

data() {
return {
persona: {
nombre: '',
persona: '',
apellido: '',
}, // persona


// variables de estado del formulario
procesando: false,
correcto: false,
error: false,
}; // return
}, // data

methods: {
enviarFormulario() {

this.procesando = true;
this.resetEstado();

// Comprobamos la presencia de errores
if (this.nombreInvalido || this.apellidoInvalido || this.emailInvalido) {
this.error = true;
return; // descontinúa la ejecución del método enviarFormulario
}

// El método $emit envía el nombre del evento y los datos al componente en el que se ha renderizado el componente actual.
this.$emit('add-persona', this.persona);

this.error = false;
this.correcto = true;
this.procesando = false;

// Restablecemos el valor de la variables
this.persona = {
nombre: '',
apellido: '',
email: '',
};

}, // enviarFormulario

resetEstado() {

this.correcto = false;
this.error = false;

} // resetEstado
}, // methods

computed: {
nombreInvalido() {
return this.persona.nombre.length < 1;
//return this.persona.nombre.length < 1;
}, // nombreInvalido

apellidoInvalido() {
return false;
//return this.persona.apellido.length < 1;
}, // apellidoInvalido

emailInvalido() {
return false;
//return this.persona.email.length < 1;
}, // emailInvalido
}, // computed
}); // export default

