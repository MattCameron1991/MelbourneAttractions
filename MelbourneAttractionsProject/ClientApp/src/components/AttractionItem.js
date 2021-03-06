﻿import React, { Component } from "react";

export class AttractionItem extends Component {
    render() {
        const attraction = this.props.attraction;

        return (
            <div className="attractionItem">
                <div>
                    <b>Attraction:</b> {attraction.attraction}
                </div>
                <div>
                    <b>Website:</b> {attraction.website.length === 0 ? "No website" : <a href={attraction.website} target="_blank" rel="noopener noreferrer">Click</a>}
                </div>
                <div>
                    <b>Type:</b> {attraction.type}
                </div>
                <div>
                    <b>Cost:</b> {attraction.cost}
                </div>
            </div>
        );
    }
}