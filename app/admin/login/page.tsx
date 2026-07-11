"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const res = await fetch("/api/admin/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                setError(true);
            }
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#082E76",
                padding: "24px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    padding: "40px 32px",
                    width: "100%",
                    maxWidth: "360px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
                }}
            >
                <h1
                    style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "22px",
                        fontWeight: 600,
                        color: "#082E76",
                        marginTop: 0,
                        marginBottom: "24px",
                        textAlign: "center",
                    }}
                >
                    Admin Login
                </h1>

                <form onSubmit={handleSubmit}>
                    <label
                        htmlFor="password"
                        style={{
                            display: "block",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "13px",
                            color: "#333333",
                            marginBottom: "6px",
                        }}
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter admin password"
                        required
                        style={{
                            width: "100%",
                            height: "42px",
                            border: "1px solid #A6A6A6",
                            borderRadius: "4px",
                            padding: "0 12px",
                            fontSize: "14px",
                            fontFamily: "Poppins, sans-serif",
                            boxSizing: "border-box",
                            marginBottom: "16px",
                            outline: "none",
                        }}
                    />

                    {error && (
                        <p
                            style={{
                                color: "#D0342C",
                                fontFamily: "Poppins, sans-serif",
                                fontSize: "13px",
                                margin: "0 0 16px",
                            }}
                        >
                            Incorrect password
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            height: "44px",
                            backgroundColor: "#FFB600",
                            border: "none",
                            borderRadius: "4px",
                            color: "#082E76",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontSize: "15px",
                            cursor: loading ? "not-allowed" : "pointer",
                            opacity: loading ? 0.7 : 1,
                        }}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}