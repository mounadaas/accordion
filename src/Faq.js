import "./Faq.css";

const Faq = ({ item, curopen, setCuropen }) => {
  const isopen = item.id === curopen;
  function toggle() {
    setCuropen(isopen ? null : item.id);
  }
  return (
    <div className={`faq ${isopen ? "open" : ""}`}>
      <div className="quuestion">
        <div className="head">
          <p>{item.id < 9 ? `0${item.id}` : item.id}</p>
          <span style={isopen ? { color: "red", fontSize: "bold" } : {}}>
            {item.qestion}
          </span>
        </div>
        <button onClick={toggle}>{isopen ? "-" : "+"}</button>
      </div>
      <div>{isopen && item.response}</div>
    </div>
  );
};

export default Faq;
