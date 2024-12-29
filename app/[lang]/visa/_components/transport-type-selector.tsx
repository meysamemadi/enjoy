import { cn } from "@/lib/utils"
import { Plane, Train, Bus } from 'lucide-react'

const transportTypes = [
  { id: "airplane", icon: Plane, label: "Airplane" },
  { id: "train", icon: Train, label: "Train" },
  { id: "bus", icon: Bus, label: "Bus" },
] as const

type TransportType = "airplane" | "train" | "bus"

interface TransportTypeSelectorProps {
  selectedType: TransportType
  onSelect: (type: TransportType) => void
}

export function TransportTypeSelector({ selectedType, onSelect }: TransportTypeSelectorProps) {
  return (
    <div className="mb-8">
      <div className="flex gap-x-[6px] md:gap-x-4 border-b border-[#A07E62]">
        {transportTypes.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={cn(
              "w-full flex flex-col items-center gap-2 text-[#A07E62] transition-colors py-2 px-4 relative",
              selectedType === id && "font-semibold"
            )}
          >
            <Icon className="w-8 h-8" />
            <span>{label}</span>
            {selectedType === id && (
              <>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A07E62]"></div>
                <div className="absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#A07E62]"></div>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

