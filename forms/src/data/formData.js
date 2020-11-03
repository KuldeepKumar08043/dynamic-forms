export const formData = [
  {
    id: "name",
    label: "Full Name",
    placeholder: "full name",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["name is required"],
      },
      {
        type: "min",
        params: [5, "name can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [15, "name can't be more than 10 characters"],
      },
    ],
  },
  {
    id: "email",
    label: "Email",
    placeholder: "email",
    type: "text",
    validationType: "string",
    value: "",
    validations: [
      {
        type: "required",
        params: ["email is required"],
      },
      {
        type: "min",
        params: [5, "email can't be less than 5 characters"],
      },
      {
        type: "max",
        params: [25, "email can't be more than 20 characters"],
      },
      {
        type: "email",
        params: ["please enter a valid email"],
      },
    ],
  },
  {
    id: "phone_number",
    label: "Phone Number",
    placeholder: "phone number",
    type: "text",
    validationType: "number",
    value: "",
    validations: [
      {
        type: "required",
        params: ["phone number is required"],
      },
    ],
  },
  {
    id: "city",
    label: "City Address",
    placeholder: "",
    type: "select",
    validationType: "string",
    value: "",
    options: ["Batam", "Jakarta", "Bandung"],
    validations: [
      {
        type: "required",
        params: ["city address is required"],
      },
    ],
  },
  {
    id: "gender",
    label: "Gender",
    placeholder: "",
    type: "radio",
    validationType: "string",
    value: "",
    options: ["Male", "Female"],
    validations: [
      {
        type: "required",
        params: ["gender is required"],
      },
    ],
  },
  {
    id: "hobbies",
    label: "Hobbies",
    placeholder: "",
    type: "checkbox",
    validationType: "string",
    value: "",
    options: ["Playing Cricket", "Movies", "Travelling"],
    validations: [
      {
        type: "required",
        params: ["hobbies is required"],
      },
    ],
  },
];
