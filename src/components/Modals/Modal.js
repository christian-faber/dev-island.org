import { Link } from "react-router-dom";

export const Modal = () => {
  return (
    <div>
      <h1>Who are we</h1>
      <div>
        {/* section 1 */}
        <div>
          <h1>Background</h1>
          <Link>
            <button>Dive in!</button>
          </Link>
        </div>
        {/* section 2 */}
        <div>
          <h1>Team</h1>
          <Link>
            <button>Dive in!</button>
          </Link>
        </div>
        {/* section 3 */}
        <div>
          <h1>Cohort</h1>
          <Link>
            <button>Dive in!</button>
          </Link>
        </div>
        {/* section 4 */}
        <div>
          <h1>Partners</h1>
          <Link>
            <button>Dive in!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};