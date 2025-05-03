import { cn } from "@/lib/utils"

interface LanguageData {
  name: string
  percentage: number
  color: string
}

interface LanguageBarProps {
  languages: LanguageData[]
  className?: string
}

export function LanguageBar({ languages, className }: LanguageBarProps) {
  return (
    <div className={cn("language-bar", className)}>
      {languages.map((lang, index) => (
        <div
          key={index}
          className="language-segment"
          style={{
            width: `${lang.percentage}%`,
            backgroundColor: lang.color,
          }}
          title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
        />
      ))}
    </div>
  )
}
