import Navbar from "alope-ui/Navbar";

import HeaderHomeSection from "./sections/Home";

export default function App() {
  return (
    <>
      <Navbar
        logo={
          <img
            src="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
            className="w-[50px]"
          />
        }
        title={"EKRAF KUNINGAN"}
        links={[
          {
            placeholder: "Beranda",
            to: "/",
          },
          {
            placeholder: "Sektor",
            to: "/Sektor",
          },
          {
            placeholder: "Agenda",
            to: "/Agenda",
          },
          {
            placeholder: "Tentang",
            to: "/Tentang",
          },
        ]}
        stickyTop={true}
        backDropBlur
        withSearchBar
      />
      <HeaderHomeSection />
    </>
  );
}
