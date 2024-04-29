import React from 'react';
import { ProductDetail } from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";

export const PrivateRoute = ({ authenticate }) => {
    return authenticate ? (
      <ProductDetail />
    ) : (
      <Navigate to="/login" />
    );
}
