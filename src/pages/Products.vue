<template>
  <div class="q-pa-md products">
    <h3 class="q-pl-lg q-pt-lg text-primary">Product Tiers</h3>
    <p class="q-pl-lg q-pr-lg">
      The Basic tier is suitable to small businesses and provides complete
      bookkeeping, invoicing, basic inventory and statutory reports. The
      Standard tier adds up additional features such as Online Reporting,
      Mullti-Currency Accounting, Sales/Purchase Quotations, Orders and Mobile
      App, etc. The Enterprise edition is primarily designed for large
      organizations with multiple branches and large volumes of data.
    </p>

    <!-- new products page -->
    <div class="q-pa-md" style="">
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-touch-hold:2000.mouse="touched()">
          <template v-slot:header>
            <q-item-section avatar class="q-ml-md q-pa-md">
              <q-avatar
                icon="bluetooth"
                color="primary"
                text-color="white"
                size="xl"
              />
            </q-item-section>

            <q-item-section class="q-ml-md">
              <div class="text-h6">Bluetooth technology</div>
            </q-item-section>
          </template>
          <div class="q-pa-md row justify-center bg-grey-4">
            <q-card
              v-for="(item, idx) in cards"
              :key="idx"
              class="q-pa-md q-ma-sm my-card bg-white rounded-borders"
            >
              <q-card-section>
                <div class="text-h6 text-bold text-primary">
                  {{ item.title }}
                </div>
                <div class="text-subtitle2 text-secondary">
                  {{ item.price }} / Monthly
                </div>
              </q-card-section>

              <q-card-section>
                <p v-for="(feature, idx) in item.features" :key="idx">
                  • {{ feature }}
                </p>
              </q-card-section>

              <q-separator dark />

              <q-card-actions class="q-pa-md">
                <q-btn push color="primary" label="Order Now!" />
              </q-card-actions>
            </q-card>
          </div>
          <q-toggle
            class="q-pa-md"
            v-model="showTable"
            label="Show Table of Feature"
            left-label
          />
          <q-table
            v-if="showTable"
            class="q-ma-xl"
            :rows="rows"
            :columns="columns"
            row-key="name"
            v-model:pagination.sync="pagination"
          >
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">
                  <h6>{{ props.row.name }}</h6>
                </q-td>
                <q-td key="basic" :props="props">
                  <q-badge v-if="props.row.basic == '✓'" color="green">
                    {{ props.row.basic }}
                  </q-badge>
                </q-td>
                <q-td key="standard" :props="props">
                  <q-badge v-if="props.row.standard == '✓'" color="green">
                    {{ props.row.standard }}
                  </q-badge>
                </q-td>
                <q-td key="enterprise" :props="props">
                  <q-badge v-if="props.row.enterprise == '✓'" color="green">
                    {{ props.row.enterprise }}
                  </q-badge>
                </q-td>
                <q-td key="developer" :props="props">
                  <q-badge v-if="props.row.developer == '✓'" color="green">
                    {{ props.row.developer }}
                  </q-badge>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </q-expansion-item>
      </q-list>
    </div>

    <!-- product tiers -->
    <!-- <div class="q-pa-lg cards row justify-between">
      <div class="q-pa-md card-container column justify-between items-start">
        <h3>Basic</h3>

        <div class="features">
          <p>Financial Accounting</p>
          <p>Multi-location Inventory</p>
          <p>Billing (Basic level)</p>
          <p>Configurable Document Printing</p>
          <p>GST Reports & Returns</p>
          <p>M/S Reports</p>
        </div>

        <q-btn color="primary">See more</q-btn>
      </div>
      <div class="q-pa-md card-container column justify-between items-start">
        <h3>Standard</h3>
        <div class="features">
          <p>Mobile App</p>
          <p>Mullti-Currency Accounting</p>
          <p>POS Billing</p>
          <p>Data Exchange</p>
          <p>Sales /Purchase Quotation & Orders</p>
        </div>
        <q-btn color="primary">See more</q-btn>
      </div>
      <div class="q-pa-md card-container column justify-between items-start">
        <h3>Enterprise</h3>
        <div class="features">
          <p>Multi-Branch Management</p>
          <p>Enquiry Management</p>
          <p>Web Based Reporting</p>
          <p>Purchase Indenting</p>
          <p>User Activity Log</p>
          <p>Payroll</p>
        </div>
        <q-btn color="primary">See more</q-btn>
      </div>
      <div class="q-pa-md card-container column justify-between items-start">
        <h3>Developer</h3>
        <div class="features">
          <p>Multi-Branch Management</p>
          <p>Enquiry Management</p>
          <p>Web Based Reporting</p>
          <p>Purchase Indenting</p>
          <p>User Activity Log</p>
          <p>Payroll</p>
        </div>

        <q-btn color="primary">See more</q-btn>
      </div>
    </div>
 -->
    <!-- Tables -->
    <!-- <q-table
      class="q-ma-xl"
      :rows="rows"
      :columns="columns"
      row-key="name"
      v-model:pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <h6>{{ props.row.name }}</h6>
          </q-td>
          <q-td key="basic" :props="props">
            <q-badge v-if="props.row.basic == '✓'" color="green">
              {{ props.row.basic }}
            </q-badge>
          </q-td>
          <q-td key="standard" :props="props">
            <q-badge v-if="props.row.standard == '✓'" color="green">
              {{ props.row.standard }}
            </q-badge>
          </q-td>
          <q-td key="enterprise" :props="props">
            <q-badge v-if="props.row.enterprise == '✓'" color="green">
              {{ props.row.enterprise }}
            </q-badge>
          </q-td>
          <q-td key="developer" :props="props">
            <q-badge v-if="props.row.developer == '✓'" color="green">
              {{ props.row.developer }}
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
 -->
    <!-- Orders -->

    <!--   <div class="q-pa-lg cards row justify-between orders">
      <div class="q-pa-md card-container column justify-between items-center">
        <h3 class="text-primary">Basic</h3>
        <h3 class="text-h4 text-secondary no-wrap text-bold">
          $3 <span class="text-subtitle2 text-black">/month</span>
        </h3>
        <div class="features">
          <p>Up to 5 users</p>
          <p>Basic support on GitHub</p>
          <p>Monthly updates</p>
          <p>Free cancellation</p>
        </div>

        <q-btn outline class="q-pa-sm q-mt-md order-btn" color="primary"
          >Order Now!</q-btn
        >
      </div>
      <div class="q-pa-md card-container column justify-between items-center">
        <h3>Standard</h3>
        <h3 class="text-h4 text-secondary no-wrap text-bold">
          $6 <span class="text-subtitle2 text-black">/month</span>
        </h3>
        <div class="features">
          <p>Up to 5 users</p>
          <p>Basic support on GitHub</p>
          <p>Monthly updates</p>
          <p>Free cancellation</p>
        </div>

        <q-btn outline class="q-pa-sm q-mt-md order-btn" color="primary"
          >Order Now!</q-btn
        >
      </div>
      <div class="q-pa-md card-container column justify-between items-center">
        <h3>Enterprise</h3>
        <h3 class="text-h4 text-secondary no-wrap text-bold">
          $9 <span class="text-subtitle2 text-black">/month</span>
        </h3>

        <div class="features">
          <p>Up to 5 users</p>
          <p>Basic support on GitHub</p>
          <p>Monthly updates</p>
          <p>Free cancellation</p>
        </div>

        <q-btn outline class="q-pa-sm q-mt-md order-btn" color="primary"
          >Order Now!</q-btn
        >
      </div>
      <div class="q-pa-md card-container column justify-between items-center">
        <h3>Developer</h3>
        <h3 class="text-h4 text-secondary no-wrap text-bold">
          $12 <span class="text-subtitle2 text-black">/month</span>
        </h3>

        <div class="features">
          <p>Up to 5 users</p>
          <p>Basic support on GitHub</p>
          <p>Monthly updates</p>
          <p>Free cancellation</p>
        </div>

        <q-btn outline class="q-pa-sm q-mt-md order-btn" color="primary"
          >Order Now!</q-btn
        >
      </div> 
    </div>-->
  </div>
</template>

<script>
const cards = [
  {
    title: "Basic",
    price: "$3",
    features: [
      "Up to 5 users",
      "Basic support on GitHub",
      "Monthly updates",
      "Free cancellation",
    ],
  },
  {
    title: "Standard",
    price: "$6",
    features: [
      "Up to 5 users",
      "Basic support on GitHub",
      "Monthly updates",
      "Free cancellation",
    ],
  },
  {
    title: "Enterprise",
    price: "$9",
    features: [
      "Up to 5 users",
      "Basic support on GitHub",
      "Monthly updates",
      "Free cancellation",
    ],
  },
  {
    title: "Developer",
    price: "$12",
    features: [
      "Up to 5 users",
      "Basic support on GitHub",
      "Monthly updates",
      "Free cancellation",
    ],
  },
];

const columns = [
  {
    name: "name",
    required: true,
    label: "Features & Functions",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "basic",
    align: "center",
    label: "Basic",
    field: "basic",
    sortable: true,
  },
  { name: "standard", label: "Standard", field: "standard", sortable: true },
  {
    name: "enterprise",
    label: "Enterprise",
    field: "enterprise",
    sortable: true,
  },
  { name: "developer", label: "Developer", field: "developer", sortable: true },
];

const rows = [
  {
    name: "Financial Accounting",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "Multi-location Inventory",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",

    developer: "✓",
  },
  {
    name: "Billing (Basic level)",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "Configurable Document Printing",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "GST Reports & Returns",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "M/S Reports",
    basic: "✓",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "Mobile App",
    basic: "",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "Mullti-Currency Accounting",
    basic: "",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "POS Billing",
    basic: "",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },
  {
    name: "Data Exchange",
    basic: "",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Sales /Purchase Quotation & Orders",
    basic: "",
    standard: "✓",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Multi-Branch Management",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Enquiry Management",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Web Based Reporting",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Purchase Indenting",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "User Activity Log",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },

  {
    name: "Payroll",
    basic: "",
    standard: "",
    enterprise: "✓",
    developer: "✓",
  },
];

export default {
  name: "products-page",
  data() {
    return {
      columns,
      rows,
      cards,
      pagination: {
        rowsPerPage: 30,
      },
      showTable: false,
    };
  },
  methods: {
    touched() {
      console.log("touched");
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.2rem;
}
.products {
  .h3 {
    font-size: 1rem;
  }
  //max-width: 1500px;
}
p {
  font-size: 0.8rem;
}
.card-container {
  padding: 1rem;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
}
.cards h3 {
  color: $primary;
}
.orders {
  .features {
    text-align: center;
  }
  h3 {
    text-align: center;
    width: 100%;
  }
}
</style>
