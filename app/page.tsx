import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { BarChart3, Users, Plus } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Polling App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, share, and participate in polls with ease. A modern polling
            platform built with Next.js and Shadcn UI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>View Polls</CardTitle>
              <CardDescription>
                Browse and participate in existing polls from the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/polls">
                <Button className="w-full">Browse Polls</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Plus className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Create Poll</CardTitle>
              <CardDescription>
                Create your own polls and share them with others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/polls/create">
                <Button className="w-full" variant="outline">
                  Create New Poll
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Authentication</CardTitle>
              <CardDescription>
                Sign in to manage your polls and track your participation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/auth">
                <Button className="w-full" variant="secondary">
                  Sign In
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
