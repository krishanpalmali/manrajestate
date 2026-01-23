import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/admin/dashboard", {
          credentials: "include",
        });

        if (!res.ok) {
          navigate("/admin/login");
          return;
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        navigate("/admin/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AdminDashboard;
