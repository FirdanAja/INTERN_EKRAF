export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-3 backdrop-blur fixed left-0 right-0 top-0 z-50">
      <div className="flex items-center">
        <img src="/src/assets/img/logo.png" alt="Logo" className="h-8 mr-10" />
        <h2 className="font-bold text-xl">Ekraf Kuningan</h2>
      </div>
      <div>
        <ul className="flex gap-5 items-center font">
          <li>
            <a href="#" className="text-sm">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Agenda
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Umkm
            </a>
          </li>
          <li>
            <a href="#" className="text-sm">
              Tentang
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
