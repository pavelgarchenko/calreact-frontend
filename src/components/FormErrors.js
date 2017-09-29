import React from 'react';
import PropTypes from 'prop-types';

export const FormErrors =  ({formErrors}) =>
    <div className="form-errors">
        {Object.keys(formErrors).map((errorField) => {
            return (
              formErrors[errorField].map((error) => {
                  return (
                      <p className="error" key="1">{errorField} {error}</p>
                  )
              })
          )
        })}
    </div>

FormErrors.propTypes = {
    formErrors: PropTypes.object.isRequired
}