import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"

export function PopularLanguages() {
  // Mock language data
  const languageData = [
    { name: "JavaScript", value: 28.3, color: "#f7df1e" },
    { name: "Python", value: 19.6, color: "#3776ab" },
    { name: "Java", value: 15.2, color: "#007396" },
    { name: "TypeScript", value: 12.8, color: "#3178c6" },
    { name: "C#", value: 8.4, color: "#239120" },
    { name: "Other", value: 15.7, color: "#6c757d" },
  ]

  return (
    <Card className="card-shadow h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Popular Languages</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">Most used programming languages</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[250px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <Pie
                data={languageData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                label={({ name, value }) => `${name} ${value}%`}
                labelLine={true}
                strokeWidth={1}
              >
                {languageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, "Usage"]}
                contentStyle={{ 
                  borderRadius: "8px", 
                  border: "1px solid #e2e8f0",
                  fontSize: "12px",
                  padding: "4px 8px"
                }}
              />
              <Legend 
                layout="horizontal" 
                verticalAlign="bottom" 
                align="center"
                wrapperStyle={{ fontSize: '12px', paddingTop: '15px' }}
                iconSize={10}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
