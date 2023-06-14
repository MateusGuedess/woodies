"use client";
import Home from "@/components/Home";
import Products from "@/components/Products";

export default function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Home />
      <Products />
    </div>
  );
}
