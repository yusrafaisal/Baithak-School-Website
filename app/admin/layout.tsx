import HeaderLinks from "@/components/admin/HeaderLinks";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
                <img
                    src="/baithak-logo.png"
                    alt="Baithak School Network"
                    style={{ height: "36px", width: "auto" }}
                />

                <HeaderLinks />
            </header>

            <main style={{ padding: "32px" }}>{children}</main>
        </div>
    );
}