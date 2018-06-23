import React from 'react';
import fox from './The fox.jpeg';
import hound from './The hound.jpg';
import TodoListItem from './TodoListItem.js';

class Shepard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listitems: [],
            inputValue: ''
        }
    }
    render() {
        return (
            <div className="inputField">
                <form className="TodoList" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Add to-do list item here" 
                    value={this.state.inputValue} onChange={this.inputUpdate}/>
                    <button type="submit">Add</button>
                </form>
                <div className="todoItem">
                    {
                        this.state.listitems.map((item, index) => 
                        <TodoListItem 
                            item={item.text} 
                            onSelect={this.onSelect}
                            index={index}/>)
                    }
                </div>
                <button onClick={this.onDelete}>Delete</button>
            </div>
        );
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            listitems: this.state.listitems.concat({
                text: this.state.inputValue,
                selected: false
            }),
            inputValue: ''
        });
    }
    inputUpdate = (eventValue) => {
        this.setState({
            inputValue: eventValue.target.value
        });
    }
    onDelete = () => {
        this.setState({
            listitems: this.state.listitems.filter((item) => !item.selected)
        });
    }
    onSelect = (index) => {
        const items = this.state.listitems;
        items[index].selected = !items[index].selected;
        this.setState({
            listitems: items
        });
    }
}

export default Shepard;