import React from 'react';
import axios from 'axios';
import { View, Text, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';

export interface Props {
    users?: any[];
}

interface State {
    users: any[];
}

export default class UserList extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            users: props.users || []
        }
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

