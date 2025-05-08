import PropsCompenet from "../propsComp/props.js";
import Card from "../cards/card.js";
import React from 'react'
import anilimg from "../../image/anil.png"
import shamshadimg from "../../image/shamshad.jpg"
import afjalimg from "../../image/mujeeb.png"
import "./layout"
function Layout() {
  return (
    <>
      <PropsCompenet firstname="shamshad" secondname="anil" thirdname="soeb" fourt="mujeeb" fifth="afjal" />

      <div class="layout-card-div">
        <Card name="anil" img={anilimg} description=" i am anil. student of hitech mentor , where i learning code." />
        <Card name="shamshad" img={shamshadimg} description=" i am anil. student of hitech mentor , where i learning code." />
        <Card name="mujeeb" img={afjalimg} description=" i am afjal. student of hitech mentor , where i learning code." />

      </div>

    </>
  )
}

export default Layout;
