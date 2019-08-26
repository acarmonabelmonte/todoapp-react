import React, { Component } from 'react';

export default class TodoItemHead extends Component {
    render () {
        return (
            <thead>
                <tr style={{textAlign: "center"}}>
                    <th scope="col">#</th>
                    <th scope="col">Index</th>
                    <th scope="col">Todo</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
        )
    }
}