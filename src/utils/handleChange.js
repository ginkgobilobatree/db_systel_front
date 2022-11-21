export const handleChange = (e, input, setInput) => {
  const value = e.target.value;
  setInput({
    ...input,
    [e.target.name]: value.toUpperCase(),
  });
};
