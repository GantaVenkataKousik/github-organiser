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
    <Card className="card-shadow">
      <CardHeader>
        <CardTitle>Popular Languages</CardTitle>
        <CardDescription>Most used programming languages</CardDescription>
      </CardHeader>
      <CardContent className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={languageData}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
              labelLine={false}
            >
              {languageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value}%`, "Usage"]}
              contentStyle={{ borderRadius: "8px", border: "1px solid #e2e8f0" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
