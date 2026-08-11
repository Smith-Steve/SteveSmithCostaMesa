import React, { Component } from 'react';

const API_ENDPOINT = 'https://rm3tyxbs2a.execute-api.us-west-2.amazonaws.com/dev/submit';

class GetInvolved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: '',
      interests: {
        knockOnDoors: false,
        meetSteve: false,
        walkWithLiterature: false,
        write: false,
        yardSign: false,
        mailingList: false,
        notifyNextEvent: false,
      },
      submitted: false,
      submitting: false,
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCheckboxChange(e) {
    const { name, checked } = e.target;
    this.setState((prevState) => ({
      interests: {
        ...prevState.interests,
        [name]: checked,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitting: true, error: null });

    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      comments: this.state.comments,
      interests: this.state.interests,
    };

    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Submission failed');
        }
        return response.json();
      })
      .then(() => {
        this.setState({ submitted: true, submitting: false });
      })
      .catch((err) => {
        console.error('Error submitting form:', err);
        this.setState({
          submitting: false,
          error: 'Something went wrong. Please try again or contact us directly.',
        });
      });
  }

  render() {
    if (this.state.submitted) {
      return (
        <section className="get-involved">
          <div className="get-involved-container">
            <div className="form-success">
              <h2>Thank you!</h2>
              <p>Steve's team will be in touch soon.</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="get-involved">
        <div className="get-involved-container">
          <div className="get-involved-header">
            <div className="get-involved-eyebrow">&mdash; Join the Campaign</div>
            <h2>Get Involved</h2>
            <p className="get-involved-sub">
              Tell us how you'd like to help, and we'll follow up.
            </p>
          </div>

          <form className="volunteer-form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label className="checkbox-group-label">How would you like to help?</label>
              <div className="checkbox-grid">
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="knockOnDoors"
                    checked={this.state.interests.knockOnDoors}
                    onChange={this.handleCheckboxChange}
                  />
                  Knock on Doors
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="meetSteve"
                    checked={this.state.interests.meetSteve}
                    onChange={this.handleCheckboxChange}
                  />
                  Meet Steve
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="walkWithLiterature"
                    checked={this.state.interests.walkWithLiterature}
                    onChange={this.handleCheckboxChange}
                  />
                  Walk With Literature
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="write"
                    checked={this.state.interests.write}
                    onChange={this.handleCheckboxChange}
                  />
                  Write
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="yardSign"
                    checked={this.state.interests.yardSign}
                    onChange={this.handleCheckboxChange}
                  />
                  I want a yard sign
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="mailingList"
                    checked={this.state.interests.mailingList}
                    onChange={this.handleCheckboxChange}
                  />
                  Sign Up For Mailing List
                </label>
                <label className="checkbox-item">
                  <input
                    type="checkbox"
                    name="notifyNextEvent"
                    checked={this.state.interests.notifyNextEvent}
                    onChange={this.handleCheckboxChange}
                  />
                  Notify Me Of Next Event
                </label>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="comments">Comments (Optional)</label>
              <textarea
                id="comments"
                name="comments"
                rows="4"
                value={this.state.comments}
                onChange={this.handleInputChange}
              />
            </div>

            {this.state.error && (
              <p style={{ color: '#e0704a', marginBottom: '16px' }}>{this.state.error}</p>
            )}

            <button type="submit" className="btn-submit" disabled={this.state.submitting}>
              {this.state.submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default GetInvolved;