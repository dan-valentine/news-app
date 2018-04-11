import React, { Component } from 'react';
import TypingNews from './TypingNews/TypingNews';
import TypingBucket from './TypingBucket/TypingBucket';
import newsLogo from './../../images/news.svg';
import flag3 from './../../parallaxImages/flag3.jpg';
import wh_background from './../../parallaxImages/whouse-bg.png'
import donald from './../../parallaxImages/trump-layer.png'
import crowd1 from './../../parallaxImages/top-layer-crowd.png'
import crowd2 from './../../parallaxImages/middle-layer-crowd.png'
import crowd3 from './../../parallaxImages/bottom-layer-crowd.png'
import './Login.css';

export default class Login extends Component {
    render() {
        return (

            <div className="parallax">
                <div className='login_header'>
                    <div className='login_logo_container'>
                        <img src={newsLogo} alt='news_logo' />
                    </div>
                    <h1 className='login_title'>BucketHead News</h1>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login_btn'>Login</button>
                    </a>

                </div>
                <div className='parallax_container'>
                    <div className="parallax_layer flag_layer">
                        <div className='flag_container'>
                            <img className='flag_layer_img' src={flag3} alt="flag" />
                        </div>
                    </div>
                    <div className="parallax_layer wh_layer">
                        <img className='parallax_img wh_layer_img' alt='white House'src={wh_background} />
                    </div>
                    <div className='parallax_layer type_layer'>
                        <TypingNews />
                    </div>

                    <div className="parallax_layer djt_layer">
                        <img className='parallax_img djt_layer_img' alt='donny john' src={donald} />
                    </div>
                    <div className="parallax_layer crowd_layer_1">
                        <img className='parallax_img crowd_layer_1_img' alt='front crowd' src={crowd1} />
                    </div>
                    <div className="parallax_layer crowd_layer_2">
                        <img className='parallax_img crowd_layer_2_img' alt='middle crowd' src={crowd2} />
                    </div>
                    <div className="parallax_layer crowd_layer_3">
                        <img className='parallax_img crowd_layer_3_img' alt='back crowd'src={crowd3} />
                    </div>

                </div>
                <div className="parallax_cover">
                    <div className="parallax_cover_sources">
                        <h2>Bucket Head News gives you all of your favorite news sources all in one spot!</h2>
                        <h3>Put Your news in a bucket!</h3>
                        <div className="sources_container">
                            <div className="example_source">

                                <div className="example_source_name">
                                    ABC News (AU)
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Al Jazeera English
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Ars Technica
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Associated Press
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    BBC News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    BBC Sport
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Bild
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Bloomberg
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Breitbart News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Business Insider
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Business Insider (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Buzzfeed
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    CNBC
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    CNN
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Daily Mail
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Der Tagesspiegel
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Die Zeit
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Engadget
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Entertainment Weekly
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    ESPN
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    ESPN Cric Info
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Financial Times
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Focus
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Football Italia
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Fortune
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    FourFourTwo
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Fox Sports
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Google News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Gruenderszene
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Hacker News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Handelsblatt
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    IGN
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Independent
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Mashable
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Metro
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Mirror
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    MTV News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    MTV News (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    National Geographic
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    New Scientist
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Newsweek
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    New York Magazine
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    NFL News
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Polygon
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Recode
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Reddit /r/all
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Reuters
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Spiegel Online
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    T3n
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    TalkSport
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    TechCrunch
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    TechRadar
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Economist
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Guardian (AU)
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Guardian (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Hindu
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Huffington Post
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Lad Bible
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The New York Times
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Next Web
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Sport Bible
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Telegraph
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Times of India
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Verge
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Wall Street Journal
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    The Washington Post
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Time
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    USA Today
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Wired.de
                                </div>

                            </div>
                            <div className="example_source">
                                <div className="example_source_name">
                                    Wirtschafts Woche
                                </div>

                            </div>
                        </div>
                    
                    <div className='newspaper_background'>
                        <TypingBucket />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}