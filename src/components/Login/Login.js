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

                                <img alt="ABC News (AU)" className="icon" src="https://icons.better-idea.org/icon?url=http://www.abc.net.au/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    ABC News (AU)
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Al Jazeera English" className="icon" src="https://icons.better-idea.org/icon?url=http://www.aljazeera.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Al Jazeera English
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Ars Technica" className="icon" src="https://icons.better-idea.org/icon?url=http://arstechnica.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Ars Technica
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Associated Press" className="icon" src="https://icons.better-idea.org/icon?url=https://apnews.com/&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Associated Press
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="BBC News" className="icon" src="https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    BBC News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="BBC Sport" className="icon" src="https://icons.better-idea.org/icon?url=http://www.bbc.co.uk/sport&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    BBC Sport
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Bild" className="icon" src="https://icons.better-idea.org/icon?url=http://www.bild.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Bild
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Bloomberg" className="icon" src="https://icons.better-idea.org/icon?url=http://www.bloomberg.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Bloomberg
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Breitbart News" className="icon" src="https://icons.better-idea.org/icon?url=http://www.breitbart.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Breitbart News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Business Insider" className="icon" src="https://icons.better-idea.org/icon?url=http://www.businessinsider.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Business Insider
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Business Insider (UK)" className="icon" src="https://icons.better-idea.org/icon?url=http://uk.businessinsider.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Business Insider (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Buzzfeed" className="icon" src="https://icons.better-idea.org/icon?url=https://www.buzzfeed.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Buzzfeed
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="CNBC" className="icon" src="https://icons.better-idea.org/icon?url=http://www.cnbc.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    CNBC
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="CNN" className="icon" src="https://icons.better-idea.org/icon?url=http://us.cnn.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    CNN
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Daily Mail" className="icon" src="https://icons.better-idea.org/icon?url=http://www.dailymail.co.uk/home/index.html&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Daily Mail
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Der Tagesspiegel" className="icon" src="https://icons.better-idea.org/icon?url=http://www.tagesspiegel.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Der Tagesspiegel
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Die Zeit" className="icon" src="https://icons.better-idea.org/icon?url=http://www.zeit.de/index&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Die Zeit
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Engadget" className="icon" src="https://icons.better-idea.org/icon?url=https://www.engadget.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Engadget
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Entertainment Weekly" className="icon" src="https://icons.better-idea.org/icon?url=http://www.ew.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Entertainment Weekly
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="ESPN" className="icon" src="https://icons.better-idea.org/icon?url=http://espn.go.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    ESPN
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="ESPN Cric Info" className="icon" src="https://icons.better-idea.org/icon?url=http://www.espncricinfo.com/&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    ESPN Cric Info
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Financial Times" className="icon" src="https://icons.better-idea.org/icon?url=http://www.ft.com/home/uk&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Financial Times
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Focus" className="icon" src="https://icons.better-idea.org/icon?url=http://www.focus.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Focus
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Football Italia" className="icon" src="https://icons.better-idea.org/icon?url=http://www.football-italia.net&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Football Italia
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Fortune" className="icon" src="https://icons.better-idea.org/icon?url=http://fortune.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Fortune
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="FourFourTwo" className="icon" src="https://icons.better-idea.org/icon?url=http://www.fourfourtwo.com/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    FourFourTwo
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Fox Sports" className="icon" src="https://icons.better-idea.org/icon?url=http://www.foxsports.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Fox Sports
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Google News" className="icon" src="https://icons.better-idea.org/icon?url=https://news.google.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Google News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Gruenderszene" className="icon" src="https://icons.better-idea.org/icon?url=http://www.gruenderszene.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Gruenderszene
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Hacker News" className="icon" src="https://icons.better-idea.org/icon?url=https://news.ycombinator.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Hacker News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Handelsblatt" className="icon" src="https://icons.better-idea.org/icon?url=http://www.handelsblatt.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Handelsblatt
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="IGN" className="icon" src="https://icons.better-idea.org/icon?url=http://www.ign.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    IGN
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Independent" className="icon" src="https://icons.better-idea.org/icon?url=http://www.independent.co.uk&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Independent
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Mashable" className="icon" src="https://icons.better-idea.org/icon?url=http://mashable.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Mashable
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Metro" className="icon" src="https://icons.better-idea.org/icon?url=http://metro.co.uk&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Metro
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Mirror" className="icon" src="https://icons.better-idea.org/icon?url=http://www.mirror.co.uk/&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Mirror
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="MTV News" className="icon" src="https://icons.better-idea.org/icon?url=http://www.mtv.com/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    MTV News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="MTV News (UK)" className="icon" src="https://icons.better-idea.org/icon?url=http://www.mtv.co.uk/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    MTV News (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="National Geographic" className="icon" src="https://icons.better-idea.org/icon?url=http://news.nationalgeographic.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    National Geographic
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="New Scientist" className="icon" src="https://icons.better-idea.org/icon?url=https://www.newscientist.com/section/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    New Scientist
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Newsweek" className="icon" src="https://icons.better-idea.org/icon?url=http://www.newsweek.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Newsweek
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="New York Magazine" className="icon" src="https://icons.better-idea.org/icon?url=http://nymag.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    New York Magazine
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="NFL News" className="icon" src="https://icons.better-idea.org/icon?url=http://www.nfl.com/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    NFL News
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Polygon" className="icon" src="https://icons.better-idea.org/icon?url=http://www.polygon.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Polygon
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Recode" className="icon" src="https://icons.better-idea.org/icon?url=http://www.recode.net&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Recode
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Reddit /r/all" className="icon" src="https://icons.better-idea.org/icon?url=https://www.reddit.com/r/all&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Reddit /r/all
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Reuters" className="icon" src="https://icons.better-idea.org/icon?url=http://www.reuters.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Reuters
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Spiegel Online" className="icon" src="https://icons.better-idea.org/icon?url=http://www.spiegel.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Spiegel Online
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="T3n" className="icon" src="https://icons.better-idea.org/icon?url=http://t3n.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    T3n
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="TalkSport" className="icon" src="https://icons.better-idea.org/icon?url=http://talksport.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    TalkSport
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="TechCrunch" className="icon" src="https://icons.better-idea.org/icon?url=https://techcrunch.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    TechCrunch
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="TechRadar" className="icon" src="https://icons.better-idea.org/icon?url=http://www.techradar.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    TechRadar
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Economist" className="icon" src="https://icons.better-idea.org/icon?url=http://www.economist.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Economist
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Guardian (AU)" className="icon" src="https://icons.better-idea.org/icon?url=https://www.theguardian.com/au&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Guardian (AU)
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Guardian (UK)" className="icon" src="https://icons.better-idea.org/icon?url=https://www.theguardian.com/uk&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Guardian (UK)
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Hindu" className="icon" src="https://icons.better-idea.org/icon?url=http://www.thehindu.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Hindu
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Huffington Post" className="icon" src="https://icons.better-idea.org/icon?url=http://www.huffingtonpost.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Huffington Post
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Lad Bible" className="icon" src="https://icons.better-idea.org/icon?url=http://www.theladbible.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Lad Bible
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The New York Times" className="icon" src="https://icons.better-idea.org/icon?url=http://www.nytimes.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The New York Times
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Next Web" className="icon" src="https://icons.better-idea.org/icon?url=http://thenextweb.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Next Web
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Sport Bible" className="icon" src="https://icons.better-idea.org/icon?url=http://www.thesportbible.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Sport Bible
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Telegraph" className="icon" src="https://icons.better-idea.org/icon?url=http://www.telegraph.co.uk&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Telegraph
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Times of India" className="icon" src="https://icons.better-idea.org/icon?url=http://timesofindia.indiatimes.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Times of India
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Verge" className="icon" src="https://icons.better-idea.org/icon?url=http://www.theverge.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Verge
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Wall Street Journal" className="icon" src="https://icons.better-idea.org/icon?url=http://www.wsj.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Wall Street Journal
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="The Washington Post" className="icon" src="https://icons.better-idea.org/icon?url=https://www.washingtonpost.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    The Washington Post
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Time" className="icon" src="https://icons.better-idea.org/icon?url=http://time.com&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Time
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="USA Today" className="icon" src="https://icons.better-idea.org/icon?url=http://www.usatoday.com/news&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    USA Today
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Wired.de" className="icon" src="https://icons.better-idea.org/icon?url=https://www.wired.de&amp;size=70..120..200" />
                                <div className="example_source_name">
                                    Wired.de
                                </div>

                            </div>
                            <div className="example_source">
                                <img alt="Wirtschafts Woche" className="icon" src="https://icons.better-idea.org/icon?url=http://www.wiwo.de&amp;size=70..120..200" />
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