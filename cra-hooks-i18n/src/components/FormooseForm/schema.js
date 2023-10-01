const schema = () => ({
  name: {
    required: true,
    max: 7,
    min: 5,
    type: String,
  },
  age: {
    required: true,
    max: 3,
    min: 2,
    type: Number,
    validate: {
      validator: (value) => {
        return value <= 120;
      },
      message: '{{fieldValue}} years old, seriously?'
    }
  },
  gender: {
    required: true,
  }
});

export default schema;
