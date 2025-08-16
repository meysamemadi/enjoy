import { MapPin, Heart, BookOpen, Briefcase, User } from 'lucide-react'
import { cn } from "@/lib/utils"

const visaTypes = [
  { id: "tourism", icon: MapPin, label: "Tourism" },
  { id: "medical", icon: Heart, label: "Medical" },
  { id: "education", icon: BookOpen, label: "Education" },
  { id: "business", icon: Briefcase, label: "Business" },
  { id: "work", icon: User, label: "Work" },
] as const

interface VisaTypeSelectorProps {
  selectedType: string
  onSelect: (type: string) => void
}

export function VisaTypeSelector({ selectedType, onSelect }: VisaTypeSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg text-[#A07E62] mb-4">Select visa type</h2>
      <div className="flex border-b border-[#A07E62]">
        {visaTypes.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onSelect(id)}
            className={cn(
              "flex flex-col items-center gap-2 text-[#A07E62] transition-colors py-2 px-4 relative flex-1",
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

