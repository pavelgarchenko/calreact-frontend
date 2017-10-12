import React from 'react';
import PropTypes from 'prop-types';
import Appointment from '../components/Appointment';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export const AppointmentsList = ({appointments}) =>
    <div>
        <ReactCSSTransitionGroup
            transitionName="appointment"
            transitionEnterTimeout={500}
        >
            {appointments.map(function(appointment) {
                return (
                    <Appointment appointment={appointment} key={appointment.id} />
                )
            })}
            </ReactCSSTransitionGroup>
    </div>

AppointmentsList.propTypes = {
    appointments: PropTypes.array.isRequired
}

AppointmentsList.defaultProps = {
    appointments: []
}