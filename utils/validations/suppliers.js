
export const suppliers = {
  product: [
    "product",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
      ]
    }
  ],
  kind_of_supplier: [
    "kind_of_supplier",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
      ]
    }
  ],
  payment_term: [
    "payment_term",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
      ]
    }
  ],
  name_short: [
    "name_short",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  tax_code: [
    "tax_code",
    {
      rules: [
        { pattern: /^\d{10,13}$/, message: "có 10 đến 13 ký số"}
      ]
    }
  ],
  legal_name: [
    "legal_name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  manager_name: [
    "manager_name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  address_legal: [
    "address_legal",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 1024, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_account: [
    "bank_account",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_name: [
    "bank_name",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_sku: [
    "bank_sku",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_address: [
    "bank_address",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_swift_code: [
    "bank_swift_code",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  tag_one_type_id: [
    "tag_one_type_id",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  tag_two_type_id: [
    "tag_two_type_id",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  bank_swift_code: [
    "bank_swift_code",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  vat: [
    "vat",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  contact_name: [
    "contact_name",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  accountant_name: [
    "accountant_name",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  phone: [
    "phone",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  phone1: [
    "phone1",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  fax: [
    "fax",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  email: [
    "email",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  address_official: [
    "address_official",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  address_warehouse: [
    "address_warehouse",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  address_other: [
    "address_other",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  country: [
    "country",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  payment_type: [
    "payment_type",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  currency: [
    "currency",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  kind_of_tax: [
    "kind_of_tax",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  credit_norms: [
    "credit_norms",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  credit_status: [
    "credit_status",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  debt_method: [
    "debt_method",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  debt_days: [
    "debt_days",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  debt_description: [
    "debt_description",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  debt_status: [
    "debt_status",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  number_employees: [
    "number_employees",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  number_machines: [
    "number_machines",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  authorized_capital: [
    "authorized_capital",
    {
      rules: [
        { pattern: /\d{0,20}/, message: "Không quá 20 ký số"}
      ]
    }
  ],
  aff_description: [
    "aff_description",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  aff_note: [
    "aff_note",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
};