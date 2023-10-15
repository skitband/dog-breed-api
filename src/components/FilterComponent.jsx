const FilterComponent = ({ setOrderValue, handleSelectChange }) => {
  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSelectChange}
        value={setOrderValue}
      >
        <option disabled value="">
          Select Order By
        </option>
        <option value="name">Order By: Name</option>
        <option value="height">Order By: Height</option>
        <option value="life_span">Order By: Life Span</option>
      </select>
    </>
  );
};

export default FilterComponent;
