import React from 'react';

import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

export default class SelectableList extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
        this.setState({
            selectedIndex: this.props.defaultValue,
        });
    }

    handleRequestChange = (event, index) => {
        this.setState({
            selectedIndex: index,
        });
    };

    render() {
        const SList = makeSelectable(List);
        return (
            <SList value={this.state.selectedIndex} onChange={this.handleRequestChange} >
                {this.props.children}
            </SList>
        );
    }

}



