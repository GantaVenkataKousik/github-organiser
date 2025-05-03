import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function UsersPage() {
  return (
    <div className="flex h-screen bg-muted/30">
      <Sidebar className="w-[120px] shrink-0" />
      <div className="flex-1 overflow-auto">
        <main className="container py-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Users</h1>
              <p className="text-sm text-muted-foreground mt-1">Manage user accounts and permissions</p>
            </div>
            <Button className="bg-primary-700 hover:bg-primary-800">
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add User
            </Button>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <Input placeholder="Search users..." className="pl-10" />
            </div>
            <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option>All Roles</option>
              <option>Administrator</option>
              <option>Manager</option>
              <option>Technician</option>
              <option>Viewer</option>
            </select>
            <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6 bg-white">
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="admins">Administrators</TabsTrigger>
              <TabsTrigger value="managers">Managers</TabsTrigger>
              <TabsTrigger value="technicians">Technicians</TabsTrigger>
              <TabsTrigger value="viewers">Viewers</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-medium">Name</th>
                          <th className="text-left py-3 px-4 font-medium">Email</th>
                          <th className="text-left py-3 px-4 font-medium">Role</th>
                          <th className="text-left py-3 px-4 font-medium">Status</th>
                          <th className="text-left py-3 px-4 font-medium">Last Active</th>
                          <th className="text-left py-3 px-4 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Rajesh Kumar",
                            email: "rajesh.kumar@ambiator.com",
                            role: "Administrator",
                            status: "active",
                            lastActive: "Just now",
                          },
                          {
                            name: "Priya Sharma",
                            email: "priya.sharma@ambiator.com",
                            role: "Manager",
                            status: "active",
                            lastActive: "2 hours ago",
                          },
                          {
                            name: "Amit Patel",
                            email: "amit.patel@ambiator.com",
                            role: "Technician",
                            status: "active",
                            lastActive: "1 day ago",
                          },
                          {
                            name: "Neha Singh",
                            email: "neha.singh@ambiator.com",
                            role: "Viewer",
                            status: "inactive",
                            lastActive: "2 weeks ago",
                          },
                          {
                            name: "Vikram Malhotra",
                            email: "vikram.malhotra@ambiator.com",
                            role: "Manager",
                            status: "active",
                            lastActive: "3 hours ago",
                          },
                          {
                            name: "Sunita Reddy",
                            email: "sunita.reddy@ambiator.com",
                            role: "Technician",
                            status: "pending",
                            lastActive: "Never",
                          },
                          {
                            name: "Arjun Nair",
                            email: "arjun.nair@ambiator.com",
                            role: "Administrator",
                            status: "active",
                            lastActive: "5 minutes ago",
                          },
                          {
                            name: "Meera Joshi",
                            email: "meera.joshi@ambiator.com",
                            role: "Viewer",
                            status: "active",
                            lastActive: "Yesterday",
                          },
                        ].map((user, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-sm font-medium mr-3">
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                {user.name}
                              </div>
                            </td>
                            <td className="py-3 px-4">{user.email}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant={
                                  user.role === "Administrator"
                                    ? "default"
                                    : user.role === "Manager"
                                      ? "secondary"
                                      : user.role === "Technician"
                                        ? "outline"
                                        : "ghost"
                                }
                              >
                                {user.role}
                              </Badge>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <span
                                  className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                    user.status === "active"
                                      ? "bg-green-500"
                                      : user.status === "pending"
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                  }`}
                                ></span>
                                {user.status}
                              </div>
                            </td>
                            <td className="py-3 px-4">{user.lastActive}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800">
                                  <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    ></path>
                                  </svg>
                                </button>
                                <button className="text-red-600 hover:text-red-800">
                                  <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-muted-foreground">Showing 1-8 of 8 users</div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" disabled>
                        Previous
                      </Button>
                      <Button variant="outline" size="sm" disabled>
                        Next
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admins">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Administrators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Users with full system access and permissions</p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Rajesh Kumar",
                        email: "rajesh.kumar@ambiator.com",
                        role: "Administrator",
                        status: "active",
                        lastActive: "Just now",
                      },
                      {
                        name: "Arjun Nair",
                        email: "arjun.nair@ambiator.com",
                        role: "Administrator",
                        status: "active",
                        lastActive: "5 minutes ago",
                      },
                    ].map((user, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-lg font-medium mr-4">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="default">{user.role}</Badge>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-500"></span>
                            <span className="text-sm">{user.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="managers">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Managers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Users with device management and reporting permissions</p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Priya Sharma",
                        email: "priya.sharma@ambiator.com",
                        role: "Manager",
                        status: "active",
                        lastActive: "2 hours ago",
                      },
                      {
                        name: "Vikram Malhotra",
                        email: "vikram.malhotra@ambiator.com",
                        role: "Manager",
                        status: "active",
                        lastActive: "3 hours ago",
                      },
                    ].map((user, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-700 text-lg font-medium mr-4">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{user.role}</Badge>
                          <div className="flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full mr-2 bg-green-500"></span>
                            <span className="text-sm">{user.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technicians">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Technicians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Users with device maintenance and monitoring permissions</p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Amit Patel",
                        email: "amit.patel@ambiator.com",
                        role: "Technician",
                        status: "active",
                        lastActive: "1 day ago",
                      },
                      {
                        name: "Sunita Reddy",
                        email: "sunita.reddy@ambiator.com",
                        role: "Technician",
                        status: "pending",
                        lastActive: "Never",
                      },
                    ].map((user, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-lg font-medium mr-4">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{user.role}</Badge>
                          <div className="flex items-center">
                            <span
                              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                user.status === "active" ? "bg-green-500" : "bg-yellow-500"
                              }`}
                            ></span>
                            <span className="text-sm">{user.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="viewers">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold">Viewers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Users with read-only access to the system</p>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Neha Singh",
                        email: "neha.singh@ambiator.com",
                        role: "Viewer",
                        status: "inactive",
                        lastActive: "2 weeks ago",
                      },
                      {
                        name: "Meera Joshi",
                        email: "meera.joshi@ambiator.com",
                        role: "Viewer",
                        status: "active",
                        lastActive: "Yesterday",
                      },
                    ].map((user, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center mb-4">
                          <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-lg font-medium mr-4">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <h3 className="font-medium">{user.name}</h3>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="ghost">{user.role}</Badge>
                          <div className="flex items-center">
                            <span
                              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                user.status === "active" ? "bg-green-500" : "bg-red-500"
                              }`}
                            ></span>
                            <span className="text-sm">{user.status}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">Last active: {user.lastActive}</p>
                        <div className="flex justify-end mt-4 space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-800">
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
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
