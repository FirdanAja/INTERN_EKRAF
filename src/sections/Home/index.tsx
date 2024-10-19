// export default function HeaderHomeSection() {
//   return (
//     <>
//       <div className="bg-[url(https://images.unsplash.com/photo-1505416795390-0beeb662b1f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative h-screen w-screen bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:to-black/0 flex items-center justify-center">
//         <div className="relative z-10">
//           <img
//             src="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
//             alt="Kuningan Beu Logo"
//             className="w-[500px]"
//           />
//         </div>
//       </div>

//       <div className="subsector pt-20">
//         <h1 className="text-center lg:text-5xl text-3xl font-bold mb-2">
//           <span className="text-green-800">17</span> SUB SEKTOR
//         </h1>
//         <p className="text-center font-medium mb-10">Di Kabupaten Kuningan</p>
//       </div>

//       <div className="grid grid-cols-4 gap-5 px-20">
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-masks-theater text-4xl"></i>
//           </div>
//           <p className="card-text">Seni Pertunjukan</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-icons text-4xl"></i>
//           </div>
//           <p className="card-text">Musik</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-brush text-4xl"></i>
//           </div>
//           <p className="card-text">Seni Rupa</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-shirt text-4xl"></i>
//           </div>
//           <p className="card-text">Fashion</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-camera text-4xl"></i>
//           </div>
//           <p className="card-text">Fotografi</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-tv text-4xl"></i>
//           </div>
//           <p className="card-text">Televisi Dan Radio</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-bullhorn text-4xl"></i>
//           </div>
//           <p className="card-text">Periklanan</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-utensils text-4xl"></i>
//           </div>
//           <p className="card-text">Kuliner</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-gamepad text-4xl"></i>
//           </div>
//           <p className="card-text">Pengembangan Permainan</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-hands text-4xl"></i>
//           </div>
//           <p className="card-text">Kriya</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-house-laptop text-4xl"></i>
//           </div>
//           <p className="card-text">Desain Interior</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-pen-ruler text-4xl"></i>
//           </div>
//           <p className="card-text">Desain Produk</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-clapperboard text-4xl"></i>
//           </div>
//           <p className="card-text">Film, Animasi, Dan Video</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-draw-polygon text-4xl"></i>
//           </div>
//           <p className="card-text">Desain Komunikasi Visual</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-city text-4xl"></i>
//           </div>
//           <p className="card-text">Arsitektur</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-feather-pointed text-4xl"></i>
//           </div>
//           <p className="card-text">Penerbitan</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//         <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
//           <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
//             <i className="fa-solid fa-mobile-screen-button text-4xl"></i>
//           </div>
//           <p className="card-text">Aplikasi</p>
//           <p className="text-gray-500">Sudah Ada - Sektor</p>
//         </div>
//       </div>
//     </>
//   );
// }

import sektors from "./../../data/sektor.json";

import Header from "alope-ui/Header";
import Footer from "alope-ui/Footer";

export default function HeaderHomeSection() {
  return (
    <>
      {/* <div className="bg-[url(https://images.unsplash.com/photo-1505416795390-0beeb662b1f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative h-screen w-screen bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:to-black/0 flex items-center justify-center">
        <div className="relative z-10">
          <img
            src="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
            alt="Kuningan Beu Logo"
            className="w-[500px]"
          />
        </div>
      </div> */}

      <Header
        bgUrls={[
          "https://images.unsplash.com/photo-1613463639651-4aca3f3dd83e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1609174112693-52fdcebffd89?q=80&w=1777&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1567366865909-4841d122b8ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ]}
        logoUrl="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
        title="EKONOMI KREATIF KUNINGAN "
        description="EKRAF is a simple and flexible component library for your React project. It is built with Vite, ESLint, Tailwind CSS, and uses Heroicons for icons, enabling fast development and clean code."
      />

      <div className="subsector pt-20">
        <h1 className="text-center lg:text-5xl text-3xl font-bold mb-2">
          <span className="text-blue-400">17</span> SUB SEKTOR
        </h1>
        <p className="text-center font-medium mb-10">Di Kabupaten Kuningan</p>
      </div>

      <div className="grid grid-cols-4 gap-5 px-20">
        {sektors.map((sektor) => (
          <>
            <div className="p-5 shadow-lg w-full bg-slate-50 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-slate-300 text-center">
              <div className="icon-container bg-white h-16 w-16 flex items-center justify-center rounded-full mx-auto">
                <i className={`fa-solid ${sektor.icon} text-4xl`}></i>
              </div>
              <p className="card-text">{sektor.title}</p>
              <p className="text-gray-500">{sektor.subtitle}</p>
            </div>
          </>
        ))}
      </div>
      <Footer
        imgUrlLogo="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
        text="Connect, Collaboration, Commerce"
        bottomText="Copyright by Ekraf Kuningan, since &copy; 2024"
        links={[
          {
            to: "",
            placeholder: <i className="fa-brands fa-instagram text-xl"></i>,
          },
          {
            to: "",
            placeholder: <i className="fa-brands fa-tiktok text-xl"></i>,
          },
          {
            to: "",
            placeholder: <i className="fa-brands fa-youtube text-xl"></i>,
          },
        ]}
      />
    </>
  );
}
