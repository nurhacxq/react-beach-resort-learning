import React from 'react';
import {withRoomConsumer } from '../Context';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import Loading from './Loading';

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);


// function RoomsContainer(){
//     return(
//         <RoomConsumer>
//             {(value) => {
//                 const {loading, sortedRooms, rooms} = value

//                 if(loading){
//                     return <Loading />
//                 }

//                 return(
//                     <div>
//                         hello from room RoomContainer
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>
//     )
// };

// export default RoomsContainer;