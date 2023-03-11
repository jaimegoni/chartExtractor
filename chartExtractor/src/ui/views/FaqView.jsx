
import { StandardView } from "../templates/StandardView/StandardView";

export const FaqView = ()=>{

    return(
        <StandardView>
            <>
                <h1 style={{fontSize:"2em"}}>Do we keep any data from you or your images?</h1>
                <hr/>
                <p>No. This page is completely built on Javascript and only runs into your browser.</p>
                <p>No data is transferred to any backend. Images and information is stored in your browser for you to use them whenever you want.</p>
                <p>We can't access to any information you upload.</p>

                <br/>
                <br/>

                <h1 style={{fontSize:"2em"}}>Is this an open source project?</h1>
                <hr/>
                <p>Yes it is. This page is built under MIT license.</p>
                <p>You can see the original code at:</p>
                <br/>
                <a href="https://github.com/jaimegoni/chartExtractor" target="_blank">https://github.com/jaimegoni/chartExtractor</a>
            </>
        </StandardView>
    )
}