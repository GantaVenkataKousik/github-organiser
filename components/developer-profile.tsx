import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, Code, Eye, LinkIcon, Palette } from "lucide-react"

export function DeveloperProfile() {
  return (
    <Card className="overflow-hidden border border-border/50 card-hover-effect card-shadow">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-2">
        <CardTitle className="font-semibold">Developer Profile</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dp.jpg-WGvrVpBKWuaxc8RmfUMEhRvzZLuXlO.jpeg"
                alt="Ganta Venkata Kousik"
                width={120}
                height={120}
                className="rounded-full border-4 border-white shadow-md"
              />
        
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold">Ganta Venkata Kousik</h2>
            <p className="text-primary font-medium">Software Developer</p>
            
            <p className="mt-3 text-sm text-muted-foreground">
              A versatile professional with expertise in full-stack development, UI/UX design, DevOps, and AI-driven automation. Experienced in working with 15+ startups to deliver end-to-end products from design to deployment. Specializes in building high-performance digital solutions across various domains, focusing on scalability, efficiency, and exceptional user experience.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Code className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="font-medium">190+</p>
                  <p className="text-xs text-muted-foreground">Repositories</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Eye className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="font-medium">1200+</p>
                  <p className="text-xs text-muted-foreground">Profile Views</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span>venkatakousikcse01@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://linktr.ee/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="h-4 w-4" />
                  LinkTree
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://www.linkedin.com/in/gantavenkatakousik/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://www.behance.net/venkatakousik" target="_blank" rel="noopener noreferrer">
                  <Palette className="h-4 w-4" />
                  Behance
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5"
                asChild
              >
                <a href="https://github.com/GantaVenkataKousik" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
