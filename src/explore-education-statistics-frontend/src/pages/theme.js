import React, { Component } from 'react';
import DataList from '../components/datalist';
import Title from '../components/title';
import API from '../api';
import Breadcrumbs from '../components/breadcrumbs';
import Glink from '../components/glink';

class Theme extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            topics: []
        }
    }

    componentDidMount() {
        const { theme } = this.props.match.params;
        API.get(`theme/${theme}`)
            .then(json => this.setState({ data: json.data }))
            .catch(error => alert(error))
        API.get(`theme/${theme}/topics`)
            .then(json => this.setState({ topics: json.data }))
            .catch(error => alert(error))
    }

    render() {
        const { data } = this.state;
        const { topics } = this.state;
        return (
            <div>
                <Breadcrumbs current={data.title} />
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        <Title label={data.title} />

                        <p className="govuk-body">Here you can find DfE stats for Schools, and access them as reports, customise and download as excel files or csv files, and access them via an API. <Glink>(Find out more)</Glink></p>
                        <p className="govuk-body">You can also see our statistics for 16+ education and social care.</p>

                        <div className="govuk-form-group">
                            <label className="govuk-label" for="find-for-schools">
                                Find any DfE statistic, publication or indicator for schools:
                            </label>
                            <span id="find-for-schools" className="govuk-hint">
                                Find publications, statistics and indicators for Schools.
                            </span>
                            <input className="govuk-input govuk-input--width-40" id="find-for-schools" name="find-for-schools" type="text" aria-describedby="find-for-schools-hint" />
                            <button type="submit" className="govuk-button">
                                Find
                            </button>
                        </div>
                        <h3 className="govuk-heading-m">What sort of stats are you looking for?</h3>
                        <DataList data={topics} linkIdentifier={window.location.pathname} />
                    </div>
                </div>
                <hr className="govuk-section-break--l govuk-section-break--visible" />


                <section id="latest-publications">
                    <h2 className="govuk-heading-l">Latest publications in {(data.title || '').toLowerCase()}</h2>
                    <p className="govuk-body">These are the latest official statistics with figures in {(data.title || '').toLowerCase()}. You can access the report and commentary, and also get the data for use in Excel and other tools. You can now customise the data to your requirements, and get a variety of formats.</p>
                    <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
                </section>

                <section id="key-indicators">
                    <h2 className="govuk-heading-l">Key indicators for {(data.title || '').toLowerCase()}</h2>
                    <p className="govuk-body">These are some key indicators for {(data.title || '').toLowerCase()}. You can change what you see here according to your requirements.</p>
                    <hr className="govuk-section-break govuk-section-break--xl govuk-section-break--visible" />
                </section>

                <section id="explore-statistics">
                    <h2 className="govuk-heading-l">Explore {(data.title || '').toLowerCase()} statistics</h2>
                    <ul className="govuk-list govuk-list--bullet">
                        <li>You can explore all the DfE statistics available for {(data.title || '').toLowerCase()} here. You can use our step by step guide, or dive straight in.</li>
                        {/* <li>Once you've chosen your data you can view it by ###.</li> */}
                        <li>You can also dowload it, visualise it or copy and paste it as you need.</li>
                    </ul>


                    {/* <div className="govuk-form-group">
                        <fieldset className="govuk-fieldset">
                            <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
                                <h1 className="govuk-fieldset__heading">
                                    Want to explore more school stats? What do you want to do?
                                </h1>
                            </legend>
                            <div className="govuk-radios">
                                <div className="govuk-radios__item">
                                    <input className="govuk-radios__input" id="what-to-do-1" name="what-to-do" type="radio" value="see-how-stats-have-changed" />
                                    <label className="govuk-label govuk-radios__label" for="what-to-do-1">
                                        See how school stats have changed over time for <Glink>(choose)</Glink>
                                    </label>
                                </div>
                                <div className="govuk-radios__item">
                                    <input className="govuk-radios__input" id="what-to-do-2" name="what-to-do" type="radio" value="compare-stats-over-time" />
                                    <label className="govuk-label govuk-radios__label" for="what-to-do-2">
                                        Compare school stats over time to <Glink>(choose)</Glink>
                                    </label>
                                </div>
                                <div className="govuk-radios__item">
                                    <input className="govuk-radios__input" id="what-to-do-3" name="what-to-do" type="radio" value="compare-current-stats-with" />
                                    <label className="govuk-label govuk-radios__label" for="what-to-do-3">
                                        Compare school current stats to <Glink>(choose)</Glink>
                                    </label>
                                </div>
                                <div className="govuk-radios__item">
                                    <input className="govuk-radios__input" id="what-to-do-4" name="what-to-do" type="radio" value="find-specific-stats" />
                                    <label className="govuk-label govuk-radios__label" for="what-to-do-4">
                                        Find specific stats for <Glink>(choose)</Glink>
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div> */}
                </section>

                {/* <section id="find-and-compare-statistics">
                    <h2 className="govuk-heading-l">Find and compare stats for {(data.title || '').toLowerCase()}</h2>
                </section> */}
            </div>
        );
    }
}

export default Theme;