import { useRouteError } from "react-router-dom";
// import "./error.scss";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="error">
      <img
        className=""
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-JvIMI551Tv9_dRUv-AvRm4G0LPX7ycAOKA&usqp=CAU"
        alt="error"
      />
      <h1 className="">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
