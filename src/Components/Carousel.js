import React from 'react';
import mePic from '../assets/portfolio_picture.jpg';
import pathFind from '../assets/pathfinder.jpg';
import dataStruct from '../assets/CIcon.png';
import Card from '../Components/Card.js';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id: 0,
                    title: 'PathFinding Visualizer',
                    subTitle: 'Implemented A-Star Algorithm to find the shortest path using React.',
                    imgSrc: pathFind,
                    link: "http://Vidssk.github.io/Pathfind_Visualizer",
                    selected: false,
                },
                {
                    id: 1,
                    title: 'Santiago Hernandez',
                    subTitle: 'Linkedin Profile',
                    imgSrc: mePic,
                    link: "https://github.com/Vidssk",
                    selected: false,
                },
                {
                    id: 2,
                    title: 'Data Structure Projects',
                    subTitle: 'Built Doubly-linked-List and Hash List using C++.',
                    imgSrc: dataStruct,
                    link: "https://github.com/Vidssk/Data_Structures",
                    selected: false,
                },
            ]
        }
    }

    handleCardClick =(id, card) => {
        console.log(id);
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return (
           <Container fluid={true}>
               <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
               </Row>
           </Container>
        )
    }

}

export default Carousel;