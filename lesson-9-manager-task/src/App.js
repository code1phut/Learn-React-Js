import React, {Component} from "react";
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditings: null,
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }

    // generateData = () => {
    //     var tasks = [
    //         {
    //             id: this.generateID(),
    //             name: "Nguyen Van A",
    //             status: true,
    //         },
    //         {
    //             id: this.generateID(),
    //             name: "Nguyen Van B",
    //             status: true,
    //         },
    //         {
    //             id: this.generateID(),
    //             name: "Nguyen Van C",
    //             status: true,
    //         },
    //         {
    //             id: this.generateID(),
    //             name: "Nguyen Van D",
    //             status: true,
    //         }
    //     ];
    //     this.setState({
    //             tasks: tasks
    //     });
    //     localStorage.setItem('task', JSON.stringify(tasks));
    // };

    s4() {
        return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    onToggleForm = () => {
        if (this.state.isDisplayForm && this.state.taskEditings !== null) {
            this.setState({
                isDisplayForm : true,
                taskEditings: null,
            });
        }else {
            this.setState({
                isDisplayForm : !this.state.isDisplayForm,
                taskEditings: null,
            });
        }
    }

    onCloseForm = () => {
        this.setState({
            isDisplayForm: false
        })
    }

    onShowForm = () => {
        this.setState({
            isDisplayForm: true,
        })
    }

    onSubmit = (data) => {
        var { tasks } = this.state;
        if (data.id === '') {
            data.id = this.generateID();
            tasks.push(data);
        } else {
            var index = this.findIndex(data.id);

            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditings: null,
        });

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);

        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;

        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        });

        return result;
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        this.onShowForm();
    }

    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);

        var taskEditings = tasks[index];
        this.setState({
            taskEditings: taskEditings
        });
        this.onShowForm();
    }

    render() {
        var { tasks, isDisplayForm, taskEditings } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm
            onCloseForm={this.onCloseForm}
            onSubmit={this.onSubmit}
            task={taskEditings}
        /> : "";
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        { elmTaskForm }
                    </div>
                    <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={ this.onToggleForm }
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    className="btn btn-default ml-5"*/}
                        {/*    onClick={this.generateData}*/}
                        {/*>*/}
                        {/*    Generate Data*/}
                        {/*</button>*/}
                        <div className="row mt-15">
                            <TaskControl />
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
