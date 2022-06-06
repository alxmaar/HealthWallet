<template>
  <v-container fluid class="down-top-padding">
    <v-row 
    align="start"
    justify="space-around">
      <v-col cols="2" lg="4">
    <v-text-field
              v-model="dtext"
              label="Token"
              filled
              background-color="Black"
            ></v-text-field>
    <v-btn class="text-capitalize mt-5 element-0" color="success">Search</v-btn>
    <v-spacer>
    </v-spacer> 
    <v-btn class="text-capitalize mt-5 element-0" color="success" href='#/Doctor/Tabla'>Consult medical records</v-btn>

      </v-col>
      
      <v-col cols="12" lg="4">
        <v-card>
          <v-card-text>
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">General Information</h3>
            <h6 class="subtitle-2 font-weight-light">General information about the patient to be treated.</h6>
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
            <h3 class="title blue-grey--text text--darken-2 font-weight-regular">Private data</h3>
            <h6 class="subtitle-2 font-weight-light">Private information about the patient's condition.</h6>
          </v-card-text>
          <v-divider></v-divider>
          
          <v-card-text>
            <v-text-field
            value="Blood type"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
              <v-text-field
            value="Height"
            label="Solo"
            solo
            readonly
           ></v-text-field>

            <v-text-field
            value="Weight"
            label="Solo"
            solo
            readonly
           ></v-text-field>
            
            <v-text-field
            value="Allergies"
            label="Solo"
            solo
            readonly
           ></v-text-field>
          

            <v-text-field
            value="Short-term"
            label="Solo"
            solo
            readonly
           ></v-text-field>

           <v-text-field
            value="Long-term"
            label="Solo"
            solo
            readonly
           ></v-text-field>

           <v-text-field
            value="Vaccination"
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
    
  </v-container>
</template>

<script>
export default {
  name: "Profile",

  data: () => ({
    dtext: "",
    emailtext: "",
    password: "",
    disableinput: "",
    checkbox1: "",
    checkbox2: "",
    checkbox3: "",
    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
   
  }),
  components: {}
};
</script>
