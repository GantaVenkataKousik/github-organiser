import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Bell,
  AlertTriangle,
  AlertCircle,
  CheckCircle,
  Clock,
  Settings,
  Zap,
  Mail,
  Phone,
} from "lucide-react"

export default function AlertsPage() {
  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar className="w-[120px] shrink-0" />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
              <p className="text-sm text-muted-foreground mt-1">Monitor system alerts and notifications</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="h-4 w-4" />
                Alert Settings
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="rounded-full bg-red-100 p-3 mb-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-medium">Critical</h3>
                <div className="text-3xl font-bold mt-1">3</div>
                <p className="text-xs text-muted-foreground mt-1">Require immediate attention</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="rounded-full bg-amber-100 p-3 mb-2">
                  <AlertCircle className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">Warning</h3>
                <div className="text-3xl font-bold mt-1">8</div>
                <p className="text-xs text-muted-foreground mt-1">Require attention soon</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="rounded-full bg-blue-100 p-3 mb-2">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-medium">Notifications</h3>
                <div className="text-3xl font-bold mt-1">12</div>
                <p className="text-xs text-muted-foreground mt-1">General system notifications</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex flex-col items-center">
                <div className="rounded-full bg-green-100 p-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-medium">Resolved</h3>
                <div className="text-3xl font-bold mt-1">24</div>
                <p className="text-xs text-muted-foreground mt-1">In the last 30 days</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="active">Active Alerts</TabsTrigger>
              <TabsTrigger value="history">Alert History</TabsTrigger>
              <TabsTrigger value="settings">Notification Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Active Alerts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input placeholder="Search alerts..." className="pl-9" />
                    </div>
                    <Button variant="outline" size="icon" className="h-10 w-10">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <select className="h-10 rounded-md border border-input bg-background px-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>All Severities</option>
                      <option>Critical</option>
                      <option>Warning</option>
                      <option>Info</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <h3 className="font-medium text-red-800">Device Offline: AMB015</h3>
                        </div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>
                      </div>
                      <p className="mt-2 text-sm text-red-700">
                        Device AMB015 (Office Unit) has been offline for more than 3 hours.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-red-700">
                          <Clock className="h-3 w-3" />
                          <span>3 hours ago</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                            Diagnose
                          </Button>
                          <Button size="sm" className="bg-red-700 hover:bg-red-800">
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <h3 className="font-medium text-red-800">High Energy Consumption: AMB002</h3>
                        </div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>
                      </div>
                      <p className="mt-2 text-sm text-red-700">
                        Device AMB002 (Kitchen South) is consuming 35% more energy than normal.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-red-700">
                          <Clock className="h-3 w-3" />
                          <span>45 minutes ago</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                            Diagnose
                          </Button>
                          <Button size="sm" className="bg-red-700 hover:bg-red-800">
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-600" />
                          <h3 className="font-medium text-red-800">Temperature Anomaly: AMB004</h3>
                        </div>
                        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>
                      </div>
                      <p className="mt-2 text-sm text-red-700">
                        Device AMB004 (Ambiator HQ) reporting abnormal temperature readings.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-red-700">
                          <Clock className="h-3 w-3" />
                          <span>1 hour ago</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                            Diagnose
                          </Button>
                          <Button size="sm" className="bg-red-700 hover:bg-red-800">
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-5 w-5 text-amber-600" />
                          <h3 className="font-medium text-amber-800">Maintenance Due: AMB005</h3>
                        </div>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Warning</Badge>
                      </div>
                      <p className="mt-2 text-sm text-amber-700">
                        Device AMB005 (truth be told) is due for scheduled maintenance.
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-amber-700">
                          <Clock className="h-3 w-3" />
                          <span>2 days ago</span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-amber-300 text-amber-700 hover:bg-amber-100"
                          >
                            Schedule
                          </Button>
                          <Button size="sm" className="bg-amber-700 hover:bg-amber-800">
                            Resolve
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Alert History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-3 text-left font-medium">Alert</th>
                            <th className="px-4 py-3 text-left font-medium">Device</th>
                            <th className="px-4 py-3 text-left font-medium">Severity</th>
                            <th className="px-4 py-3 text-left font-medium">Created</th>
                            <th className="px-4 py-3 text-left font-medium">Resolved</th>
                            <th className="px-4 py-3 text-left font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">Connection Lost</td>
                            <td className="px-4 py-3">AMB009</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>
                            </td>
                            <td className="px-4 py-3">May 1, 2025 09:23 AM</td>
                            <td className="px-4 py-3">May 1, 2025 10:45 AM</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">Low Efficiency</td>
                            <td className="px-4 py-3">AMB003</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Warning</Badge>
                            </td>
                            <td className="px-4 py-3">Apr 30, 2025 02:15 PM</td>
                            <td className="px-4 py-3">Apr 30, 2025 04:30 PM</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">Firmware Update Required</td>
                            <td className="px-4 py-3">AMB002</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Info</Badge>
                            </td>
                            <td className="px-4 py-3">Apr 29, 2025 11:05 AM</td>
                            <td className="px-4 py-3">Apr 29, 2025 11:30 AM</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-muted/30">
                            <td className="px-4 py-3">Temperature Anomaly</td>
                            <td className="px-4 py-3">AMB004</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Critical</Badge>
                            </td>
                            <td className="px-4 py-3">Apr 28, 2025 03:45 PM</td>
                            <td className="px-4 py-3">Apr 28, 2025 05:20 PM</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                            </td>
                          </tr>
                          <tr className="hover:bg-muted/30">
                            <td className="px-4 py-3">Maintenance Due</td>
                            <td className="px-4 py-3">AMB010</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Warning</Badge>
                            </td>
                            <td className="px-4 py-3">Apr 27, 2025 10:15 AM</td>
                            <td className="px-4 py-3">Apr 27, 2025 02:30 PM</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="flex items-center justify-between border-t px-4 py-2">
                      <div className="text-sm text-muted-foreground">
                        Rows per page:
                        <select className="ml-2 rounded-md border-0 bg-transparent text-sm">
                          <option>10</option>
                          <option>25</option>
                          <option>50</option>
                        </select>
                      </div>
                      <div className="text-sm text-muted-foreground">1–5 of 24</div>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="icon">
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
                        <Button variant="ghost" size="icon">
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

            <TabsContent value="settings">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Notification Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Alert Channels</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-primary-500" />
                            <div>
                              <h4 className="font-medium">Email Notifications</h4>
                              <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="email" className="h-4 w-4 rounded border-gray-300" checked />
                            <label htmlFor="email" className="ml-2 text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-primary-500" />
                            <div>
                              <h4 className="font-medium">SMS Notifications</h4>
                              <p className="text-sm text-muted-foreground">Receive alerts via SMS</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="sms" className="h-4 w-4 rounded border-gray-300" />
                            <label htmlFor="sms" className="ml-2 text-sm font-medium">
                              Disabled
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-primary-500" />
                            <div>
                              <h4 className="font-medium">Push Notifications</h4>
                              <p className="text-sm text-muted-foreground">Receive alerts via push notifications</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="push" className="h-4 w-4 rounded border-gray-300" checked />
                            <label htmlFor="push" className="ml-2 text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium">Alert Types</h3>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                            <div>
                              <h4 className="font-medium">Critical Alerts</h4>
                              <p className="text-sm text-muted-foreground">Device offline, major malfunctions</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="critical" className="h-4 w-4 rounded border-gray-300" checked />
                            <label htmlFor="critical" className="ml-2 text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                            <div>
                              <h4 className="font-medium">Warning Alerts</h4>
                              <p className="text-sm text-muted-foreground">Maintenance due, performance issues</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="warning" className="h-4 w-4 rounded border-gray-300" checked />
                            <label htmlFor="warning" className="ml-2 text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5 text-blue-500" />
                            <div>
                              <h4 className="font-medium">System Notifications</h4>
                              <p className="text-sm text-muted-foreground">Updates, general information</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="system" className="h-4 w-4 rounded border-gray-300" checked />
                            <label htmlFor="system" className="ml-2 text-sm font-medium">
                              Enabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary-700 hover:bg-primary-800">Save Settings</Button>
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
