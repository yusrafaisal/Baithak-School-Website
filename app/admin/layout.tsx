"use client";

import { usePathname } from "next/navigation";
import HeaderLinks from "@/components/admin/HeaderLinks";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login";

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F4F6FA" }}>
            <header
                style={{
                    backgroundColor: "#ffffff",
                    borderBottom: "1px solid #E5E7EB",
                    height: "64px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <img
                        src="/images/landing_page_imgs/logo.png"
                        alt="Icon"
                        style={{ height: "38px", width: "auto" }}
                    />
                    <img
                        src="/images/landing_page_imgs/baithak-school-logo2.png"
                        alt="Text Logo"
                        style={{ height: "30px", width: "auto", borderRadius: "2px" }}
                    />
                    <span
                        style={{
                            backgroundColor: "#E2E8F0",
                            color: "#082E76",
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            padding: "4px 10px",
                            borderRadius: "12px",
                        }}
                    >
                        Admin Portal
                    </span>
                </div>

                <HeaderLinks />
            </header>

            <main
                style={{
                    padding: isLoginPage ? "0px" : "32px",
                    minHeight: "calc(100vh - 64px)",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                }}
            >
                {children}
            </main>
        </div>
    );
}