import { computed } from "vue";
import { useCustomerStore } from "@/store/customers";

interface CustomerHeaders {
  key: string;
  label: string;
}

export const customerHeaders: CustomerHeaders[] = [
  {
    key: "first_name",
    label: "first name",
  },
  {
    key: "last_name",
    label: "last name",
  },
  {
    key: "email",
    label: "email",
  },
  {
    key: "phone_number",
    label: "phone number",
  },
  {
    key: "state",
    label: "state",
  },
  {
    key: "status",
    label: "status",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

export const formattedCustomers = computed(() => {
  const customerStore = useCustomerStore();

  return customerStore.filteredCustomers.map((customer) => ({
    ...customer,
    status: customer.status ? "Active" : "Inactive",
  }));
});
