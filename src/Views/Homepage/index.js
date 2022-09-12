import { useNavigate } from "react-router-dom";

const HomepageContainer = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: 70, fontSize: 30 }}>
            <h1>BasicApp Movies</h1>
          </div>
          <button
            style={{
              backgroundColor: "#60EED2",
              border: "none",
              padding: "10px 30px",
              borderRadius: 20,
              cursor: "pointer",
            }}
            onClick={handleLogin}
          >
            Se connecter
          </button>
        </div>
      </div>
    </>
  );
};

export default HomepageContainer;
