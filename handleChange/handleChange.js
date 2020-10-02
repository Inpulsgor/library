  handleChange = ({ target }) => {
    const { name, value, type, checked } = target;

    // Если тип элемента checkbox, берем значение checked,
    // в противном случае value
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  };
