function Sidebar() {

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

    <aside className="sidebar">

      <div className="sidebar-top">

        <h1>🪼 Hi, I'm Yeon.</h1>

        <p className="intro">
          Computer Science Student
          <br />
          & Creative Developer
        </p>

      </div>

      <div className="menu-buttons">

        <button onClick={() => scrollToSection("skills")}>
          Skills
        </button>

        <button onClick={() => scrollToSection("projects")}>
          Projects
        </button>

        <button onClick={() => scrollToSection("gallery")}>
          Gallery
        </button>

      </div>

      <div className="social-links">

        <a
          href="https://github.com/yeon2sheep"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.notion.so/"
          target="_blank"
          rel="noreferrer"
        >
          Notion
        </a>

        <a
          href="https://www.instagram.com/본인아이디"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a
          href="https://www.dongguk.edu/"
          target="_blank"
          rel="noreferrer"
        >
          Dongguk
        </a>

      </div>

    </aside>

  );
}

export default Sidebar;