import React from 'react';

class TodoListItem extends React.Component {
    render() {
        return (
            <div className="individualListItem">
                <input type="checkbox" onChange={() => this.props.onSelect(this.props.index)}/>
                {this.props.item}
            </div>
        );
    }
}

export default TodoListItem;