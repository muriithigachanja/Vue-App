<template>
  <div id="app">
  
    <v-container class="grey lighten-5" grid-list-lg>
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <v-row class="hidden-sm-and-down">
        <v-col
          cols="3"
          md="2"
        >
          <div
            class="pa-2"
            outlined
            tile
          >
            <v-responsive>
                        <v-img
                            src="https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                            height="150px"
                            width="150px"
                        >
                        </v-img>
                    </v-responsive>
          </div>
        </v-col>
         <v-col
          cols="3"
          md="2"
        >
          <div
            class="pa-2"
            outlined
            tile
          >
             <div >
                        <h2 class="headline mb-3"><b>Rebecca</b></h2>
                    </div>
                    <div>
                        <div>
                            <h4 class="mb-4">UI &UX Designer</h4>
                            <v-btn class="ma-0" outlined color="indigo">Tap to chat</v-btn>
                        </div>
                    </div>
          </div>
        </v-col>
         <v-col
          cols="3"
          md="2"
        >
          <div
            class="pa-2 "
            outlined
            tile
          >
             <div >
                        <h3 class="mb-3">Your Interviews</h3>
                    </div>
                    <div>
                        <h3 class=" mb-4">$10</h3>
                        <div>
                            Hourly Rate
                        </div>
                    </div>
          </div>
        </v-col>
        <v-col
          cols="3"
          md="2"
        >
          <div
            class="pa-2"
            outlined
            tile
          >
             <div >
                        <h3 class="headline mb-3">Upload Audio</h3>
                    </div>
                    <div>
                        <h3 class="headline mb-4">35hrs</h3>
                        <div>
                            Weekly Availability
                        </div>
                    </div>
          </div>
        </v-col>
      </v-row>
      
  
      <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->

      <v-row class="hidden-md-and-up">
        <v-col
          cols="6"
          md="4"
        >
          <div
            class="pa-2"
            outlined
            tile
          >
            <v-responsive>
                        <v-img
                            src="https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                            height="150px"
                            width="150px"
                        >
                        </v-img>
                    </v-responsive>
          </div>
        </v-col>
         <v-col
          cols="6"
          md="4"
        >
          <div
            class="pa-2"
            outlined
            tile
          >
             <div >
                        <h2 class="headline mb-3"><b>Rebecca</b></h2>
                    </div>
                    <div>
                        <div>
                            <h4 class="mb-4">UI &UX Designer</h4>
                            <v-btn class="ma-0" outlined color="indigo">Tap to chat</v-btn>
                        </div>
                    </div>
          </div>
        </v-col>
         
      </v-row>
      
    </v-container>
</div>
</template>

<script>
export default {
    name: 'AppHeader'
};
</script>

<style scoped>
</style>
