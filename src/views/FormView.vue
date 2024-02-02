<template>
  <b-container>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <hr>
    <h1>Formulario</h1>

    <b-form @submit="onSubmit">

      <b-form-group
          id="input-group-1"
          label="Marca*"
          label-for="input-1"
          description="Ingresa una marca, por ejemplo (Nissan, KIA, etc.)"
          class="my-3"
      >
        <b-form-input
            id="input-1"
            v-model="form.brand"
            type="text"
            placeholder="Ingresa dato"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Modelo*"
          label-for="input-1"
          description="Ingresa un modelo, por ejemplo (Tsuru, Jetta, etc.)"
          class="my-3"
      >
        <b-form-input
            id="input-1"
            v-model="form.model"
            type="text"
            placeholder="Ingresa dato"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Año*"
          label-for="input-1"
          description="Ingresa el año del auto, no puede ser mayor al actual"
          class="my-3"
      >
        <b-form-input
            id="input-1"
            v-model="form.year"
            type="number"
            placeholder="Ingresa dato"
        ></b-form-input>
      </b-form-group>

      <b-form-group
          id="input-group-1"
          label="Número de serie*"
          label-for="input-1"
          description="Ingresa el número de serie del auto formato -> XXXX000-00XX "
          class="my-3"
      >
        <b-form-input
            id="input-1"
            v-model="form.serie"
            type="text"
            placeholder="Ingresa dato"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Guardar</b-button>
      <b-button variant="success" class="mx-2" :to="{name:'pagination'}"> Ver registros</b-button>

    </b-form>

    <!--    Final   -->

  </b-container>

</template>

<script>

export default {
  name: "FormView",
  data() {
    return {
      items: [{text: 'Pagina principal', href: '/'}, {text: 'Formulario', active: true}],
      form: {
        brand: null,
        model: null,
        serie: null,
        year: null,
      }

    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      if (!this.validationForm()) return
    },
    async saveAuto(){
      try {

        const payload = {
          brand: this.form.brand,
          model: this.form.model,
          serie: this.form.serie,
          year: this.form.year
        }

        const resp = await fetch('http://localhost:8080/api/vehiculos', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",

          }
        })
        const data = await resp.json();
        if (data){
          alert('Se ha registrado el auto')
        }else{
          alert('Error al registrar el auto')
        }

      } catch (e) {
        console.error('NoooOOOoOOOOooO')
      }
    },
    validationForm(){


      if (!this.form.year || !this.form.serie || !this.form.model || !this.form.brand){
        alert('Todos los campos son requeridos')
        return
      }

/*      if (!/([A-Za-zñ0-9])\w+/g.test(this.form.model) || !/([A-Za-zñ0-9])\w+/g.test(this.form.brand)){
        alert('Solo se aceptan letras y numeros en el modelo o marca')
        return
      }


      if (!/([0-9]{4})\w+/g.test(this.form.year) ){
        alert('El año solo debe ser numeros del 0 al 9 ejemplo yyyy')
        return;
      }*/


      if (new Date(this.form.year) > new Date()){
        alert('El año no puede ser mayor al actual')
        return;
      }

      this.saveAuto();
    }

  }
}
</script>
