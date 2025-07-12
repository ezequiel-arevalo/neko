import { Header } from "@/components/organisms/Header";
import { Outlet } from 'react-router'
import { Footer } from "@/components/organisms/Footer";


export const MainLayout = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center max-w-[1400px] mx-auto">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
