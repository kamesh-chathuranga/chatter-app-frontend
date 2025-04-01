import React from "react";
import SideBar from "@/components/side-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatTopBar from "@/components/chat-top-bar";
import SearchBar from "@/components/search-bar";
import ChatList from "@/components/chat/chat-list";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-screen max-h-screen max-w-full">
      <SideBar />

      <ResizablePanelGroup direction="horizontal" className="h-full ">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={50}>
          <div className="flex flex-col h-full px-4 pt-2 gap-y-4">
            <div className="flex flex-col gap-y-3">
              <ChatTopBar />
              <SearchBar />
            </div>
            <ChatList />
          </div>
        </ResizablePanel>
        <ResizableHandle className="w-[2px]" />
        <ResizablePanel defaultSize={75} minSize={50}>
          <aside className="w-full h-full">{children}</aside>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default DashboardLayout;
