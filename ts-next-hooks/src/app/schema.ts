import { Schema, SupportedTypesEnum } from "formoose";

const schema = (): Schema => ({
  name: {
    required: true,
    max: 7,
    min: 5,
    type: SupportedTypesEnum.String,
  },
  age: {
    required: true,
    max: 3,
    min: 2,
    type: SupportedTypesEnum.Number,
    validate: {
      validator: (value) => {
        return value <= 120;
      },
      message: '{{fieldValue}} years old, seriously?'
    }
  },
  gender: {
    type: SupportedTypesEnum.String,
    required: true,
  }
});

export default schema;
