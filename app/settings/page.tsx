import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar className="w-[120px] shrink-0" />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage your account and application settings</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="organization">Organization</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="api">API & Integrations</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold">Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-center mb-6">
                        <div className="relative">
                          <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-2xl font-bold">
                            TA
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                          >
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
                              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                              <path d="m15 5 4 4" />
                            </svg>
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </label>
                          <Input id="firstName" defaultValue="Tiger" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </label>
                          <Input id="lastName" defaultValue="Aster" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input id="email" type="email" defaultValue="tiger.aster@gmail.com" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone Number
                        </label>
                        <Input id="phone" type="tel" defaultValue="+91 98765 43210" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="jobTitle" className="text-sm font-medium">
                          Job Title
                        </label>
                        <Input id="jobTitle" defaultValue="System Administrator" />
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-primary-700 hover:bg-primary-800">Save Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl font-bold">Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="currentPassword" className="text-sm font-medium">
                          Current Password
                        </label>
                        <Input id="currentPassword" type="password" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="newPassword" className="text-sm font-medium">
                          New Password
                        </label>
                        <Input id="newPassword" type="password" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm New Password
                        </label>
                        <Input id="confirmPassword" type="password" />
                      </div>

                      <div className="rounded-lg border p-4 mt-6">
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center">
                            <input type="checkbox" id="2fa" className="h-4 w-4 rounded border-gray-300" />
                            <label htmlFor="2fa" className="ml-2 text-sm font-medium">
                              Enable 2FA
                            </label>
                          </div>
                          <Button variant="outline" size="sm">
                            Setup
                          </Button>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button className="bg-primary-700 hover:bg-primary-800">Update Password</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="organization">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Organization Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="h-24 w-24 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 text-2xl font-bold">
                          A
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                        >
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
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                            <path d="m15 5 4 4" />
                          </svg>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="orgName" className="text-sm font-medium">
                        Organization Name
                      </label>
                      <Input id="orgName" defaultValue="Ambiator HQ" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="industry" className="text-sm font-medium">
                          Industry
                        </label>
                        <select
                          id="industry"
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        >
                          <option>Energy & Utilities</option>
                          <option>Manufacturing</option>
                          <option>Technology</option>
                          <option>Healthcare</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="size" className="text-sm font-medium">
                          Company Size
                        </label>
                        <select
                          id="size"
                          className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                        >
                          <option>1-10</option>
                          <option>11-50</option>
                          <option>51-200</option>
                          <option>201-500</option>
                          <option>501+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <Input id="address" defaultValue="123 Energy Lane" />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="city" className="text-sm font-medium">
                          City
                        </label>
                        <Input id="city" defaultValue="Mumbai" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="state" className="text-sm font-medium">
                          State
                        </label>
                        <Input id="state" defaultValue="Maharashtra" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="zip" className="text-sm font-medium">
                          Postal Code
                        </label>
                        <Input id="zip" defaultValue="400001" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="country" className="text-sm font-medium">
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Canada</option>
                        <option>Australia</option>
                      </select>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary-700 hover:bg-primary-800">Save Organization</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appearance">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Appearance Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="font-medium">Theme</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="border rounded-lg p-4 cursor-pointer bg-white">
                          <div className="h-20 bg-white border-b mb-2"></div>
                          <p className="text-sm font-medium text-center">Light</p>
                        </div>
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-20 bg-gray-900 border-b mb-2"></div>
                          <p className="text-sm font-medium text-center">Dark</p>
                        </div>
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-20 bg-gradient-to-b from-white to-gray-900 border-b mb-2"></div>
                          <p className="text-sm font-medium text-center">System</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Display Options</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="dense-mode" className="font-medium">
                              Dense Mode
                            </Label>
                            <p className="text-sm text-muted-foreground">Compact UI with reduced spacing</p>
                          </div>
                          <Switch id="dense-mode" />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="animations" className="font-medium">
                              Animations
                            </Label>
                            <p className="text-sm text-muted-foreground">Enable UI animations and transitions</p>
                          </div>
                          <Switch id="animations" defaultChecked />
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="sidebar-labels" className="font-medium">
                              Sidebar Labels
                            </Label>
                            <p className="text-sm text-muted-foreground">Show text labels in sidebar navigation</p>
                          </div>
                          <Switch id="sidebar-labels" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Dashboard Layout</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-32 border mb-2 flex">
                            <div className="w-1/4 bg-gray-100 h-full"></div>
                            <div className="w-3/4 p-2">
                              <div className="h-1/3 bg-gray-100 mb-2"></div>
                              <div className="h-2/3 bg-gray-100"></div>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-center">Default</p>
                        </div>
                        <div className="border rounded-lg p-4 cursor-pointer">
                          <div className="h-32 border mb-2 flex flex-col">
                            <div className="h-1/4 bg-gray-100 w-full"></div>
                            <div className="h-3/4 p-2">
                              <div className="h-full bg-gray-100"></div>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-center">Compact</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-primary-700 hover:bg-primary-800">Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">API & Integrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium">API Keys</h3>
                      <div className="rounded-lg border">
                        <div className="p-4 border-b">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Production API Key</h4>
                              <p className="text-sm text-muted-foreground">Last used 2 days ago</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Regenerate
                              </Button>
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 bg-muted p-2 rounded font-mono text-sm">
                            ••••••••••••••••••••••••••••••••••••••••••
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Development API Key</h4>
                              <p className="text-sm text-muted-foreground">Last used 5 hours ago</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                Regenerate
                              </Button>
                              <Button variant="outline" size="sm">
                                Copy
                              </Button>
                            </div>
                          </div>
                          <div className="mt-2 bg-muted p-2 rounded font-mono text-sm">
                            ••••••••••••••••••••••••••••••••••••••••••
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Connected Services</h3>
                        <Button variant="outline" size="sm">
                          Connect New
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                              <svg
                                className="h-6 w-6"
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
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect height="12" width="4" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium">LinkedIn</h4>
                              <p className="text-sm text-muted-foreground">Connected on Apr 12, 2023</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            Disconnect
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                              <svg
                                className="h-6 w-6"
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
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-medium">Google Analytics</h4>
                              <p className="text-sm text-muted-foreground">Connected on May 3, 2023</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            Disconnect
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium">Webhooks</h3>
                      <div className="rounded-lg border">
                        <div className="p-4 border-b">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Device Status Updates</h4>
                              <p className="text-sm text-muted-foreground">
                                https://api.yourcompany.com/webhooks/devices
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-sm">Active</span>
                              </div>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium">Energy Reports</h4>
                              <p className="text-sm text-muted-foreground">
                                https://api.yourcompany.com/webhooks/reports
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                <span className="text-sm">Active</span>
                              </div>
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <Button variant="outline">Add Webhook</Button>
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
