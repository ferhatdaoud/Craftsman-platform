import { Moon, Sun, Wrench } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";

const header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-center pt-8 pb-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <div className="flex items-center gap-2">
        <div className="bg-primary text-primary-foreground p-2 rounded-lg">
          <Wrench className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">Craftsman</h1>
      </div>
    </div>
  );
};

export default header;
