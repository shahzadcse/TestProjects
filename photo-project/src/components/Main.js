import React, { Component } from 'react'
import PhotoFrame from './PhotoFrame'
import Title from './Title'
 

 
class Main extends Component {

    constructor(){
        console.log("constructor");
        super()
        this.state = {
            allPhotos : [] 
        }
        this.removePhotos = this.removePhotos.bind(this);
    } 
    
    componentDidMount() {
        console.log("componentDidMount");
    const data =  SimulateDB();
      console.log(data);
      this.setState({
          allPhotos : data
      })
    }

    removePhotos(photoremoved) {
        console.log(photoremoved.description);
        this.setState( (state) => ({
            allPhotos : state.allPhotos.filter((photo)=> photo !==photoremoved)
        } ) )
    }

    render() {
        console.log("render");
        return (
            <div>
                <Title title={"Photo App"} /> 
                <PhotoFrame photoBlock={this.state.allPhotos} onRemovePhoto={this.removePhotos} />
            </div>
        );
    }
}

function SimulateDB() {
    return(
        [{
        id: "0",
        description: "beautiful sea",
        imageLink: "https://picsum.photos/800/600?image=14"
        }, {
        id: "1",
        description: "Coffee cup",
        imageLink: "https://picsum.photos/800/600?image=30"
        }, {
        id: "2",
        description: "Freedom",
        imageLink: "https://picsum.photos/800/600?image=50"
        }, {
        id: "3",
        description: "Farm",
        imageLink: "https://picsum.photos/800/600?image=85"
        }]
    );
}

export default Main