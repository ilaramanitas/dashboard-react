function Acceso() {
  return (
    <>
      <aside className="search-wrap">
        <div className="search">
          <label htmlFor="search">
            <i
              className="bi bi-search"
              style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}
            ></i>
            <input type="text" id="search" />
          </label>
        </div>

        <div className="user-actions">
          <button type="button" aria-label="Agregar usuario">
            <a href="#">
              <i
                className="bi bi-person-add"
                style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}
              ></i>
            </a>
          </button>
          <button type="button" aria-label="Perfil de usuario">
            <a href="#">
              <i
                className="bi bi-person"
                style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}
              ></i>
            </a>
          </button>
          <button type="button" aria-label="Cerrar sesión">
            <a href="#">
              <i
                className="bi bi-box-arrow-right"
                style={{ fontSize: '1.5rem', color: 'cornflowerblue' }}
              ></i>
            </a>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Acceso;
