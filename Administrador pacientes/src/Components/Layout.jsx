import { Outlet, Link, useLocation } from "react-router-dom"

export default function Layout() {


  const location = useLocation() // forma de detectar en que link esta parado y darle clases dependiendo si esta activo

  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-600 py-10 px-5">
            <h2 className="text-4xl font-black text-center text-white">CRM- Clientes</h2>

            <nav className="mt-10">
              <Link className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to="/">Clientes</Link>
              <Link className={`${location.pathname === '/Clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 text-white`} to="/Clientes/nuevo">Nuevo Cliente</Link>
            </nav>

        </aside>

        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
          <Outlet/>
        </main>
    </div>
  )
}
