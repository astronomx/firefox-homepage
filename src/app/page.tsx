import IDNext from "./components/IDNext"

export default function Home({ 
  searchParams 
}: { 
  searchParams: { id: string | undefined }
}) {

  console.log(searchParams)

  return (
    <>
      <div className="flex min-h-screen flex-col items-center" style={{ backgroundImage: "url('https://wallpaperaccess.com/full/8351171.gif')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <IDNext />
      </div>
    </>
  )
}


// Pak google link
// plaats e.target.value van input in q param
// slice woorden en zet '+' tussen de woorden
// relocate met a tag onclick van search icon of enter

