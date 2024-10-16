export default function HeaderHomeSection() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1505416795390-0beeb662b1f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative h-screen w-screen bg-cover bg-center after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/60 after:to-black/0 flex items-center justify-center">
      <div className="relative z-10">
        <img
          src="https://kuninganbeu.kuningankab.go.id/images/logo/KuninganBeu_Putih.png"
          alt="Kuningan Beu Logo"
          className="w-[200px]"
        />
      </div>
    </div>
  );
}
