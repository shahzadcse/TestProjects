import React from 'react';
import ShipmentList from './ShipmentList';

class ShipmentDetails extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            shipments: [],
            currentShipment: null,
            isEmptyShipment: true,
        };
    }
    componentDidMount() {
        this.loadShipmentData();
    }
    loadShipmentData() {
        const id = this.props.match.params.id ? this.props.match.params.id : null;
        if (id) {
            fetch(`${API_URL}/shipments/${id}`)
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    this.setState({

                        isLoaded: true,
                        currentShipment: result,
                        isEmptyState: false,
                        onShipmentClick: true

                    });
                    // this.props.history.push(`/shipments/${id}`);
                },
                // Handle error 
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                },
            );
        }
    }

    render() {
        const { error, isLoaded, currentShipment } = this.state;
        return (
            <div>
                {this.state.currentShipment && currentShipment.name}
                {error && 'NO result found'}
            </div>
        )
    };

}




export default ShipmentDetails;
