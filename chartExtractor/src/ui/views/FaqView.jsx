
import { StandardView } from "../templates/StandardView/StandardView";

export const FaqView = ()=>{

    return(
        <StandardView>
            <>
                <h1>Frequently Asked Questions</h1>
                <br/><br/><br/>
                <h2 >Do we keep any data from you or your images?</h2>
                <hr/>
                <p>No. This page is completely built on Javascript and only runs into your browser.</p>
                <p>No data is transferred to any backend. Images and information is stored in your browser for you to use them whenever you want.</p>
                <p>We can't access to any information you upload.</p>

                <br/><br/><br/>

                <h2 >Why aren't my images stored anymore?</h2>
                <hr/>
                <p>Images and data are stored in the cache memory of your browser. If the cache memory is cleaned, data dissapears. We recommend you to download the data after extracting it.</p>

                <br/><br/><br/>

                <h2 >I'm working in Chrome and my images are not displayed in Firefox (or vice-versa). Why can't I see my images in different browsers?</h2>
                <hr/>
                <p>Images and data are stored in the cache memory of a browser. Cache memory is not shared between browsers. Thus, you can't process data with Chrome and see it in Firefox.</p>

                <br/><br/><br/>

                <h2 >Is this an open source project?</h2>
                <hr/>
                <p>Yes it is. This page is built under MIT license.</p>
                <p>You can see the original code at:</p>
                <br/>
                <a href="https://github.com/jaimegoni/chartExtractor" target="_blank">https://github.com/jaimegoni/chartExtractor</a>
            </>
        </StandardView>
    )
}