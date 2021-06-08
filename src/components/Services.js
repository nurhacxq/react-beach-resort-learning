import React, { Component } from 'react';
import Title from './Title';
import {FaHiking, FaCocktail, FaShuttleVan} from 'react-icons/fa';
import {IoBeer} from 'react-icons/io5';

class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <IoBeer/>,
                title: "Strongest Beer",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle",
                info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
            }
        ]
    };

    render(){
        return(
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map(((services, key) => {
                        return(
                            <article key={key} className="service">
                                <span>
                                    {services.icon}
                                </span>
                                <h6>
                                    {services.title}
                                </h6>
                                <p>
                                    {services.info}
                                </p>
                            </article>
                        )
                    }))}
                </div>
            </section>
        )
    }
}

export default Services;