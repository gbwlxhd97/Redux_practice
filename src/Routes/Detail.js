import React from "react";
import { connect } from "react-redux";
//import { useParams } from "react-router";

function Detail({ toDo }) {
  // const id = useParams();  ussParams 대신에 ownProps를 사용하는 방법
  // console.log(id); //todo리스트를생성하면 각 리스트마다 디테일 id값을 주는데, 그 id값을 확인하기위한 코드
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h1>{toDo?.id}</h1>
    </>
  );
}

function mapsStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapsStateToProps)(Detail);
