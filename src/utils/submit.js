export const submit = async (e, input, setInput, setResult) => {
  const invalidInput = {
    from: "invalid input",
    to: "invalid input",
    distance: "invalid input",
    unit: "invalid input",
  };

  e.preventDefault();

  const req = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  try {
    const response = await fetch(
      `/api/v1/distance/${input.station1}/${input.station2}`,
      req
    );
    const result = await response.json();
    if (input.station1 === "" || input.station2 === "") {
      alert("please, fill out both input fields.");
      console.log(invalidInput); // result ist not working => it would give the respond for the wrong endpoint
      setResult(invalidInput);
      setInput({ station1: "", station2: "" });
    } else {
      console.log(result);
      setResult(result);
      setInput({ station1: "", station2: "" });
    }
  } catch (error) {
    throw error;
  }
};
