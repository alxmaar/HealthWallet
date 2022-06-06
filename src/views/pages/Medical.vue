<template>
<v-row widht=1000 >
<v-col cols="12" lg="10" style="margin-left:150px">
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
   <v-col cols="12" lg="8">
        <v-card>
          <v-card-text class="pa-5">
            <h3
              class="title blue-grey--text text--darken-2 font-weight-regular mb-4"
            >Diagnostic information</h3>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :items-per-page="5"
              class="elevation-1"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
   </v-row>   
   
</template>

<script>
export default {
 data: () => ({
     headers: [
          {
            text: 'Diagnostic date',
            align: 'start',
            sortable: false,
            value: 'Date',
          },
          { text: 'Doctors Diagnosing', value: 'Ddiagnoting' },
          { text: 'Diagnostic', value: 'Diagnostic' },
          { text: 'Treatment', value: 'Treatment' },
          { text: 'Comments', value: 'Comments' },
         
        ],
        desserts: [
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
            
          },
          {
            Date: 'null',
            Ddiagnoting:"null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic:"null",
            Treatment: "null",
            Comments: "null",
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
           
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
            
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
           
          },
          {
            Date: 'null',
            Ddiagnoting: "null",
            Diagnostic: "null",
            Treatment: "null",
            Comments: "null",
            
          },
        ]
 })
}
</script>

<style>

</style>