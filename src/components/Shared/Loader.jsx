import { FallingLines } from "react-loader-spinner";
function Loader() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        marginTop: "20vh",
      }}
    >
      <FallingLines
        color="2A3D45"
        width="70"
        visible={true}
        ariaLabel="falling-circles-loading"
      />
    </div>
  );
}

export default Loader;
