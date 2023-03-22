import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="bg-white h-screen flex items-center">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold lg:text-7xl text-primary-600">Oops!</h1>
                <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-3xl">Sorry, an unexpected error has occurred.</p>
                <p className="mb-4 text-lg font-light text-gray-500"><i>{error.statusText || error.message}</i></p>
            </div>   
        </div>
    </section>
  )
}

export default ErrorPage;