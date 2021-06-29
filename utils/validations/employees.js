
export const employees = {
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  factory: [
    "factory",
    {
      rules: [
        { required: true, message: "Bắt buộc!" }
      ]
    }
  ],
  market: [
    "market",
    {
      rules: [
        { required: true, message: "Bắt buộc!" }
      ]
    }
  ],
  id_card: [
    "id_card",
    {
      rules: [
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  birth_date: [
    "birth_date",
  ],
  phone: [
    "phone",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { pattern: /\d{9,12}/, message: "Không quá 9 đến 12 ký số"}
      ]
    }
  ],
  address: [
    "address",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  email: [
    "email",
    {
      rules: [
        { max: 1024, message: "Vượt quá số ký tự cho phép."},
        { type: 'email', message: "Hãy nhập đúng định dạng email." }
      ]
    }
  ],
  description: [
    "description",
    {
      rules: [
        { max: 1024, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ]
};