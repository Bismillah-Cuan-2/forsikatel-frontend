
interface Header1Props {
    title: string
    text: string
}
const Header1: React.FC<Header1Props> = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-primary-300">
            { title }
        </h1>
        <p className="font-source font-semibold text-neutral-900">
            { text }
        </p>
    </div>
  )
}

export default Header1