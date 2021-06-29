
export const warehouses = {
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  code: [
    "code",
    {
      rules: [
        { required: true, message: "Bắt buộc chọn!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  product: [
    "product",
    {
      rules: [
        { required: true, message: "Bắt buộc chọn!" }
      ]
    }
  ],
  no: [
    "no",
    {
      rules: [
        { required: true, message: "Bắt buộc chọn!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  factory: [
    "factory",
    {
      rules: [
        { required: true, message: "Bắt buộc chọn!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
};

export const warehousesImport = {
  title: [
    "title",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  code: [
    "code",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  for_who: [
    "for_who",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  type: [
    "type",
    {
      rules: [
        { required: false, message: "Bắt buộc chọn!" }
      ]
    }
  ],
  created_at: [
    "created_at",
    {
      rules: [
        { required: false, }
      ]
    }
  ],
  warehouse_import_code: [
    "warehouse_import_code",
    {
      rules: [
        { required: false, }
      ]
    }
  ],
  warehouse_export_code: [
    "warehouse_export_code",
    {
      rules: [
        { required: false, }
      ]
    }
  ],
  
  type_import: [
    "type_import",
    {
      rules: [
        { required: true, message: "Bắt buộc chọn!" }
      ]
    }
  ],
  buy_id: [
    "buy_id",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  shift: [
    "shift",
    {
      rules: [
        // { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  warehouseFrom: [
    "warehouseFrom",
    {
      rules: [
        { required: false, message: "Bắt buộc chọn!" }
      ]
    }
  ],
  warehouseTo: [
    "warehouseTo",
    {
      rules: [
        { required: false, message: "Bắt buộc chọn!" }
      ]
    }
  ],
};

export const warehouseReport = {
  products: [
    "products",
    {
      rules: [
        
      ]
    }
  ],
  warehouse: [
    "warehouse",
    {
      rules: [
        
      ]
    }
  ],
};

export const productAdd = {
  product: [
    "product",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
      ]
    }
  ],

}