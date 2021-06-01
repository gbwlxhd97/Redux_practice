import React, { useState } from "react";
import { connect } from "react-redux";
function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps); //ownProps는 home 컴포넌트의 props
}

export default connect(mapStateToProps)(Home);
