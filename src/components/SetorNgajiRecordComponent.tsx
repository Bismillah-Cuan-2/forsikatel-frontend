interface RecordComponentProps {
    label: string
    Icon: string
    value: string
}

const RecordComponent: React.FC<RecordComponentProps> = ({ label, value, Icon }) => {
  return (
    <div className="flex justify-between items-stretch w-full gap-2 p-2 font-source font-semibold text-neutral-900">
        <div className="flex flex-col items-start justify-between gap-1 text-xs">
            <div className="bg-neutral-50 rounded-full p-2 flex justify-center items-center shadow-sm">
                <img src={Icon} />
            </div>
            { label }
        </div>
        <div className="row-span-2 flex justify-center items-end text-3xl">
            { value }
        </div>
    </div>
  )
}

export default RecordComponent