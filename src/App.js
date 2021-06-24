import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div style={{ backgroundColor: "black", height: "800px" }}>
      <div class="row" style={{ backgroundColor: "white", height: "200px" }}>
        <div
          className="col-sm-4"
          style={{ paddingTop: "30px", paddingLeft: "50px" }}
        >
          <ProfilePhoto />
        </div>
        <div className="col-sm-8">
          <FullName />
          <Address />
        </div>
      </div>
    </div>
  );
}

export default App;
