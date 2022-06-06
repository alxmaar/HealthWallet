<template>
 <v-row
    align="start"
    justify="space-around"
  >
    <v-col cols="12" lg="4">
        <v-card>
          <v-card-text class="text-center pa-7">
            <img
              src="https://randomuser.me/api/portraits/men/79.jpg"
              alt="user"
              width="150px"
              class="img-fluid rounded-circle shadow-sm"
            />
            <h4 class="mt-2 title blue-grey--text text--darken-2 font-weight-regular">Jorge Ibarra</h4>
            <h6 class="subtitle-2 font-weight-light">Doctor</h6>

            <v-btn class="text-capitalize mt-5 element-0" color="success">Edit Information</v-btn>

          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular"> General Information</h3>
            <h6 class="subtitle-2 font-weight-light">A description of the specialist doctor will be posted here.</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            
            <v-text-field
            value="First Name"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
              <v-text-field
            value="Last Name"
            label="Solo"
            solo
            readonly
           ></v-text-field>

            <v-text-field
            value="Email"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
            <v-text-field
            value="Age"
            label="Solo"
            solo
            readonly
           ></v-text-field>
          

            <v-text-field
            value="Sex"
            label="Solo"
            solo
            readonly
           ></v-text-field>

           <v-text-field
            value="Nationality"
            label="Solo"
            solo
            readonly
           ></v-text-field>

            
            <div class="mt-4">
               </div>
            

           

           
            
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Private Information</h3>
            <h6 class="subtitle-2 font-weight-light">General information about the patient to be treated.</h6>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
            
            <v-text-field
            value="Place where it operates"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
              <v-text-field
            value="Medical speciality"
            label="Solo"
            solo
            readonly
           ></v-text-field>

            <v-text-field
            value="Medical License"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
           

            
            <div class="mt-4">
               </div>
            
          </v-card-text>
        </v-card>
      </v-col>


  </v-row>

</template>

<script>
export default {
    
}
</script>

<style>

</style>