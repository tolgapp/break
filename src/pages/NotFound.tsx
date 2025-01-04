import BackButton from "../components/BackButton"

const NotFound = () => {
  return (
    <div className="flex flex-col h-dvh justify-center items-center w-full gap-3">
      <BackButton />
    <h2 className="text-white text-8xl font-semibold">404</h2>
    <h3 className="text-white text-2xl font-black">Not Found</h3>

    </div>
  )
}
export default NotFound