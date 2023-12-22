import "./Headers.css";

const Header = () => {
    return (
        <span onClick={() => window.scroll(0, 0)} className="header">
      🎬 Pelis Streaming 🎥
    </span>
    );
};

export default Header;