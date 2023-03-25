import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage () {

    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.data}</i>
            </p>
        </div>
        );
    } else {
        return <div>Oops</div>;
    }
    
};



export default ErrorPage;