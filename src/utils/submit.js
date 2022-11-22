export const submit = async (e, input, setInput, setResult) => {
  e.preventDefault();
  if (input.station1 === "" || input.station2 === "") {
    alert("please, fill out both input fields correctly.");
  }
  const req = {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const response = await fetch(
    `/api/v1/distance/${input.station1}/${input.station2}`,
    req
  );
  const result = await response.json();
  console.log(result);
  setResult(result);
  setInput({ station1: "", station2: "" });
};
