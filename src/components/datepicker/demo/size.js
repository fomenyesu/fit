import React from 'react'
import Datepicker from 'tb-datepicker'

export default class formatDemo extends React.Component {
    render () {
        return (
            <div>
                <Datepicker size="large" />
                <Datepicker />
                <Datepicker size="small" />
            </div>
        )
    }
}