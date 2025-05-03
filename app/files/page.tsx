import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Plus, Search, Filter, Edit, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FilesPage() {
  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar className="w-[120px] shrink-0" />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Device Management</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your devices and units</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
              <Button size="sm" className="gap-2 bg-primary-700 hover:bg-primary-800">
                <Plus className="h-4 w-4" />
                Add Device
              </Button>
            </div>
          </div>

          <Tabs defaultValue="devices" className="w-full">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="devices">Devices</TabsTrigger>
              <TabsTrigger value="units">Units</TabsTrigger>
              <TabsTrigger value="ghg">GHG Factors</TabsTrigger>
            </TabsList>

            <TabsContent value="devices">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Device</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search devices..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <select className="h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>All</option>
                      <option>AMBIATOR 5TR</option>
                      <option>AMBIATOR 1.5TR</option>
                      <option>AMBIATOR 1TR</option>
                    </select>
                  </div>

                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left font-medium">Device Id</th>
                            <th className="px-4 py-3 text-left font-medium">DeviceType</th>
                            <th className="px-4 py-3 text-left font-medium">Device serial no</th>
                            <th className="px-4 py-3 text-left font-medium">Affiliate Code</th>
                            <th className="px-4 py-3 text-left font-medium">City</th>
                            <th className="px-4 py-3 text-left font-medium">Status</th>
                            <th className="px-4 py-3 text-left font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">175</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB003</td>
                            <td className="px-4 py-3">IIHS</td>
                            <td className="px-4 py-3">Bangalore</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">180</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB004</td>
                            <td className="px-4 py-3">.</td>
                            <td className="px-4 py-3">Hyderabad</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">194</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB002</td>
                            <td className="px-4 py-3">IIHS</td>
                            <td className="px-4 py-3">Bangalore</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">203</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB005</td>
                            <td className="px-4 py-3">-</td>
                            <td className="px-4 py-3">Mumbai</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Maintenance</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">235</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB014</td>
                            <td className="px-4 py-3">MLDL</td>
                            <td className="px-4 py-3">Delhi</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">237</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB015</td>
                            <td className="px-4 py-3">APD</td>
                            <td className="px-4 py-3">Chennai</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Offline</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">238</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB012</td>
                            <td className="px-4 py-3">AMBIAFCODE</td>
                            <td className="px-4 py-3">Pune</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">245</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB009</td>
                            <td className="px-4 py-3">AMBIAFCODE</td>
                            <td className="px-4 py-3">Hyderabad</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/30">
                            <td className="px-4 py-3">246</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">AMB010</td>
                            <td className="px-4 py-3">AMBIAFCODE</td>
                            <td className="px-4 py-3">Kolkata</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between border-t px-4 py-2">
                      <div className="text-sm text-muted-foreground">
                        Rows per page:
                        <select className="ml-2 rounded-md border-0 bg-transparent text-sm">
                          <option>100</option>
                          <option>50</option>
                          <option>25</option>
                        </select>
                      </div>
                      <div className="text-sm text-muted-foreground">1–13 of 13</div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="units">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-bold">Units</CardTitle>
                  <Button size="sm" className="gap-1 bg-primary-700 hover:bg-primary-800">
                    <Plus className="h-4 w-4" />
                    Add Unit
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left font-medium">Serial Number</th>
                            <th className="px-4 py-3 text-left font-medium">Device Type</th>
                            <th className="px-4 py-3 text-left font-medium">Friendly Name</th>
                            <th className="px-4 py-3 text-left font-medium">Location</th>
                            <th className="px-4 py-3 text-left font-medium">Company</th>
                            <th className="px-4 py-3 text-left font-medium">Customer Name</th>
                            <th className="px-4 py-3 text-left font-medium">Email</th>
                            <th className="px-4 py-3 text-left font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">AMB002</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">Kitchen South</td>
                            <td className="px-4 py-3">12.918600°, 77.437800°</td>
                            <td className="px-4 py-3">Indian Institute for Human Settlements</td>
                            <td className="px-4 py-3">Pranjal Hazarika</td>
                            <td className="px-4 py-3">Pranjal.hazarika@iihs.ac.in</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">AMB003</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">Kitchen North</td>
                            <td className="px-4 py-3">12.918700°, 77.437800°</td>
                            <td className="px-4 py-3">Indian Institute for Human Settlements</td>
                            <td className="px-4 py-3">Pranjal Hazarika</td>
                            <td className="px-4 py-3">Pranjal.hazarika@iihs.ac.in</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">AMB004</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">Ambiator HQ</td>
                            <td className="px-4 py-3">17.401800°, 78.560200°</td>
                            <td className="px-4 py-3">Ambiator HQ</td>
                            <td className="px-4 py-3">APL - TA</td>
                            <td className="px-4 py-3">tiger.aster@gmail.com</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">AMB005</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">truth be told</td>
                            <td className="px-4 py-3">No coordinates</td>
                            <td className="px-4 py-3">Mapro Gardens</td>
                            <td className="px-4 py-3">Nikunj Vora</td>
                            <td className="px-4 py-3">Nikunj@mapro.com</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/30">
                            <td className="px-4 py-3">AMB009</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">Roof Left</td>
                            <td className="px-4 py-3">17.423600°, 78.402200°</td>
                            <td className="px-4 py-3">Synthokem Labs</td>
                            <td className="px-4 py-3">Jayant Tagore</td>
                            <td className="px-4 py-3">jayant_tagore@synthokem.com</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between border-t px-4 py-2">
                      <div className="text-sm text-muted-foreground">
                        Rows per page:
                        <select className="ml-2 rounded-md border-0 bg-transparent text-sm">
                          <option>100</option>
                          <option>50</option>
                          <option>25</option>
                        </select>
                      </div>
                      <div className="text-sm text-muted-foreground">1–5 of 5</div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ghg">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xl font-bold">Device GHG Factor</CardTitle>
                  <Button size="sm" className="gap-1 bg-primary-700 hover:bg-primary-800">
                    <Plus className="h-4 w-4" />
                    ADD DEVICE GHG FACTOR
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left font-medium">Start Date</th>
                            <th className="px-4 py-3 text-left font-medium">Country Code</th>
                            <th className="px-4 py-3 text-left font-medium">Device Type</th>
                            <th className="px-4 py-3 text-left font-medium">Motor Type</th>
                            <th className="px-4 py-3 text-left font-medium">GHGe</th>
                            <th className="px-4 py-3 text-left font-medium">Default Energy Use</th>
                            <th className="px-4 py-3 text-left font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">2025-01-20T18:30:00</td>
                            <td className="px-4 py-3">IN</td>
                            <td className="px-4 py-3">AMBIATOR 5TR</td>
                            <td className="px-4 py-3">BLDC</td>
                            <td className="px-4 py-3">0.000975</td>
                            <td className="px-4 py-3">7.50</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">2025-03-29T18:30:00</td>
                            <td className="px-4 py-3">IN</td>
                            <td className="px-4 py-3">AMBIATOR 1.5TR</td>
                            <td className="px-4 py-3">BLDC</td>
                            <td className="px-4 py-3">0.000975</td>
                            <td className="px-4 py-3">2.20</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">2025-03-29T18:30:00</td>
                            <td className="px-4 py-3">IN</td>
                            <td className="px-4 py-3">AMBIATOR 1TR</td>
                            <td className="px-4 py-3">BDLC</td>
                            <td className="px-4 py-3">0.000975</td>
                            <td className="px-4 py-3">1.50</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/30">
                            <td className="px-4 py-3">2025-03-29T18:30:00</td>
                            <td className="px-4 py-3">IN</td>
                            <td className="px-4 py-3">SPACECOOL1.5TR</td>
                            <td className="px-4 py-3">BLDC</td>
                            <td className="px-4 py-3">0.000975</td>
                            <td className="px-4 py-3">2.20</td>
                            <td className="px-4 py-3">
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between border-t px-4 py-2">
                      <div className="text-sm text-muted-foreground">
                        Rows per page:
                        <select className="ml-2 rounded-md border-0 bg-transparent text-sm">
                          <option>100</option>
                          <option>50</option>
                          <option>25</option>
                        </select>
                      </div>
                      <div className="text-sm text-muted-foreground">1–4 of 4</div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon" disabled>
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
