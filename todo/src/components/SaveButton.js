import React from 'react';
import { connect } from 'react-redux';

class SaveButton extends React.Component {
    state = {
        saved: false
    }

    save = () => {
        localStorage.setItem("todos", JSON.stringify(this.props.todos))
        this.setState(prevState => ({ saved: !prevState.saved}))
    }



    render() {
        return (
            <div>
                <button onClick={this.save}>Save Current Todos</button>
                {this.state.saved ? 'Saved' : ''}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(SaveButton);