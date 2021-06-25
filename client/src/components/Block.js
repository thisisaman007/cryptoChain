import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Transaction from './Transaction';

class Block extends Component {
    state = { displaytransaction: false };

    toggleTransaction = () => {
        this.setState({ displaytransaction: !this.state.displaytransaction });
    }

    get displaytransaction() {
        const { data } = this.props.block;

        const stringifiedData = JSON.stringify(data);

        const dataDisplay = stringifiedData.length > 35 ?
            `${stringifiedData.substring(0, 35)}...` :
            stringifiedData;
        if (this.state.displaytransaction) {
            return (
                <div>
                    {
                        data.map(transaction => (
                            <div key={transaction.id}>
                                <hr />
                                <Transaction transaction={transaction} />
                            </div>
                        ))
                    }
                    <br />
                    <Button variant="danger" size="sm" onClick={this.toggleTransaction}>
                        show less
                    </Button>

                </div>
            );
        }

        return (
            <div>
                <div>Data: {dataDisplay}</div>
                <Button variant="danger" size="sm" onClick={this.toggleTransaction}>
                    show more
                </Button>
            </div>
        );
    }

    render() {
        console.log('this.displaytransaction: ', this.displaytransaction)


        const { timestamp, hash } = this.props.block;

        const hashDisplay = `${hash.substring(0, 15)}...`;


        return (
            <div className='Block'>
                <div>Hash: {hashDisplay}</div>
                <div>Timestamp: {new Date(timestamp).toLocaleString()}</div>
                {this.displaytransaction}
            </div>
        )
    }
}

export default Block;