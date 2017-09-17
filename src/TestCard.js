import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-grid-system';

import CardHeader from './CardHeader';

import './TestCard.css'

const TestCard = props => {
  return (
    <div>
      <Row>
        <Col lg={12}>
          <div className="card">
            <CardHeader headerText={`Question ${props.currentProblem}: ${props.question}`} />
            <div className="card-body">
              <Row>
                <Col lg={6}>
                  <div className="radio left-align">
                    <input id="radio-1" name="radio" type="radio" />
                    <label htmlFor="radio-1" className="radio-label">{props.answers[0]}</label>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="radio right-align">
                    <input id="radio-2" name="radio" type="radio" />
                    <label htmlFor="radio-2" className="radio-label">{props.answers[1]}</label>
                  </div>
                </Col>
              </Row>
              <Row className="margin">
                <Col lg={6}>
                  <div className="radio left-align">
                    <input id="radio-3" name="radio" type="radio" />
                    <label htmlFor="radio-3" className="radio-label">{props.answers[2]}</label>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="radio right-align">
                    <input id="radio-4" name="radio" type="radio" />
                    <label htmlFor="radio-4" className="radio-label">{props.answers[3]}</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <button className="btn margin large-btn-font">Submit</button>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TestCard;