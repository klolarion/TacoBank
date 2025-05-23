import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute: React.FC = () => {
  const { isLoggedIn } = useAuth();

  // 1. 인증되지 않은 경우 로그인 페이지로 리디렉션
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // 2. 인증된 경우 하위 라우트를 렌더링
  return <Outlet />;
};

export default PrivateRoute;