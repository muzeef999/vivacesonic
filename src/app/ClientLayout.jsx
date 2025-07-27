"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";


const queryClient = new QueryClient()


export default function ClientComponent({ children }) {
 return (
    <QueryClientProvider  client={queryClient}>
       <Toaster />
    <main>{children}</main>
    </QueryClientProvider>
 )
}