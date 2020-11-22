import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Task } from '../../store/data/task/types';
import { ApplicationState } from '../../store';

import * as TaskActions from '../../store/data/task/actions';


interface StateProps {
  tasks: Task[]
}

interface DispatchProps {
  loadRequest(): void
}

type Props = StateProps & DispatchProps;

class TaskList extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        {tasks.map(task => {
          return <div key={task.id}>{task.title}</div>;
        })}
      </>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  tasks: state.task.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(TaskActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
