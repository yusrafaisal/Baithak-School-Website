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
                    height: "64px", // Fixed height of header
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 32px",
                    boxSizing: "border-box",
                }}
            >
                {/* ── Brand Layout Wrapper ── */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>

                    {/* Logo 1: The Crest / Round Icon */}
                    <img
                        src="/images/landing_page_imgs/logo.png"
                        alt="Baithak School Network Icon"
                        style={{ height: "38px", width: "auto" }}
                    />

                    {/* Logo 2: The Typography / Banner Text */}
                    {/* Note: Make sure to replace 'hero-bg.jpg' with your actual secondary typography/text logo file name if you have a separate transparent version! */}
                    <img
                        src="/images/landing_page_imgs/baithak-school-logo2.png"
                        alt="Baithak School Network Text"
                        style={{ height: "30px", width: "auto", borderRadius: "2px" }}
                    />

                    {/* Admin Portal Label */}
                    <span
                        style={{
                            fontFamily: "Poppins, sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            backgroundColor: "#E2E8F0", // Clean soft gray pill background
                            color: "#082E76",           // Portal blue text color
                            padding: "4px 10px",
                            borderRadius: "12px",
                            marginLeft: "4px",          // Adds a tiny bit of extra breathing room after Logo 2
                            userSelect: "none"
                        }}
                    >
                        Admin Portal
                    </span>
                </div>

                <HeaderLinks />
            </header>

            {/* Main content body view setup */}
            <main style={{ minHeight: "calc(100vh - 64px)", display: "flex", flexDirection: "column" }}>
                {children}
            </main>
        </div>
    );
}