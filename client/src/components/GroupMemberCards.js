import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Row from './Row';
import Col from './Col';



function GroupMemberCards() {
    return (
        <div className='cards_2'>
            <title>Welcome to the group page</title>
           <Row>
               <Col size="md-6">
               <div className='cards_container_1'>
                <div className='cards_wrapper_1'>
                    <div className="card movieCard m-4">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Group 1</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

               </Col>
               <Col size="md-6">
            <div className='cards_container_1'>
                <div className='cards_wrapper_1'>
                    <div className="card movieCard m-4">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Titanic</li>
                                <li className="list-group-item">Frozen</li>
                                <li className="list-group-item">Avengers</li>
                                <li className="list-group-item">Deadpool</li>
                                <li className="list-group-item">Grandma's boy</li>
                                <li className="list-group-item">The notebook</li>
                                <li className="list-group-item">Conjuring</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
               
               </Col>
           </Row>
        </div>
    );
}

export default GroupMemberCards;