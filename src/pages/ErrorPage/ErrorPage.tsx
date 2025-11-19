import './ErrorPage.css';


export default function ErrorPage() {

    return (
            <div className="error-page h-screen w-screen text-white text-center">
                <h1 id='error-top-text' className='text-4xl' >I don't know how you got here!</h1>
                <h2>But its a 404 theres nothing here...
                    <br></br> 
                    Float with me awhile, or go back <a href="/">home</a>
                </h2>
        </div>
    );

}
