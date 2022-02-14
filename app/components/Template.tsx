export default function Template({ children }: { children: JSX.Element | JSX.Element[] }) {
    return <><div className="grid-container">
        <div className="header">
            Header
        </div>
        <div className="sidebar">
            Sidebar
        </div>
        <div className="content">
            {children}
        </div>
        <div className="footer">
            Footer
        </div>
    </div></>
}