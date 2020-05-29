import React, { Component } from 'react'
import PhotoFrame from './PhotoFrame'
import Title from './Title'
import AddPhoto from './AddPhoto'
import { Route } from 'react-router-dom'

class Main extends Component {

    constructor() {

        super()
        this.state = {
            allPhotos:  [{
                id: 0,
                description: "beautiful sea",
                imageLink: "https://picsum.photos/800/600?image=14"
            }, {
                id: 1,
                description: "Coffee cup",
                imageLink: "https://picsum.photos/800/600?image=30"
            }, {
                id: 2,
                description: "Freedom",
                imageLink: "https://picsum.photos/800/600?image=50"
            }, {
                id: 3,
                description: "Farm",
                imageLink: "https://picsum.photos/800/600?image=85"
            }]
        }
        this.removePhotos = this.removePhotos.bind(this);
        this.addPhoto = this.addPhoto.bind(this);
       
    }

    componentDidMount() {

      /*  const data = SimulateDB();
        console.log(data);
        this.setState({
            allPhotos: data
        })*/
    }

    componentDidUpdate(prevState, preProps) {
        console.log(prevState.allPhotos)
        console.log(this.state)
    }

    addPhoto(photoadded) {
        this.setState((state) => ({
            allPhotos : state.allPhotos.concat([photoadded])
        }))
    }

   
    removePhotos(photoremoved) {

        this.setState((state) => ({
            allPhotos: state.allPhotos.filter((photo) => photo !== photoremoved)
        }))
    }

    render() {
        
        return (
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={"Photo App"} />
                        <PhotoFrame photoBlock={this.state.allPhotos} onRemovePhoto={this.removePhotos} />
                    </div>
                )} />
                 <Route exact path="/AddPhoto"  render={({history}) => (
                     <AddPhoto onAddPhoto={(addedPhoto) => 
                        {
                            this.addPhoto(addedPhoto)
                            history.push('/')
                        }
                    }/>
                 )} />
                
            </div>
        );
    }
}
/*
function SimulateDB() {
    return (
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
*/

export default Main