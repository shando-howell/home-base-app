import '@/assets/styles/globals.css';

export const metadata = {
    title: "Home Base",
    keywords: "rental, property, real estate",
    description: "Find the perfect rental property."
}

const MainLayout = ({children}) => {
  return (
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default MainLayout