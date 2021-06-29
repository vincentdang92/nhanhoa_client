
export const purchaseOrder = {
    name: [
      "name",
      {
        rules: [
          { required: true, message: "Bắt buộc!" },
          { max: 180, message: "Vượt quá số ký tự cho phép."}
        ]
      }
    ],
    supplier: [
      "supplier",
      {
        rules: [
          { required: true, message: "Bắt buộc chọn!" },
        ]
      }
    ],
    note: [
      "note",
      {
        rules: [
          { required: false}
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