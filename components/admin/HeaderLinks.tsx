"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderLinks() {
    const router = useRouter();

    async function handleLogout() {
        try {
            await fetch("/api/admin/logout", { method: "POST" });
        } catch (error) {
            console.error("Logout request failed:", error);
        } finally {
            router.push("/admin/login");
        }
    }

    const linkStyle: React.CSSProperties = {
        fontFamily: "Poppins, sans-serif",
        fontSize: "14px",
        fontWeight: 500,
        color: "#333333",
        textDecoration: "none",
        cursor: "pointer",
    };

    return (
        <nav
            style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
            }}
        >
            <Link href="/admin" style={linkStyle}>
                Dashboard
            </Link>
            <Link href="/admin/stories" style={linkStyle}>
                Manage Stories
            </Link>
            <span onClick={handleLogout} style={linkStyle}>
                Logout
            </span>
        </nav>
    );
}