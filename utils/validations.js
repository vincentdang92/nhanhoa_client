export const users = {
    name: [
      "name",
      {
        rules: [
          { required: true, message: "Bắt buộc!" },
          { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
          { max: 60, message: "Vượt quá số ký tự cho phép."}
        ]
      }
    ],
    email: [
      "email",
      {
        rules: [
          { required: true, message: "Bắt buộc!" },
          { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
          { max: 60, message: "Vượt quá số ký tự cho phép." },
          { type: 'email', message: "Hãy nhập đúng định dạng email." }
        ]
      }
    ],
    password: [
      "password",
      {
        rules: [
          { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
          { min: 6, message: "Password phải có tối thiểu 6 ký tự."},
          { max: 60, message: "Vượt quá số ký tự cho phép." },
        ]
      }
    ],
    password_confirmation: [
      "password_confirmation",
      {
        rules: [
          { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
          { min: 6, message: "Password phải có tối thiểu 6 ký tự."},
          { max: 60, message: "Vượt quá số ký tự cho phép." },
        ]
      }
    ],
};

export const groups = {
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  role: [
    "role",
    {
      rules: []
    }
  ],
  key: [
    "key",
    {
      rules: [{ required: true, message: "Bắt buộc!" },]
    }
  ],
};

export const accounts = {
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 60, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  email: [
    "email",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 60, message: "Vượt quá số ký tự cho phép." },
        { type: 'email', message: "Hãy nhập đúng định dạng email." }
      ]
    }
  ],
  phone: [
    "phone",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.0-9]*$/, message: "Nhập sai định dạng số điện thoại"}
      ]
    }
  ],
  prefixPhone: [
    "prefix_phone"
  ],
  role: [
    "role",
    {
      rules: []
    }
  ],
};


export const containers = {
  name: [
    "name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  driver_name: [
    "driver_name",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ],
  license_plates: [
    "license_plates",
    {
      rules: [
        { required: true, message: "Bắt buộc!" },
        { whitespace: true, message: "Không được có ký tự trống ở đầu hoặc cuối input" },
        { max: 180, message: "Vượt quá số ký tự cho phép."}
      ]
    }
  ]
};