import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";
const TabsDemo = () => {
  return (
    <div className="flex justify-center align-middle">
      <div>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Login />
          </TabsContent>
          <TabsContent value="password">
            <Signup />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsDemo;
