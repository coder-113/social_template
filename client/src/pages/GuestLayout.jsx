import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function GuestLayout() {
  const { token, user } = useSelector((state) => state.auth);

  if (token) {
    return <Navigate to={"/admin"} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
