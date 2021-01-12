import React, {Component} from "react";
import './App.css';
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import { findIndex, filter } from "lodash";
import demo from "./trainning/demo"
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tasks: [],
            isDisplayForm: false,
            taskEditings: null,
            filterDefault: {
                name: '',
                status: -1,
            },
            keyword: '',
            sortBy: 'name',
            sortValue: 1,
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
            var index = findIndex(data.id);

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
        // var index = this.findIndex(id);
        var index = findIndex(tasks, (task) => {
            return task.id === id;
        })
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    // findIndex = (id) => {
    //     var { tasks } = this.state;
    //     var result = -1;
    //
    //     tasks.forEach((task, index) => {
    //         if (task.id === id) {
    //             result = index;
    //         }
    //     });
    //
    //     return result;
    // }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = findIndex(id);
        console.log(index);
        
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    onUpdate = (id) => {
        var { tasks } = this.state;
        var index = findIndex(id);

        var taskEditings = tasks[index];
        this.setState({
            taskEditings: taskEditings
        });
        this.onShowForm();
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus);
        this.setState({
            filterDefault: {
                name: filterName,
                status: filterStatus,
            }
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }
    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue,
        });
    }


    render() {
        var {
            tasks,
            isDisplayForm,
            filterDefault,
            taskEditings,
            keyword,
            sortBy,
            sortValue
        } = this.state;

        if (filterDefault) {
            if (filterDefault.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filterDefault.name.toLowerCase()) !== -1;
                });
            }

            tasks = tasks.filter((task) => {
                if (filterDefault.status === -1) {
                    return task;
                } else {
                    return task.status === (filterDefault.status === 1 ? true : false);
                }
            })
        }

        if (keyword) {
            tasks = filter(tasks, (task) => {
                return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }

        var elmTaskForm = isDisplayForm ? <TaskForm
            onCloseForm={this.onCloseForm}
            onSubmit={this.onSubmit}
            task={taskEditings}
        /> : "";

        if (sortBy === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sortValue;
                else if (a.name < b.name) return -sortValue;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sortValue;
                else if (a.status < b.status) return sortValue;
                else return 0;
            });
        }

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
                            <TaskControl
                                onSearch={this.onSearch}
                                onSort={this.onSort}
                                sortBy={sortBy}
                                sortValue={sortValue}
                            />
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks}
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onFilter = { this.onFilter }
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
