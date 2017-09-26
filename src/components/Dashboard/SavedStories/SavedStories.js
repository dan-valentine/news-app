import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import NewsArticle from '../NewsPanel/NewsArticle/NewsArticle';
import Header from '../../Header/Header';
import './SavedStories.css'

export default class SavedStories extends Component {
    constructor(){
        super();
        this.state = {
            savedStories : [{"author":"Joseph Bernstein","title":"Steve Bannon Sought To Infiltrate Facebook Hiring","description":"According to emails obtained by BuzzFeed News, Bannon hoped to spy on Facebook’s job application process.","url":"https://www.buzzfeed.com/josephbernstein/steve-bannon-sought-to-infiltrate-facebook-hiring","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/13/campaign_images/buzzfeed-prod-fastlane-01/steve-bannon-sought-to-infiltrate-facebook-hiring-2-31350-1506358837-0_dblbig.jpg","publishedAt":"2017-09-25T14:15:41Z"},{"author":"Andy Golder","title":"Kris Jenner Shot Ryan Seacrest Down On-Air Over Kylie Rumors And It's So Awkward","description":"I cringe.","url":"https://www.buzzfeed.com/andyneuenschwander/kris-jenner-shot-ryan-seacrest-down-on-air-over-ky","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/13/enhanced/buzzfeed-prod-fastlane-03/original-13887-1506362222-2.jpg?crop=816:427;16,0","publishedAt":"2017-09-25T18:05:28Z"},{"author":"Dave Stopera","title":"18 Completely And Totally Respectful Ways To Treat The American Flag","description":"Hey, kneelers: LISTEN UP.","url":"https://www.buzzfeed.com/daves4/actualyl-respectable-ways-to-treat-the-american-fl","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/14/enhanced/buzzfeed-prod-fastlane-01/original-3295-1506365700-12.jpg?crop=1000:523;0,271","publishedAt":"2017-09-25T19:04:34Z"},{"author":"Ishmael N. Daro","title":"Canadian Immigration Officials Barred Chelsea Manning From Entering The Country","description":"Manning says she will challenge the decision.","url":"https://www.buzzfeed.com/ishmaeldaro/chelsea-manning-barred-from-canada","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/12/enhanced/buzzfeed-prod-fastlane-01/original-25810-1506357823-4.jpg?crop=794:416;0,240","publishedAt":"2017-09-25T18:29:02Z"},{"author":"Delaney Strunk","title":"Parents Are Sharing White Lies They Told Their Children And It's Pretty Damn Funny","description":"Never trusting any parent ever again.","url":"https://www.buzzfeed.com/delaneystrunk/parents-are-sharing-white-lies-they-told-their-chi","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/16/campaign_images/buzzfeed-prod-fastlane-01/parents-are-sharing-white-lies-they-told-their-ch-2-6347-1506369822-0_dblbig.jpg","publishedAt":"2017-09-25T18:53:47Z"},{"author":"Daniela Cadena","title":"The Mystery Of The 2002 Hit Song \"Asereje\" Has Finally Been Solved","description":"The whole time it made sense.","url":"https://www.buzzfeed.com/danielacadena/the-mystery-of-the-2002-hit-song-asereje-has-finally-been","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/15/campaign_images/buzzfeed-prod-fastlane-02/the-mystery-of-the-2002-hit-song-asereje-has-fina-2-23809-1506368816-11_dblbig.jpg","publishedAt":"2017-09-25T19:31:45Z"},{"author":"Ignacia Fulcher","title":"Here’s What People Are Buying On Amazon Right Now","description":"Movers and Shakers is a list of products on Amazon that are currently rising in the ranking. This week: a toaster, scallop-pleated dress, and metallic shorts.","url":"https://www.buzzfeed.com/ignaciafulcher/heres-what-people-are-buying-on-amazon-right-now-september","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/20/6/tmp/buzzfeed-prod-fastlane-01/2caaede43d4e21ceda404b42fb948857-14.jpg?crop=476:249;0,0","publishedAt":"2017-09-25T19:31:07Z"},{"author":"Lauren Strapagiel","title":"This MP Called Out Body-Shaming In The House Of Commons And People Are About It","description":"\"They look pretty dope.\"","url":"https://www.buzzfeed.com/laurenstrapagiel/this-mp-rocked-braids-for-an-epic-speech-about-natural-hair","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/21/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-20790-1506007704-18.png?crop=844:441;63,120","publishedAt":"2017-09-21T16:01:42Z"},{"author":"Tanya Chen","title":"This College Student Hilariously Took Advantage Of A Loophole In His Professor's Exam Instructions","description":"\"Well played and lesson learned.\"","url":"https://www.buzzfeed.com/tanyachen/touche-elijah","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/12/enhanced/buzzfeed-prod-fastlane-01/original-25304-1506357218-11.jpg?crop=1080:566;0,92","publishedAt":"2017-09-25T16:42:46Z"},{"author":"Delaney Strunk","title":"This Is What Disney Princesses Would Look Like Today And Honestly It's Relatable AF","description":"Mulan = eyebrow goals.","url":"https://www.buzzfeed.com/delaneystrunk/these-modern-portrayals-of-disney-princesses-are","urlToImage":"https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/13/tmp/buzzfeed-prod-fastlane-02/tmp-name-2-19876-1506362122-5_dblbig.jpg","publishedAt":"2017-09-25T18:19:34Z"}]
        }
    }
    render () {
        let articlesArr = this.state.savedStories.map((article, i) => <NewsArticle key={i} article={article}/>);
        
        return (
            
            <div className='saved_container'>
                <Header/>
                <div className='saved_articles_container'>
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                        <Masonry gutter="10px">
                            {articlesArr}
                        
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        );
    }
}