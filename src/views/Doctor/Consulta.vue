<template>
  <v-container fluid class="down-top-padding">
    <v-row>
     
      <v-col cols="2" lg="4">



     <v-text-field
            value="Complete Name of the Patient"
            label="Solo"
            solo
            readonly
           ></v-text-field>

     <v-btn class="text-capitalize mt-5 element-0" color="success">Search</v-btn>

     <v-spacer></v-spacer>

     

    <v-btn class="text-capitalize mt-5 element-0" color="success">Add Diagnostic</v-btn>

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
  </v-container>
</template>


<script>
const gradients = [
  ["#6c757d"],
  ["#6c757d"],
  ["#6c757d", "#6c757d", "#6c757d"],
  ["#21c1d6", "21c1d6"],
  ["#21c1d6", "#21c1d6", "#21c1d6"],
  ["#21c1d6", "#21c1d6", "#21c1d6"]
];

const gradients2 = [
  ["#1e88e5"],
  ["#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"],
  ["#1e88e5", "#1e88e5", "#1e88e5"]
];

export default {
  name: "BasicDashboard",
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
        ],
    fill: true,
    gradient: gradients[4],
    gradients,
    padding: 8,
    radius: 50,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 0],
    width: 1,

    fill2: true,
    gradient2: gradients2[4],
    gradients2,
    radius2: 0,
    padding2: 0,
    value2: [1, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 4],
    width2: 4,
    tasks: [
      {
        done: false,
        text: "Check emails of Mr.Shah"
      },
      {
        done: false,
        text: "Give salary to employee"
      }
    ],
    task: null,
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        title: "Ali Connors",
        subtitle:
          "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        title: "me, Scrott, Jennifer",
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        title: "Sandra Adams",
        subtitle: "Do you have Paris recommendations? Have you ever been?"
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        title: "Trevor Hansen",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?"
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        title: "Britta Holt",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
      }
    ]
    

  }),
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    }
  }
};
</script>