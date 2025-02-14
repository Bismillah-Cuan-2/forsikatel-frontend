interface SetorNgajiLaoyoutProps {
    children: React.ReactNode
}

const SetorNgajiLayout: React.FC<SetorNgajiLaoyoutProps> = ({ children }) => {
  return (
    <div className="flex px-8 flex-col gap-8">
        { children }
    </div>
  )
}

export default SetorNgajiLayout