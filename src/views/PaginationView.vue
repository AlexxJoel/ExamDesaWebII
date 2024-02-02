<template>
  <b-container>
    <b-breadcrumb :items="itemsBread"></b-breadcrumb>
    <hr>
    <h1>Paginación</h1>

    <div class="overflow-auto">


      <p class="mt-3">Página: {{ currentPage }}</p>

      <b-table
          label-sort-asc=""
          label-sort-desc=""
          id="my-table"
          :items="items"
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          small
          show-empty
      >

        <template #empty>
          <h4>{{ 'Sin registros' }}</h4>
        </template>

      </b-table>

      <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          aria-controls="my-table"
      ></b-pagination>

    </div>


    <!--    Final   -->
    <b-button variant="success" :to="{name:'home'}"> Ir a pagina principal</b-button>

  </b-container>

</template>

<script>
export default {
  name: "FormView",
  data() {
    return {
      itemsBread: [{text: 'Pagina principal', href: '/'}, {text: 'Formulario', href: '/form'}, {
        text: 'Registros',
        active: true
      }],

      fields: [
        {key: 'id', label: '#', sortable: true},
        {key: 'brand', label: 'Marca', sortable: true},
        {key: 'model', label: 'Modelo', sortable: true},
        {key: 'serie', label: 'Número de serie', sortable: true},
        {key: 'year', label: 'Año', sortable: true},
      ],
      totalRows: 0,
      perPage: 2,
      currentPage: 1,
      items: []

    }
  },
  methods: {
    async getAll() {
      try {

        const resp = await fetch('http://localhost:8080/api/vehiculos/page', {
          method: 'POST',
        })
        const data = await resp.json();
        console.log(data)

        this.items = data.content
        this.totalRows = data.totalElements

      } catch (e) {
        console.error('NoooOOOoOOOOooO')

      }
    }
  },
  mounted() {
    this.getAll()
  }
}
</script>
