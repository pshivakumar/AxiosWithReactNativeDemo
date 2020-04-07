import React from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity } from 'react-native';

export default class UserList extends React.Component {

    state = {
        users: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').then( response => {
            console.log(response)
            this.setState({users: response.data})

        });
    }

    render() {
        return (
            <View>
                {
                    this.state.users.map((user, index) => (
                        <TouchableOpacity
                        key = {user.id}>
                        <Text>
                           {user.name}
                        </Text>
                     </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

