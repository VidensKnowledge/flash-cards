import React from 'react';
import logo from './logo.svg';
import './App.css';
import FlashCards from "./FlashCards";
import FlashCard from "./FlashCard";
import FlashCardForm from "./FlashCardForm";
import { Card, Container } from "semantic-ui-react";



class App extends React.Component {
  state = {
  flashCards: [
    {id:1, subject: "Food", notes: "Yummy" },
    {id:2, subject: "Cars", notes: "Fast" },
    {id:3, subject: "Outdoors", notes: "Neature" }
  ]};

  // addFlashCard = () => {
  //   console.log(flashCards);
  // }

  //removeFlashcard = (id) => { 
   // const { FlashCard } = this.state;
  //}


  toggleAnswer=()=>{
      //the description will go here, and be shown or hidden.  
  }

  render(){
    return (
      <Container>
        <h1>Flash Cards</h1>
        <FlashCardForm />
        <FlashCards />
        <FlashCard />
      </Container>
      
    )
  }
}
export default App;
