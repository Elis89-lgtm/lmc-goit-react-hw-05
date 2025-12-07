import style from "./SearchForm.module.css";

export const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (topic.trim() === "") {
      alert("Please enter search term");
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <form className={style.SearchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={style.searchInput}
        name="topic"
        placeholder="Search articles"
      />
      <button className={style.searchButton}>Search</button>
    </form>
  );
};
