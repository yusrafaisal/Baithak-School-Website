"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderLinks() {
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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

            {/* ── Manage dropdown ── */}
            <div
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    onFocus={() => setDropdownOpen(true)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    style={{
                        ...linkStyle,
                        background: "none",
                        border: "none",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    Manage ▾
                </button>

                {dropdownOpen && (
                    /* Outer Wrapper: Acts as the absolute positioning anchor and invisible mouse bridge */
                    <div
                        role="menu"
                        style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            zIndex: 1000,
                            minWidth: "180px",
                            paddingTop: "8px", // The invisible bridge gap
                        }}
                    >
                        {/* Inner Wrapper: Holds the actual styling, background, and shadow */}
                        <div
                            style={{
                                backgroundColor: "#ffffff",
                                borderRadius: "6px",
                                boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
                                display: "flex",
                                flexDirection: "column",
                                padding: "6px 0",
                            }}
                        >
                            <Link
                                href="/admin/stories"
                                role="menuitem"
                                onClick={() => setDropdownOpen(false)}
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#333333",
                                    textDecoration: "none",
                                    padding: "10px 16px",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F4F6FA")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                Manage Stories
                            </Link>
                            <Link
                                href="/admin/reports"
                                role="menuitem"
                                onClick={() => setDropdownOpen(false)}
                                style={{
                                    fontFamily: "Poppins, sans-serif",
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: "#333333",
                                    textDecoration: "none",
                                    padding: "10px 16px",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#F4F6FA")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                Manage Reports
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <span onClick={handleLogout} style={linkStyle}>
                Logout
            </span>
        </nav>
    );
}